const API_KEY = process.env.SPOONACULAR_API_KEY;

export async function fetchRecipe(id: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) return null;

  return res.json();
}
