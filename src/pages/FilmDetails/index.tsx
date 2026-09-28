import { useParams, Link } from "react-router-dom";
import { useFilm } from "../../hooks/useFilm";
import { GhibliRating } from "../../components/RottenTomatoes";

export function FilmDetails() {
  const { id } = useParams();

  const { film, isLoading, error } = useFilm(id);

  if (isLoading) return <p>Loading details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!film) return <p>Film not found.</p>;

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${film.movie_banner})` }}
      />

      <div className="fixed inset-0 bg-black/30 z-0" />

      <div className="relative max-w-4xl mx-auto p-3 py-12">
        <div className="relative rounded-lg p-6 shadow-2xl border border-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-black/65 light:bg-white/75" />

          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-black/40 light:from-white/40 light:to-black/10" />

          <div className="relative z-10 flex flex-col md:flex-row gap-6">
            <img
              className="border border-white/20 rounded-lg w-full md:w-80 md:shrink-0 object-cover shadow-lg"
              src={film.image}
              alt={film.title}
            />

            <div className="space-y-1">
              <h1 className="text-3xl font-bold font-heading text-white light:text-text-primary drop-shadow-lg light:drop-shadow-none">
                {film.title}
              </h1>
              <p className="text-white light:text-text-primary leading-relaxed italic drop-shadow light:drop-shadow-none">
                {film.description}
              </p>
              <p className="text-white light:text-text-primary">
                <span className="font-semibold">Director:</span> {film.director}
              </p>
              <p className="text-white light:text-text-primary">
                <span className="font-semibold">Producer:</span> {film.producer}
              </p>
              <p className="text-white light:text-text-primary">
                <span className="font-semibold">Release Date:</span>{" "}
                {film.release_date}
              </p>
              <p className="text-white light:text-text-primary">
                <span className="font-semibold">Running Time:</span>{" "}
                {film.running_time} min
              </p>
              <p className="text-white light:text-text-primary">
                <span className="font-semibold">Rotten Tomatoes Score:</span>
                <GhibliRating rt_score={film.rt_score} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="fixed bottom-6 right-6 z-50 bg-accent text-accent-contrast py-3 px-5 rounded-full shadow-lg hover:bg-accent-hover transition-colors"
      >
        Back
      </Link>
    </div>
  );
}
