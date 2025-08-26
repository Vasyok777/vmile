"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const navigationItems = [
  { label: "Tani hosting", href: "#" },
  { label: "Hosting VPS", href: "#" },
  { label: "O Nas", href: "#" },
  { 
    label: "Opinie", 
    href: "#",
    submenu: [
      { label: "Opinie klientów", href: "#" },
      { label: "Recenzje hostingu", href: "#" },
      { label: "Certyfikaty", href: "#" }
    ]
  },
  { label: "Kontakt", href: "#" }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpinionsOpen, setIsOpinionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    document.body.classList.toggle("lock");
  };

  const toggleOpinions = () => {
    setIsOpinionsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsOpinionsOpen(false);
    document.body.classList.remove("lock");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opinionsItem = navigationItems.find(item => item.submenu);

  return (
    <header className={`py-2 md:py-4 sticky top-0 bg-background z-30 transition-all duration-300 ${
      isScrolled ? 'border-b border-border/20 shadow-sm' : ''
    }`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link className="flex-shrink-0" href="/">
            <Image
              src="/logo.svg"
              width={105}
              height={32}
              className="md:w-[160px] md:h-[48px]"
              alt="Vmline.pl Logo"
            />
          </Link>
          
          <div className="hidden md:block">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-10">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="link text-base">{item.label}</NavigationMenuTrigger>
                        <NavigationMenuContent className="!border-0 !shadow-none left-1/2 -translate-x-1/2 p-4">
                          <div className="flex flex-col gap-2 w-[200px]">
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink asChild key={subItem.label} className="hover:no-underline">
                                <Link
                                  href={subItem.href}
                                  className="block group select-none py-1 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative group overflow-hidden"
                                >
                                  {subItem.label}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link 
                          href={item.href} 
                          className={`font-medium hover:!no-underline submenu-link leading-none ${
                            item.label === "Opinie" 
                              ? "relative group" 
                              : ""
                          }`}
                        >
                          {item.label}
                          {item.label === "Opinie" && (
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300 ease-out"></span>
                          )}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <Image
              src="/burger.svg"
              width={24}
              height={24}
              alt="Menu"
            />
          </button>

          <div
            className={`fixed top-0 right-0 w-full bg-background h-full py-[14px] px-[16px] z-40 transform flex flex-col ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out shadow-lg md:hidden`}
          >
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="relative translate-y-[3px]" onClick={closeMenu}>
                <Image
                  src="/logo.svg"
                  width={105}
                  height={32}
                  alt="Vmline.pl Logo"
                />
              </Link>
              <button onClick={toggleMenu} className="leading-[100%]">
                <Image
                  src="/close.svg"
                  width={24}
                  height={24}
                  alt="Close icon"
                />
              </button>
            </div>

            <nav className="flex gap-2 flex-col">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div className="border-b border-border/20">
                      <button 
                        className="font-medium py-1 text-link w-full text-left flex justify-between items-center hover:text-primary transition-colors"
                        onClick={toggleOpinions}
                      >
                        {item.label}
                        <span className="bg-[#EAF6FF] rounded-[8px] p-2">
                          <svg 
                            className={`transform transition-transform ${isOpinionsOpen ? 'rotate-180' : ''}`} 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="none"
                          >
                            <path d="M7.52378 11.1563C7.78288 11.3923 8.21576 11.3923 8.47553 11.1563L14.4692 5.7115C14.7316 5.4725 14.7316 5.0849 14.4692 4.84651C14.2068 4.6075 13.7805 4.6075 13.5181 4.84651L7.99935 9.85881L2.48125 4.8459C2.21816 4.6069 1.79258 4.6069 1.5295 4.8459C1.26708 5.0849 1.26708 5.4725 1.5295 5.7109L7.52378 11.1563Z" fill="#3235E7"/>
                          </svg>
                        </span>
                      </button>
                      
                      {isOpinionsOpen && (
                        <div className="pl-4 flex flex-col gap-2 pb-2">
                          {item.submenu.map((subItem) => (
                            <Link 
                              key={subItem.label}
                              href={subItem.href} 
                              className="py-1 text-sm hover:underline hover:text-primary transition-colors"
                              onClick={closeMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="font-medium py-1 border-b border-border/20 hover:text-primary transition-colors block"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};