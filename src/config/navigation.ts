import { BookOpen, Boxes, Compass, ScrollText, Shield, Users, type LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "rules", path: "/rules", icon: ScrollText, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Compass, isContentType: true },
  { key: "units", path: "/units", icon: Users, isContentType: true },
  { key: "factions", path: "/factions", icon: Shield, isContentType: true },
  { key: "painting", path: "/painting", icon: Boxes, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
