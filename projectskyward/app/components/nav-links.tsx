// import {
//     UserGroupIcon,
//     HomeIcon,
//     DocumentDuplicateIcon,
// } from '@heroicons/react';
import Link from 'next/link';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Take Action', href: '/take-action' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                // const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-black-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        {/* <LinkIcon className="w-6" /> */}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
