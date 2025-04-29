import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
      {children}
    </div>
  );
}
