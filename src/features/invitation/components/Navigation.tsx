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
        backgroundColor: isSticky ? `${COLORS.bgWhite}F0` : 'transparent',
        backdropFilter: isSticky ? 'blur(20px)' : 'none',
        borderBottom: isSticky ? `1px solid ${COLORS.borderGold}` : 'none',
        transition: `background-color ${TRANSITIONS.normal} ease, border-color ${TRANSITIONS.normal} ease`,
        padding: isSticky ? '0.75rem 0' : '2rem 0 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2.5rem',
          fontFamily: FONTS.body,
          fontWeight: 400,
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: COLORS.textSecondary,
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            style={{
              color: COLORS.textSecondary,
              textDecoration: 'none',
              transition: `color ${TRANSITIONS.normal} ease`,
              cursor: 'pointer',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.textSecondary;
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
