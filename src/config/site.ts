export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Halo Flashpoint Wiki",
  shortName: "Halo Flashpoint",
  logoText: "HF",
  tagline: "Rules, Miniatures, Factions & Tactics",
  description: "Fan-made Halo Flashpoint wiki for the Halo miniatures game: core rules, miniature ranges, factions, team building, painting guides and tactical tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://halo-flashpoint.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://halo-flashpoint.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://haloflashpoint.manticgames.com/",
  heroVideoId: "0PAIfSUy6k8", // Mantic Games official "How to Play Halo: Flashpoint" tutorial
  social: {
    youtube: "https://www.youtube.com/@manticgames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
