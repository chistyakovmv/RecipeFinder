'use client';

import { ReactNode, Suspense } from 'react';
import Loader from '@/app/components/Loader';

export default function SuspenseWrapper({ children }: { children: ReactNode }) {
  return <Suspense fallback={(<Loader />) as ReactNode}>{children}</Suspense>;
}
