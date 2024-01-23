import Register from '@/components/auth';
import React, { ReactNode } from 'react';

type AuthPageProps = {
  children?: ReactNode;
};

export default function AuthPage({ children = <Register/> }: AuthPageProps) {
  return (
    <div>
      {children}
    </div>
  );
}