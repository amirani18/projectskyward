import type { MetadataRoute } from "next";
import { nav, site } from "./content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...nav.map((n) => n.href), "/donate"];
  return paths.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}` }));
}
