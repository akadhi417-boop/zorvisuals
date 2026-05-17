import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZOR VISUALS | Cinematic Videography & Creative Branding Studio" },
      {
        name: "description",
        content:
          "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics.",
      },
      { name: "keywords", content: "videography, photography, branding studio, cinematic visuals, creative agency, web design, digital branding, ZOR VISUALS" },
      { name: "author", content: "ZOR VISUALS" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "ZOR VISUALS | Cinematic Videography & Creative Branding Studio" },
      {
        property: "og:description",
        content: "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ZOR VISUALS" },
      { property: "og:url", content: "https://zorvisuals.com" },
      { property: "og:image", content: "/assets/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZOR VISUALS | Cinematic Videography & Creative Branding Studio" },
      { name: "twitter:description", content: "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics." },
      { name: "twitter:image", content: "/assets/favicon.png" },
    ],
    links: [
      { rel: "canonical", href: "https://zorvisuals.com" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/assets/favicon.png" },
      { rel: "shortcut icon", href: "/assets/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWorkSeries",
        "name": "ZOR VISUALS",
        "description": "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics."
      },
      {
        "@type": "LocalBusiness",
        "name": "ZOR VISUALS",
        "image": "https://zorvisuals.com/assets/favicon.png",
        "description": "ZOR VISUALS is a premium creative studio specializing in cinematic videography, photography, branding, and digital visuals with modern luxury aesthetics.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kerala",
          "addressCountry": "IN"
        },
        "url": "https://zorvisuals.com"
      },
      {
        "@type": "ProfessionalService",
        "name": "ZOR VISUALS",
        "url": "https://zorvisuals.com",
        "sameAs": [
          "https://www.instagram.com/zor.visuals"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { WhatsAppButton } from "@/components/WhatsAppButton";

function RootComponent() {
  return (
    <>
      <Outlet />
      <WhatsAppButton />
    </>
  );
}
