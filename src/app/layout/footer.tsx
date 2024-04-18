import React from 'react';

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="flex items-center justify-center h-16 border border-green-500">
      <p>Footer</p>
    </footer>
  );
}
