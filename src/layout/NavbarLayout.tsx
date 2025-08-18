import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";

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
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
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
              <button className="text-gray-600 transition-colors hover:text-gray-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-20">{children}</main>
    </>
  );
};

export default NavbarLayout;
