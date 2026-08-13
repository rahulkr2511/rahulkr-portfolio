import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1216",       // near-black background, slightly warm
        surface: "#171B21",   // card/section surface
        line: "#262C34",      // hairline borders
        paper: "#EDEFF2",     // primary text
        mute: "#8B93A1",      // secondary text
        signal: "#F5A623",    // amber accent — "build passing" energy
        pass: "#3DDC97",      // commit/status green, used sparingly
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
