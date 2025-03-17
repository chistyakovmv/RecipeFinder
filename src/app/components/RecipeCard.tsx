import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="block bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg"
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={300}
        className="w-full rounded-lg"
      />
      <h2 className="text-lg font-bold mt-4">{recipe.title}</h2>
    </Link>
  );
}
