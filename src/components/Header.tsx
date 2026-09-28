import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-surface/60 backdrop-blur-md border-b border-white/20 light:border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-4xl font-bold font-heading text-text-primary hover:text-accent transition-colors">
           Studio Ghibli
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}