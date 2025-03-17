import RecipeList from '@/app/components/RecipeList';

export default function RecipesPage({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) {
  return <RecipeList searchParams={searchParams} />;
}
