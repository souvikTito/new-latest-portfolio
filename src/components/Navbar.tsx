import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
    {
      name: "GitHub",
      path: "https://github.com/souvikTito",
      icon: <FaGithub className="h-5 w-5" />,
      external: true
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const renderLink = (link: typeof navLinks[0]) => {
    if (link.external) {
      return (
        <a
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`nav-link flex items-center gap-1 ${isActive(link.path) ? "active" : ""}`}
        >
          {link.icon && <span>{link.icon}</span>}
          {link.name}
        </a>
      );
    }
    return (
      <Link
        to={link.path}
        className={`nav-link flex items-center gap-1 ${isActive(link.path) ? "active" : ""}`}
      >
        {link.icon && <span>{link.icon}</span>}
        {link.name}
      </Link>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-2 glass" : "py-4 bg-transparent"}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">Souvik</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <div key={link.path}>
                {renderLink(link)}
              </div>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass mt-2 p-4 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {renderLink(link)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;