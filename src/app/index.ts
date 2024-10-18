import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@/app/styles/main.css";
import App from "@/app/App.vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { appRouter } from "@/app/router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { THEME } from "@/shared/config";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const vuetify = createVuetify({
	theme: {
		defaultTheme: localStorage.getItem("theme") || THEME.dark,
	},
	components,
	directives,
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: {
			mdi,
		},
	},
});

export const app = createApp(App)
	.use(createPinia())
	.use(vuetify)
	.use(appRouter);
