import Button from "@/components/ui/button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/global/Navbar";
import { useCallback, useEffect, useState } from "react";
function NavBarComponet() {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized intersection observer with better mobile thresholds

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Optimized mobile menu close handler
  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);
  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="hidden md:flex items-center  gap-4">
          <Button
            label="Book Now"
            link=""
            position="right"
            paddingX="px-3"
            paddingY="py-2"
          />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={handleMobileMenuClose}
              className="relative text-white dark:text-neutral-300 py-3 px-4 text-lg font-medium hover:text-white transition-colors"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-6  px-2">
            <NavbarButton
              onClick={handleMobileMenuClose}
              variant="primary"
              className="w-full py-3 text-lg font-semibold"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

export default NavBarComponet;
