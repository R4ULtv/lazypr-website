import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/docs") {
    return NextResponse.redirect(new URL("/docs/quick-start", request.nextUrl));
  }

  const hasMdxExtension = request.nextUrl.pathname.endsWith(".mdx");
  const isMarkdown = isMarkdownPreferred(request) || hasMdxExtension;

  if (isMarkdown) {
    const pathname = hasMdxExtension
      ? request.nextUrl.pathname.replace(/\.mdx$/, "")
      : request.nextUrl.pathname;

    const result = rewriteLLM(pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/docs/:path*"],
};
