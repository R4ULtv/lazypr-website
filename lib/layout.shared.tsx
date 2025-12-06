import LogoIcon from "@/components/icons/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <LogoIcon className="size-5" />
          <span className="font-medium">lazypr</span>
        </>
      ),
    },
    githubUrl: "https://github.com/r4ultv/lazypr",
  };
}
