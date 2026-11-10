import { useRef } from "react";
import { Box, ButtonBase, IconButton, Tooltip, Typography } from "@mui/material";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import OpenInFullRounded from "@mui/icons-material/OpenInFullRounded";
import { fontMono } from "../../theme/theme";

const navBtn = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  bgcolor: "var(--ar-glass)",
  border: 1,
  borderColor: "divider",
  backdropFilter: "blur(6px)",
  color: "text.primary",
  "&:hover": { bgcolor: "var(--ar-glass)", borderColor: "primary.main" },
};

/** Inline gallery: main stage + thumbnails. Controlled index; `onOpen` launches the lightbox. */
export default function GalleryCarousel({ images, index, onIndexChange, onOpen, label }) {
  const stripRef = useRef(null);
  const count = images.length;
  const current = images[index];

  const go = (next) => {
    const i = (next + count) % count;
    onIndexChange(i);
    const thumb = stripRef.current?.children[i];
    thumb?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(index);
    }
  };

  return (
    <Box>
      <Box
        role="group"
        aria-roledescription="carousel"
        aria-label={`${label} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        sx={{
          position: "relative",
          aspectRatio: "16 / 10",
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "var(--ar-media-bg)",
          border: 1,
          borderColor: "divider",
          outline: "none",
          "&:focus-visible": { borderColor: "primary.main", boxShadow: "0 0 0 3px rgba(122,162,247,0.3)" },
          "&:hover .ar-expand": { opacity: 1 },
        }}
      >
        <Box
          component="img"
          key={current.src}
          src={current.src}
          alt={current.alt}
          loading="lazy"
          decoding="async"
          onClick={() => onOpen(index)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            p: { xs: 1, md: 1.5 },
            cursor: "zoom-in",
            display: "block",
            animation: "arFade .25s ease",
            "@keyframes arFade": { from: { opacity: 0.4 }, to: { opacity: 1 } },
          }}
        />
        {count > 1 && (
          <>
            <IconButton
              aria-label="Previous screenshot"
              onClick={() => go(index - 1)}
              size="small"
              sx={{ ...navBtn, left: 10 }}
            >
              <ChevronLeftRounded />
            </IconButton>
            <IconButton
              aria-label="Next screenshot"
              onClick={() => go(index + 1)}
              size="small"
              sx={{ ...navBtn, right: 10 }}
            >
              <ChevronRightRounded />
            </IconButton>
          </>
        )}
        <Tooltip title="Open full screen (zoom)">
          <IconButton
            className="ar-expand"
            aria-label="Open screenshot in full screen"
            onClick={() => onOpen(index)}
            size="small"
            sx={{
              ...navBtn,
              top: 10,
              right: 10,
              transform: "none",
              opacity: { xs: 1, md: 0.85 },
              transition: "opacity .2s",
            }}
          >
            <OpenInFullRounded fontSize="small" />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            position: "absolute",
            left: 10,
            bottom: 10,
            px: 1,
            py: 0.25,
            borderRadius: 1.5,
            bgcolor: "var(--ar-glass)",
            border: 1,
            borderColor: "divider",
            fontFamily: fontMono,
            fontSize: 12,
            color: "text.secondary",
          }}
          aria-live="polite"
        >
          {index + 1} / {count}
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.25, minHeight: "2.9em" }}>
        {current.alt}
      </Typography>

      {count > 1 && (
        <Box
          ref={stripRef}
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pb: 0.5,
            mt: 0.5,
            scrollbarWidth: "thin",
          }}
        >
          {images.map((img, i) => (
            <ButtonBase
              key={img.src}
              onClick={() => go(i)}
              aria-label={`Show screenshot ${i + 1}: ${img.alt}`}
              aria-current={i === index ? "true" : undefined}
              sx={{
                flex: "0 0 auto",
                width: 92,
                height: 58,
                borderRadius: 1.5,
                overflow: "hidden",
                border: 2,
                borderColor: i === index ? "primary.main" : "transparent",
                opacity: i === index ? 1 : 0.6,
                bgcolor: "var(--ar-media-bg)",
                transition: "opacity .2s, border-color .2s",
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
  );
}
