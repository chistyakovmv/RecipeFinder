import { notFound } from 'next/navigation';
import { fetchRecipes } from '@/app/api/fetchRecipes';
import SuspenseWrapper from '@/app/components/SuspenseWrapper';
import RecipeCard from '@/app/components/RecipeCard';

export default async function RecipeList({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const data = await fetchRecipes(query, cuisine, maxReadyTime);

  if (!data || !data.results?.length) {
    return notFound();
  }

  return (
    <SuspenseWrapper>
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.results.map((recipe: any) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </SuspenseWrapper>
  );
}
