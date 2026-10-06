import Link from "next/link";
import { primaryCta, primaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function Footer() {
  const social = site.social.filter((item) => !item.placeholder);

  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="editorial-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="meta mb-6">Jolly Mutesi</p>
            <p className="max-w-sm text-muted text-[15px] md:text-base">
              {site.tagline}
            </p>
          </div>

          <div className="md:justify-self-end md:text-right">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="meta text-muted hover:text-charcoal"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 md:flex md:justify-end">
              <LinkArrow href={primaryCta.href}>{primaryCta.label}</LinkArrow>
            </div>
            {social.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="meta text-muted hover:text-charcoal"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <p className="meta mt-16 text-stone">
          © {site.copyrightYear} Jolly Mutesi
        </p>
      </div>
    </footer>
  );
}
