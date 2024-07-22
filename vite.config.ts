import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [BootstrapVueNextResolver()],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 9000,
		open: true,
	},
	optimizeDeps: {
		include: ["vue"],
	},
});
