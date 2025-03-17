import { fetchRecipe } from '@/app/api/fetchRecipeDetails';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function RecipeDetails({ id }: { id: string }) {
  const recipe = await fetchRecipe(id);

  if (!recipe) {
    return notFound();
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={600}
        height={400}
        className="w-full max-w-lg rounded-lg"
      />
      <h2 className="text-2xl font-semibold mt-6">Ingredients:</h2>
      <ul className="list-disc list-inside mt-2">
        {recipe.extendedIngredients.map((ing: any, key: number) => (
          <li key={key} className="text-gray-700">
            {ing.original}
          </li>
        ))}
      </ul>
    </div>
  );
}
