import { NextDays } from '../components/NextDays';
import { Today } from '../components/Today';
import { WeatherInput } from '../components/WeatherInput';

import './style.css';
export function Home() {
  return (
    <main className="container">
      <WeatherInput />
      <Today />
      <NextDays />
    </main>

  );
}