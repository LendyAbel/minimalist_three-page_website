import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const navigationList = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
];

interface NavbarLayoutProps {
  children: ReactNode;
}

const hoverEffect = {
  y: -2,
  transition: {
    duration: 0.2,
  },
};

const activeIndicator = {
  scaleX: 1,
  transition: {
    duration: 0.3,
  },
};

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Minimalista
            </Link>

            {/* Navigation */}
            <div className="hidden items-center space-x-12 md:flex">
              {navigationList.map((item) => (
                <div key={item.to} className="relative">
                  <motion.div whileHover={hoverEffect}>
                    <Link
                      to={item.to}
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                        location.pathname === item.to
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                  {/* Active indicator */}
                  <motion.div
                    className="absolute right-0 -bottom-6 left-0 h-0.5 bg-gray-900"
                    initial={{ scaleX: 0 }}
                    animate={
                      location.pathname === item.to
                        ? activeIndicator
                        : { scaleX: 0 }
                    }
                  />
                </div>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900"
              >
                {!isOpen ? (
                  <IoMdMenu className="h-6 w-6" />
                ) : (
                  <IoMdClose className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-gray-200 bg-white/50 backdrop-blur-sm md:hidden"
              >
                <div className="flex flex-col space-y-4 px-6 py-4">
                  {navigationList.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className={`text-right font-medium duration-200 ${
                        location.pathname === item.to
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <main className="pt-20">{children}</main>
    </>
  );
};

export default NavbarLayout;
