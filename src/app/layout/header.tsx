import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="flex items-center border border-red-500">
      <Image
        src="/icons/logo.svg"
        alt="logo diogen app"
        width={224}
        height={80}
        priority
      />
      <p className="ml-[calc(50%-224px)] -translate-x-1/2">Header</p>
      <nav className="flex gap-6 ml-auto mr-8 [&>div>a:hover]:text-violet-600">
        <div className="flex gap-3 text-yellow-500">
          <Link href="/">Home</Link>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="/join-us">Join us</Link>
        </div>

        <div className="flex gap-3 text-green-600">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}
