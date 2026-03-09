'use client';

import { useState, useEffect } from 'react';
import { COLORS, FONTS, TRANSITIONS } from '../constants/design';

const NAV_LINKS = [
  { label: 'Sự kiện', href: '#event' },
  { label: 'Hình ảnh', href: '#gallery' },
  { label: 'Phản hồi', href: '#rsvp' },
  { label: 'Lời chúc', href: '#guestbook' },
];

interface NavigationProps {
  links?: Array<{ label: string; href: string }>;
  className?: string;
}

export default function Navigation({
  links = NAV_LINKS,
  className = '',
}: NavigationProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={className}
      style={{
        position: isSticky ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: isSticky ? '0' : '2rem',
        backgroundColor: isSticky ? `${COLORS.bgCream}F0` : 'transparent',
        backdropFilter: isSticky ? 'blur(16px)' : 'none',
        borderBottom: isSticky ? `2px solid ${COLORS.borderWoodblock}` : 'none',
        transition: `all ${TRANSITIONS.normal} ease`,
        padding: isSticky ? '0.75rem 0' : '2rem 0 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          fontFamily: FONTS.serif,
          fontWeight: 600,
          fontSize: '0.95rem',
          letterSpacing: '0.05em',
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            style={{
              color: COLORS.indigo,
              textDecoration: 'none',
              transition: `color ${TRANSITIONS.normal} ease, border-color ${TRANSITIONS.normal} ease`,
              cursor: 'pointer',
              borderBottom: '2px solid transparent',
              paddingBottom: '4px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.primary;
              e.currentTarget.style.borderBottomColor = COLORS.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.indigo;
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
