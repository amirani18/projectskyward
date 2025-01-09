import Link from "next/link";
import Image from "next/image";


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Take Action", href: "/take-action" },
];


export default function NavLinks({ isNavOpen }: { isNavOpen: boolean }) {
  return (
    <nav
      className={`fixed md:static top-0 left-0 w-full md:w-auto bg-dark-blue md:bg-transparent text-light-blue
      flex flex-col md:flex-row items-center gap-10 md:gap-6 transition-all duration-500 pt-4
      ${isNavOpen ? "h-screen" : "h-0"} md:h-auto overflow-hidden`}
    >
      {isNavOpen && (
      <Image
        src="/logo2.png"
        alt="Logo"
        width={48}
        height={48}
        className="w-12 h-12 md:w-10 md:h-10 object-contain mb-1 md:mb-0"
      />
      )}
      {links.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        aria-label={`Navigate to ${link.name} page`}
        className="text-sm font-medium font-roboto hover:text-blue md:text-base"
      >
        {link.name}
      </Link>
      ))}
    </nav>
  );
}
