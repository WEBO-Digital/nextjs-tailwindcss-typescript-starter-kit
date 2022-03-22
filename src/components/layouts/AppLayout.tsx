import { FunctionComponent, HTMLAttributes } from 'react';
import Footer from '@/components/module/footer/Footer';
import Header from '@/components/module/header/Header';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export const AppLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
