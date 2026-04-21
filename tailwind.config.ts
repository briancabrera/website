import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0f0e0c",
          elev: "#17140f",
        },
        fg: {
          DEFAULT: "#ebe5d7",
          dim: "#9a9286",
          mute: "#6a6459",
          sub: "#3c3830",
        },
        line: {
          DEFAULT: "#1e1b16",
          bright: "#272320",
        },
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.035em",
        tighter3: "-0.05em",
        wideish: "0.18em",
      },
      maxWidth: {
        measure: "64ch",
      },
    },
  },
  plugins: [],
};

export default config;
