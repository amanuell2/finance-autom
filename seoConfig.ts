import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Configuración de SEO para la aplicación.
 * SEO configuration for the application.
 */
export const seoConfig = {
	baseURL: "yourwebsite.com", // Production URL.
	description:
		"A brief description of your application.",
	type: "website",
	image: {
		url: "yourwebsite.com/img/og-image.png",
		alt: "og-image",
		width: 730,
		height: 382,
	},
	siteName: "jamerrq.dev",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Configuración del manifiesto para la aplicación.
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Name of your application",
	short_name: "A short name for your application",
	description:
		"A brief description of your application.",
	theme_color: "#0F0F0F",
	background_color: "#0F0F0F",
	display: "fullscreen",
	icons: [
		{
			src: "/img/icons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
}