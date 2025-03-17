import { ReactNode, Suspense } from 'react';
import RecipeDetails from '@/app/components/RecipeDetails';
import Loader from '@/app/components/Loader';
import { notFound } from 'next/navigation';

export default async function RecipePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  return (
    <Suspense fallback={(<Loader />) as ReactNode}>
      <RecipeDetails id={id} />
    </Suspense>
  );
}
