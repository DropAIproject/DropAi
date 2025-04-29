import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
