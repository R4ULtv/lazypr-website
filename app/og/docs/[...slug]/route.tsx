import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "@takumi-rs/image-response";
import LogoIcon from "@/components/icons/logo";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/docs/[...slug]">,
) {
  const { slug } = await params;
  const last = slug[slug.length - 1];
  if (!last?.endsWith(".webp")) notFound();

  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <div
      tw="w-full h-full bg-zinc-950 flex flex-col p-16 text-zinc-200"
      style={{
        backgroundImage:
          "radial-gradient(circle, #111112 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div tw="flex items-center gap-4 mb-3">
        <LogoIcon tw="size-16" />
        <span tw="text-[56px] font-semibold">lazypr</span>
      </div>
      <p tw="font-extrabold text-[84px] text-ellipsis mt-[0.5em] mb-[0.5em]">
        {page.data.title}
      </p>
      <span tw="font-medium text-[48px] text-ellipsis text-zinc-400">
        {page.data.description}
      </span>
    </div>,
    {
      width: 1200,
      height: 630,
      format: "webp",
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
