import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import fontsPlugin from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    fontsPlugin({
      google: {
        families: ["Roboto", "Open Sans", "Long Cang"], // Add the Google Fonts you want to use
      },
    }),
  ],
});
