import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://projects.unifiedmentor.com";
  const routes = ["", "/ferry", "/status", "/routes", "/schedule", "/booking", "/alerts", "/parks", "/events", "/contact", "/support", "/faqs", "/search", "/login", "/admin/dashboard", "/terms", "/privacy", "/accessibility", "/sitemap", "/departures", "/arrivals", "/terminals", "/fares"];
  return routes.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));
}
