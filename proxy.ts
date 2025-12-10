import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

export default function proxy(request: NextRequest) {
  if (isMarkdownPreferred(request)) {
    const result = rewriteLLM(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  // Rewrite /changelog to /docs/changelog
  if (request.nextUrl.pathname.startsWith("/changelog")) {
    const targetPath = request.nextUrl.pathname.endsWith(".mdx")
      ? "/docs/changelog.mdx"
      : "/docs/changelog";
    return NextResponse.rewrite(new URL(targetPath, request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and image files
    "/((?!api|_next/static|_next/image|.*\\.(?:png|webp|svg)$).*)",
  ],
};
