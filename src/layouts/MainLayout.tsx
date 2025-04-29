import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="p-4 bg-white shadow-md text-2xl font-bold">DropAi</header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="p-4 bg-white text-center text-sm">© 2025 DropAi</footer>
    </div>
  );
}

export default MainLayout;
