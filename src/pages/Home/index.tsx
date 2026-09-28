import { useFilms } from "../../hooks/useFilms";
import { Card } from "../../components/Card";

export function Home() {
  const { visibleFilms, hasMore, showMore, isLoading, error } = useFilms();

  if (isLoading)
    return (
      <p className="text-text-secondary text-center mt-10">Loading films...</p>
    );
  if (error)
    return <p className="text-error text-center mt-10">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold font-heading text-text-primary mb-8 border-b border-border pb-2">
        Studio Ghibli Films
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleFilms.map((film) => (
          <Card key={film.id} film={film} />
        ))}

        {hasMore && (
          <button
            onClick={showMore}
            className="aspect-2/3 flex flex-col items-center justify-center gap-2 bg-surface border border-border rounded-lg hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-accent-contrast text-2xl hover:bg-accent-hover transition-colors">
              +
            </span>
            <span className="text-text-secondary text-sm">More films</span>
          </button>
        )}
      </div>
    </div>
  );
}
