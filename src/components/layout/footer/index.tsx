import Link from "next/link";
import Image from "next/image";
import { footerColumns, socialLinks } from "./data/footer.data";

export const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="py-6 md:pt-8 md:pb-16">
        <div className="container">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div>
                    <Link className="mb-4 md:mb-6" href='/'>
                        <Image
                            src="/logo.svg"
                            width={212}
                            height={64}
                            alt="Vmline.pl Logo"
                        />
                    </Link>
                    <div className="flex flex-col gap-2 mb-4 md:mb-6">
                        <p className="!text-base">Copyright © {currentYear}</p>
                        <Link href='#' className="link">Ranking i porównanie hostingów</Link>
                        <p className="!text-base">Powered by Vmline.pl</p>
                        <Link href='#' className="link">Polityka prywatności</Link>
                    </div>
                    <div className="flex gap-8 items-center w-fit">
                        {socialLinks.map((social) => (
                            <Link
                            key={social.id}
                            href={social.href}
                            className=""
                            aria-label={`Visite ${social.name}`}
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-10 mt-auto">
                    {footerColumns.map((column) => (
                        <div key={column.id} className="lg:col-span-1">
                        <h3 className="text-gray-custom mb-4 font-[590] leading-[1.4] md:mb-6">
                            {column.title}
                        </h3>
                        <div className="space-y-2">
                            {column.links.map((link) => (
                            <div key={link.id}>
                                <Link 
                                href={link.href}
                                className="link"
                                >
                                {link.title}
                                </Link>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
};

