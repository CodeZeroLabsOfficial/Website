import Link from "next/link";
import { Logo } from "@/components/chrome/Logo";
import { Container } from "@/components/ui/Container";
import { SUPPORT_EMAIL, legalEntity, legalNav, siteNav } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-3/60 bg-ink py-14">
      <Container>
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo className="h-5 w-auto" />
            <p className="body mt-4 text-muted">
              Built by Depesch — premium mobile and web platforms for modern
              service businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <FooterCol title="Product" links={[...siteNav]} />
            <FooterCol
              title="Company"
              links={[
                { label: "Support", href: "/support" },
                { label: "Contact", href: `mailto:${SUPPORT_EMAIL}` },
                ...legalNav,
              ]}
            />
          </div>
        </div>

        <div className="caption mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-3/60 pt-7 md:flex-row">
          <p>
            © {new Date().getFullYear()} {legalEntity.name}
          </p>
          <p>Designed &amp; built by Depesch.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="caption font-display font-semibold uppercase tracking-wide text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.href.startsWith("mailto:") || l.href.startsWith("#") ? (
              <a
                href={l.href}
                className="body text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="body text-muted transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
