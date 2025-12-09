import type { MetadataRoute } from "next/types";
import { baseUrl } from "@/lib/metadata";
import { source } from "@/lib/source";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();
  const items = await Promise.all(
    source.getPages().map(async (page) => {
      const lastModified = page.data.lastModified;

      return {
        url: url(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: "weekly",
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    }),
  );

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/changelog"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: url("/llms.txt"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: url("/llms-full.txt"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...items.filter((v) => v !== undefined),
  ];
}
