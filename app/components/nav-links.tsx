import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Take Action", href: "/take-action" },
  { name: "Donate", href: "/donate" },
];

export default function NavLinks() {
  return (
    <nav className="flex gap-4 items-center flex-wrap">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          aria-label={`Navigate to ${link.name} page`}
          className="text-sm font-medium text-dark-blue font-roboto hover:text-blue hover:underline md:text-base"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
