import React from "react";

/**
 * Pixel-art unicorn — old school SNES / GameBoy Color vibe.
 * 20x14 pixel grid. Two mouth frames alternate via CSS `pixel-chomp` animation
 * to actually look like it's chomping.
 * Base direction: facing RIGHT.
 */

// Color legend
const C = {
  ".": null, // transparent
  P: "#ff69b4", // pink body
  H: "#ff1493", // pink shade
  L: "#ffb6d5", // pink highlight
  W: "#ffffff", // white / mane
  G: "#ffd700", // gold horn
  O: "#ff8c00", // horn shade
  E: "#0a0018", // eye / outline
  R: "#66ffff", // rainbow mane cyan
  Y: "#ffff66", // rainbow mane yellow
  M: "#7a0033", // mouth cavity (open)
  T: "#4a0018", // mouth line (closed)
};

// 14 rows x 20 cols. Base body + mouth CLOSED (T).
const CLOSED = [
  "....................",
  "............G.......",
  "...........GO.......",
  "...........GO.......",
  "..W.......WWW.......",
  ".WRW.....WLLLW......",
  "WRYRW...WLLLWEH.....",
  ".WRYRW.WPPPPPPT.....",
  "..WYRWPPPPPPPPT.....",
  "..PPPPPPPPPPPPH.....",
  "..PPPPPPPPPPPPH.....",
  "..PPPPPPPPPPPP......",
  "..P..P.P..P.P.......",
  "..E..E.E..E.E.......",
];

// Same body but with mouth OPEN (M cavity, wider) — frame 2 of chomp
const OPEN = [
  "....................",
  "............G.......",
  "...........GO.......",
  "...........GO.......",
  "..W.......WWW.......",
  ".WRW.....WLLLW......",
  "WRYRW...WLLLWEH.....",
  ".WRYRW.WPPPPPMMM....",
  "..WYRWPPPPPPPMMM....",
  "..PPPPPPPPPPPMM.....",
  "..PPPPPPPPPPPPH.....",
  "..PPPPPPPPPPPP......",
  "..P..P.P..P.P.......",
  "..E..E.E..E.E.......",
];

const Frame = ({ grid, className }) => (
  <g className={className}>
    {grid.map((row, y) =>
      row.split("").map((ch, x) => {
        const color = C[ch];
        if (!color) return null;
        return (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="1"
            height="1"
            fill={color}
          />
        );
      })
    )}
  </g>
);

const PixelUnicorn = ({ size = 96 }) => (
  <svg
    className="pixel-unicorn"
    width={size}
    height={(size * 14) / 20}
    viewBox="0 0 20 14"
    shapeRendering="crispEdges"
    style={{ imageRendering: "pixelated" }}
  >
    <Frame grid={CLOSED} className="pu-frame pu-closed" />
    <Frame grid={OPEN} className="pu-frame pu-open" />
  </svg>
);

export default PixelUnicorn;
