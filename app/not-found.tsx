import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";
import "./globals.css";

// Top-level 404 for any URL outside the three locale route groups
// ((ar)/, (en)/en/, (fr)/fr/). Required because those groups each define
// their own root layout instead of sharing app/layout.tsx — see
// https://nextjs.org/docs/app/building-your-application/routing/route-groups
// Rendered in the site's default language (Arabic, RTL) since it isn't
// scoped to any one locale route.
export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <RootDocument locale="ar" dir="rtl">
      <main className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          404
        </p>
        <h1 className="text-2xl font-semibold">الصفحة غير موجودة</h1>
        <p className="max-w-sm text-sm text-fg-muted">
          هذه الصفحة غير موجودة. عد إلى شرائح الورشة.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full border border-line px-4 py-2 text-sm text-fg transition hover:bg-surface-hover"
        >
          العودة إلى الرئيسية
        </Link>
      </main>
    </RootDocument>
  );
}
