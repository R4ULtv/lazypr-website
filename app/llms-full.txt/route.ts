import { getLLMText, source } from "@/lib/source";

export const revalidate = false;

export async function GET() {
  const pages = source.getPages().filter((page) => {
    const slug = page.slugs.join("/");
    return slug !== "changelog";
  });
  const scan = pages.map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}
