'use client';

interface NavigationProps {
  links?: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

export default function Navigation({
  links = [],
  className = '',
}: NavigationProps) {
  return (
    <nav
      className={`flex justify-center pt-8 absolute top-0 left-0 right-0 z-20 ${className}`}
    >
      <div className='flex space-x-8 text-gray-600 font-medium tracking-wider'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className='hover:text-gray-800 transition-colors duration-300'
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
