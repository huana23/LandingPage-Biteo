import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, ChevronDown, ChevronRight } from 'lucide-react';

const navItems = [
  { 
    label: 'Trang chủ', 
    to: '/' 
  },
  { 
    label: 'Giới thiệu', 
    to: '/about' 
  },
  { 
    label: 'Dịch vụ', 
    to: '/services',
    hasDropdown: true,
    dropdown: [
      { label: 'Video ngắn', to: '/services/short-video' },
      { label: 'Ẩm thực', to: '/services/food' },
      { label: 'Đi chợ', to: '/services/grocery' },
      { label: 'Du lịch', to: '/services/travel' },
      { label: 'Mua sắm', to: '/services/shopping' },
      { label: 'Đặc sản', to: '/services/specialty' },
    ]
  },
  { 
    label: 'Đối tác', 
    to: '/partners' 
  },
  { 
    label: 'CTV', 
    to: '/affiliates' 
  },
  { 
    label: 'Blog', 
    to: '/blog' 
  },
  { 
    label: 'Liên hệ', 
    to: '/contact' 
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileDropdownOpen(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="mx-auto flex max-w-container-max items-center justify-between h-16 md:h-20 px-margin-mobile md:px-margin-desktop">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40 group-hover:scale-105">
            <span className="text-lg md:text-xl font-bold">B</span>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />
          </div>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Biteo
          </span>
        </NavLink>

        {/* Desktop Navigation - Show on md and above */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" ref={dropdownRef}>
          {navItems.map((item) => (
            <div 
              key={item.to} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
            >
              <NavLink
                to={item.to}
                className={`relative flex items-center gap-1 px-3 lg:px-4 py-2.5 rounded-xl text-body-sm font-medium transition-all duration-200 ${
                  isActive(item.to) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-subtext hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </NavLink>

              {/* Desktop Dropdown */}
              {item.hasDropdown && dropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-2xl shadow-xl shadow-primary/10 border border-border/50 p-2 animate-fade-in">
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-body-sm font-medium text-subtext hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary/30" />
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA - Show on lg and above */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/download"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-body-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            Tải ứng dụng
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-white"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Menu className="h-5 w-5 text-subtext" />
          )}
        </button>
      </div>
    </header>

    {/* Mobile Menu - Outside header to ensure fixed positioning works */}
    {open && (
      <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-xl z-[60] animate-fade-in-down overflow-y-auto">
        <nav className="max-w-container-max mx-auto px-margin-mobile py-6 space-y-2">
          {navItems.map((item) => (
            <div key={item.to}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.to ? null : item.to)}
                    className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-body-sm font-medium transition-colors ${
                      isActive(item.to) 
                        ? 'text-primary bg-primary/10' 
                        : 'text-subtext hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${isActive(item.to) ? 'bg-primary' : 'bg-border'}`} />
                      {item.label}
                    </span>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen === item.to ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {mobileDropdownOpen === item.to && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-body-sm font-medium text-subtext hover:text-primary hover:bg-primary/5 transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-body-sm font-medium transition-colors ${
                    isActive(item.to) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-subtext hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive(item.to) ? 'bg-primary' : 'bg-border'}`} />
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
          <div className="pt-4 mt-4 border-t border-border/50">
            <NavLink
              to="/download"
              className="flex items-center justify-center gap-2.5 w-full rounded-full bg-primary px-6 py-3.5 text-body-sm font-bold text-white shadow-lg"
            >
              <Download className="w-5 h-5" />
              Tải ứng dụng ngay
            </NavLink>
          </div>
        </nav>
      </div>
    )}
    </>
  );
}

export default Header;
