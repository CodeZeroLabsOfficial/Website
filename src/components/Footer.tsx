import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-3/60 bg-ink py-14">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo className="h-8 w-auto" />
            <p className="mt-4 text-base leading-relaxed text-muted">
              Built by Depesch — premium mobile and web platforms for
              modern service businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <FooterCol title="Product" links={[...siteNav]} />
            <FooterCol
              title="Company"
              links={[
                { label: "Support", href: "/support" },
                { label: "Contact", href: "mailto:hello@depesch.com" },
                { label: "Privacy", href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-3/60 pt-7 text-small text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Depesch Limited</p>
          <p>Designed &amp; built by Depesch.</p>
        </div>
      </div>
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
      <p className="font-display text-small font-semibold uppercase tracking-wide text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            {l.href.startsWith("mailto:") || l.href.startsWith("#") ? (
              <a
                href={l.href}
                className="text-base text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-base text-muted transition-colors hover:text-white"
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
