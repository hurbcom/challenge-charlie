import { colorsMap } from '../../helpers/colors';
import './styles.css';

interface BackgroundCoverProps {
  url?: string;
  title?: string;
}

export function BackgroundCover({ url, title }: BackgroundCoverProps) {
  if (url) {
    return <img className="background-cover --image" src={url} alt={title} />;
  }

  return (
    <div
      className="background-cover"
      style={{ backgroundColor: colorsMap.gray[3].bgColor }}
    />
  );
}
