import CompassIcon from '../../assets/icons/compass.svg';
import './styles.css';

export function Input() {
  return (
    <div className="input-text__container">
      <CompassIcon />
      <input
        className="input-text__search"
        type="text"
        placeholder="Digite o nome da cidade"
      />
    </div>
  );
}
