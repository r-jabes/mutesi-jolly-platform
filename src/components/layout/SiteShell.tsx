"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransition } from "@/components/motion/PageTransition";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <CustomCursor />
      <Header />
      <PageTransition>
        <main id="main">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
