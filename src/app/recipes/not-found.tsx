export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800">No recipes found</h1>
      <p className="text-gray-600 mt-2">Try searching with different parameters.</p>
    </div>
  );
}
