import React from 'react';

type Props = {
  day: string;
  temperature: string;
  variant: '--today' | '--tomorrow' | '--after-tomorrow'
}

const Day: React.FC<Props> = ({
  day,
  temperature,
  variant,
}) => (
  <div className={`day ${variant || ''}`} data-testid="day">
    {variant === '--today' ? <i data-icon="B" className="icon" /> : <i />}

    <div>
      <p className="text">{day}</p>

      <p className="temperature">{temperature}</p>

      {variant === '--today' && (
        <div className="details">
          <p>Ensolarado</p>

          <small>Vento: NO 6.4km/h</small>

          <small>Humidade: 78%</small>

          <small>Pressão: 1003hPA</small>
        </div>
      )}
    </div>
  </div>
);

export default Day;
