import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div >
    
      <main >{children}</main>
      
    </div>
  );
}

export default MainLayout;
