import certifiedIcon from '../assets/img/certified-fresh.png';
import freshIcon from '../assets/img/fresh.png';
import rottenIcon from '../assets/img/rotten.png';

const ICONS = {
  certified: certifiedIcon,
  fresh: freshIcon,
  rotten: rottenIcon,
};

interface GhibliFilmProps {
  rt_score: string; 
}

export function GhibliRating({ rt_score }: GhibliFilmProps) {
  const score = parseInt(rt_score, 10);
  
  const getRatingMetadata = () => {
    if (score >= 75) return { icon: ICONS.certified, label: 'Certified Fresh' };
    if (score >= 60) return { icon: ICONS.fresh, label: 'Fresh' };
    return { icon: ICONS.rotten, label: 'Rotten' };
  };

  const { icon, label } = getRatingMetadata();

  return (
    // Removi os paddings e usei gap-3 para alinhar o ícone com o texto ao lado
    <div className="flex items-center gap-3 pt-2">
      <img 
        src={icon} 
        alt={label} 
        className="w-10 h-10 object-contain drop-shadow-md" 
      />
      <div className="flex flex-col">
        {/* Texto branco para leitura no fundo de vidro */}
        <span className="text-xl font-bold text-white light:text-text-primary leading-none drop-shadow">
          {score}%
        </span>
        <span className="text-xs text-white light:text-text-primary uppercase tracking-wider font-semibold">
          {label}
        </span>
      </div>
    </div>
  );
}