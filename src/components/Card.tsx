import { Link } from 'react-router-dom';
import type { Film } from '../types';

interface CardProps {
  film: Film;
}

export function Card({ film }: CardProps) {
  return (
    <Link  to={`/films/${film.id}`}>
      <div className="bg-surface border border-border p-1 hover:bg-surface-hover hover:shadow-lg transition-colors duration-300 rounded-lg overflow-hidden h-full">
        <img
          className="w-full aspect-2/3 object-cover rounded"
          src={film.image}
          alt={film.title}
        />
        <h2 className="font-semibold font-heading text-center text-text-primary px-2 pt-2">
          {film.title}
        </h2>
        <p className="text-text-secondary text-sm text-center pb-2">
          {film.release_date} • {film.running_time} min
        </p>
      </div>
    </Link>
  );
}