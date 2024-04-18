import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="min-h-[calc(100vh-146px)] flex justify-center ">
        {children}
      </main>
    </>
  );
}
