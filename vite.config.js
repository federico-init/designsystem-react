import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/variables/_colors.scss";
          @import "./src/scss/variables/_margins.scss";
          @import "./src/scss/variables/_paddings.scss";
          @import "./src/scss/variables/_typography.scss";
          @import "./src/scss/helpers/mixins.scss";
          @import "./src/scss/helpers/functions.scss";
          @import "./src/scss/helpers/extends.scss";
          @import "./src/scss/helpers/reset.scss";
          @import "./src/scss/typography/font.scss";
          @import "./src/scss/layout/devices.scss";
          @import "./src/scss/layout/columns.scss";
        `,
      },
    },
  },
});
