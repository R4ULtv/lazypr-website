import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import {
  BookIcon,
  DownloadIcon,
  CloudLightningIcon,
  SquareTerminalIcon,
  FileBracesIcon,
} from "lucide-react";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import Link from "fumadocs-core/link";
import Image from "next/image";
import Preview from "@/public/og-image.webp";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [
            {
              text: "Getting Started",
              url: "/docs/quick-start",
              icon: <BookIcon />,
            },
            {
              text: "Installation",
              url: "/docs/installation",
              icon: <DownloadIcon />,
            },
            {
              text: "AI Providers",
              url: "/docs/config/providers",
              icon: <CloudLightningIcon />,
            },
            {
              text: "Usage Guide",
              url: "/docs/usage/basic-commands",
              icon: <SquareTerminalIcon />,
            },
            {
              text: "Examples",
              url: "/docs/examples/cli-usage",
              icon: <FileBracesIcon />,
            },
          ],
        },
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/quick-start">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink
                  href="/docs/quick-start"
                  className="md:row-span-2"
                >
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Preview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom,white 60%,transparent)",
                      }}
                    />
                  </div>
                  <p className="font-medium">Getting Started</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Quick start guide to using LazyPR for your PRs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/installation"
                  className="lg:col-start-2"
                >
                  <DownloadIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Installation</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Install LazyPR and set it up in your project.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/config/providers"
                  className="lg:col-start-2"
                >
                  <CloudLightningIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">AI Providers</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Configure AI providers like OpenAI, Anthropic, and more.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/usage/basic-commands"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <SquareTerminalIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Usage Guide</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn how to use LazyPR commands and features.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/examples/cli-usage"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <FileBracesIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Examples</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Real-world examples and use cases for LazyPR.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
