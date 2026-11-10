import { useCallback, useEffect, useRef, useState } from "react";
import { Box, ButtonBase, Dialog, IconButton, Tooltip, Typography } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import ZoomInRounded from "@mui/icons-material/ZoomInRounded";
import ZoomOutRounded from "@mui/icons-material/ZoomOutRounded";
import CenterFocusStrongOutlined from "@mui/icons-material/CenterFocusStrongOutlined";

const MIN = 1;
const MAX = 4;
const CLICK_ZOOM = 2.5;
const RESET = { scale: 1, x: 0, y: 0 };

// The lightbox is always dark, independent of the site theme, to keep focus on the screenshot.
const ui = {
  fg: "#c0caf5",
  muted: "#9aa5ce",
  border: "#292e42",
  bg: "#0b0c12",
  panel: "rgba(26,27,38,0.85)",
  accent: "#7aa2f7",
};
const toolBtn = {
  color: ui.fg,
  border: `1px solid ${ui.border}`,
  borderRadius: 2,
  "&:hover": { borderColor: ui.accent },
};

export default function Lightbox({ open, images, index, onIndexChange, onClose, title }) {
  const [view, setView] = useState(RESET);
  const stageRef = useRef(null);
  const imgRef = useRef(null);
  const drag = useRef(null);
  const count = images.length;
  const current = images[index];

  // Keep the image inside the stage when zoomed.
  const clamp = useCallback((v) => {
    const stage = stageRef.current;
    const img = imgRef.current;
    if (!stage || !img) return v;
    const maxX = Math.max(0, (img.offsetWidth * v.scale - stage.clientWidth) / 2);
    const maxY = Math.max(0, (img.offsetHeight * v.scale - stage.clientHeight) / 2);
    return { scale: v.scale, x: Math.min(maxX, Math.max(-maxX, v.x)), y: Math.min(maxY, Math.max(-maxY, v.y)) };
  }, []);

  // Zoom keeping the point under the cursor fixed (point relative to the stage center).
  const zoomAt = useCallback(
    (nextScale, px = 0, py = 0) => {
      setView((v) => {
        const scale = Math.min(MAX, Math.max(MIN, nextScale(v.scale)));
        if (scale === MIN) return RESET;
        const k = scale / v.scale;
        return clamp({ scale, x: px - (px - v.x) * k, y: py - (py - v.y) * k });
      });
    },
    [clamp],
  );

  const pointFromEvent = (e) => {
    const r = stageRef.current.getBoundingClientRect();
    return [e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2];
  };

  const go = useCallback(
    (next) => {
      setView(RESET);
      onIndexChange((next + count) % count);
    },
    [count, onIndexChange],
  );

  // Non-passive wheel listener (React's onWheel is passive and can't preventDefault).
  const wheelCleanup = useRef(null);
  const setStage = useCallback(
    (node) => {
      wheelCleanup.current?.();
      stageRef.current = node;
      if (!node) return;
      const onWheel = (e) => {
        e.preventDefault();
        const [px, py] = pointFromEvent(e);
        zoomAt((s) => s * (e.deltaY < 0 ? 1.15 : 1 / 1.15), px, py);
      };
      node.addEventListener("wheel", onWheel, { passive: false });
      wheelCleanup.current = () => node.removeEventListener("wheel", onWheel);
    },
    [zoomAt],
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(index + 1);
      else if (e.key === "ArrowLeft") go(index - 1);
      else if (e.key === "+" || e.key === "=") zoomAt((s) => s * 1.25);
      else if (e.key === "-") zoomAt((s) => s / 1.25);
      else if (e.key === "0") setView(RESET);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, go, zoomAt]);

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (Math.abs(dx) + Math.abs(dy) > 5) d.moved = true;
    if (view.scale > 1 && d.moved) setView((v) => clamp({ ...v, x: d.ox + dx, y: d.oy + dy }));
  };
  const onPointerUp = (e) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    const dx = e.clientX - d.sx;
    if (!d.moved) {
      // click / tap toggles zoom at the pointer
      const [px, py] = pointFromEvent(e);
      zoomAt((s) => (s > 1 ? MIN : CLICK_ZOOM), px, py);
    } else if (view.scale === 1 && Math.abs(dx) > 50 && count > 1) {
      // swipe to navigate when not zoomed
      go(index + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      aria-label={`${title} screenshot viewer`}
      slotProps={{ paper: { sx: { bgcolor: ui.bg, color: ui.fg, border: 0, backgroundImage: "none" } } }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* top bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: { xs: 1.5, md: 3 },
            py: 1.25,
            borderBottom: `1px solid ${ui.border}`,
          }}
        >
          <Box sx={{ minWidth: 0, mr: "auto" }}>
            <Typography noWrap sx={{ fontWeight: 650, fontSize: { xs: 14, md: 16 } }}>
              {title}
            </Typography>
            <Typography noWrap sx={{ color: ui.muted, fontSize: 12.5 }}>
              {index + 1} / {count}
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                {"  "}| Click to zoom, drag to pan, arrows to navigate
              </Box>
            </Typography>
          </Box>
          <Tooltip title="Zoom out (-)">
            <span>
              <IconButton
                aria-label="Zoom out"
                onClick={() => zoomAt((s) => s / 1.25)}
                disabled={view.scale <= MIN}
                sx={toolBtn}
              >
                <ZoomOutRounded fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Zoom in (+)">
            <span>
              <IconButton
                aria-label="Zoom in"
                onClick={() => zoomAt((s) => s * 1.25)}
                disabled={view.scale >= MAX}
                sx={toolBtn}
              >
                <ZoomInRounded fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Reset zoom (0)">
            <span>
              <IconButton
                aria-label="Reset zoom"
                onClick={() => setView(RESET)}
                disabled={view.scale === 1}
                sx={{ ...toolBtn, display: { xs: "none", sm: "inline-flex" } }}
              >
                <CenterFocusStrongOutlined fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Close (Esc)">
            <IconButton aria-label="Close viewer" onClick={onClose} sx={{ ...toolBtn, ml: 1 }}>
              <CloseRounded fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        {/* stage */}
        <Box
          ref={setStage}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (drag.current = null)}
          sx={{
            position: "relative",
            flex: 1,
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
            touchAction: "none",
            userSelect: "none",
            cursor: view.scale > 1 ? "grab" : "zoom-in",
            "&:active": { cursor: view.scale > 1 ? "grabbing" : "zoom-in" },
          }}
        >
          <Box
            component="img"
            ref={imgRef}
            key={current.src}
            src={current.src}
            alt={current.alt}
            draggable={false}
            decoding="async"
            sx={{
              maxWidth: "calc(100% - 32px)",
              maxHeight: "calc(100% - 32px)",
              objectFit: "contain",
              borderRadius: 1,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
              transition: drag.current ? "none" : "transform .18s ease-out",
              willChange: "transform",
            }}
          />
          {count > 1 && (
            <>
              <IconButton
                aria-label="Previous screenshot"
                onPointerDown={(e) => e.stopPropagation()}
                onPointerUp={(e) => e.stopPropagation()}
                onClick={() => go(index - 1)}
                sx={{
                  ...toolBtn,
                  position: "absolute",
                  left: { xs: 8, md: 20 },
                  bgcolor: ui.panel,
                  "&:hover": { bgcolor: ui.panel, borderColor: ui.accent },
                }}
              >
                <ChevronLeftRounded />
              </IconButton>
              <IconButton
                aria-label="Next screenshot"
                onPointerDown={(e) => e.stopPropagation()}
                onPointerUp={(e) => e.stopPropagation()}
                onClick={() => go(index + 1)}
                sx={{
                  ...toolBtn,
                  position: "absolute",
                  right: { xs: 8, md: 20 },
                  bgcolor: ui.panel,
                  "&:hover": { bgcolor: ui.panel, borderColor: ui.accent },
                }}
              >
                <ChevronRightRounded />
              </IconButton>
            </>
          )}
        </Box>

        {/* caption + thumbnails */}
        <Box sx={{ borderTop: `1px solid ${ui.border}`, px: { xs: 1.5, md: 3 }, py: 1.5 }}>
          <Typography sx={{ color: ui.muted, fontSize: 14, textAlign: "center", mb: 1.25 }}>{current.alt}</Typography>
          {count > 1 && (
            <Box sx={{ display: "flex", gap: 1, justifyContent: { md: "center" }, overflowX: "auto", pb: 0.5 }}>
              {images.map((img, i) => (
                <ButtonBase
                  key={img.src}
                  onClick={() => go(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  sx={{
                    flex: "0 0 auto",
                    width: 84,
                    height: 52,
                    borderRadius: 1.5,
                    overflow: "hidden",
                    border: 2,
                    borderColor: i === index ? ui.accent : "transparent",
                    opacity: i === index ? 1 : 0.55,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={img.thumb}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left" }}
                  />
                </ButtonBase>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
