import { createI18n } from "vue-i18n";
import { enUS, frCA } from "@/i18n";

export const i18n = createI18n({
	locale: navigator.language,
	fallbackLocale: {
		en: ["en-US"], // All English variants fallback to en-US
		fr: ["fr-CA"], // All French variants fallback to fr-CA
	},
	missingWarn: false,
	fallbackWarn: false,
	messages: {
		"en-US": enUS,
		"fr-CA": frCA,
	},
	legacy: false,
});
