import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function BiteoLayout({ children, hideFooter = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Header scrolled={scrolled} />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default BiteoLayout;
