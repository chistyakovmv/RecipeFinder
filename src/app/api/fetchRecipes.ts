const API_KEY = process.env.SPOONACULAR_API_KEY;

export async function fetchRecipes(
  query?: string,
  cuisine?: string,
  maxReadyTime?: string,
) {
  const params = new URLSearchParams();
  if (query) params.append('query', query);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);
  params.append('number', '10');

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}&apiKey=${API_KEY}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) return null;

  return res.json();
}
