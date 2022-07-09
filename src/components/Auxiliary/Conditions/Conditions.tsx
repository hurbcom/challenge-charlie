import React from "react";

interface ConditionProps {
  condition: string;
  style: string;
}

interface SelectorInterface {
  [key: string]: () => JSX.Element;
}

/*The weather conditions were also separated into a dedicated component to avoid descriptions that are too long
to fit in the app layout and to translate the main weather condition names that are not translated by the API */

const Conditions = ({ condition, style }: ConditionProps) => {
  const conditionSelector: SelectorInterface = {
    Thunderstorm() {
      return <p className={style}>Trovoada</p>;
    },
    Drizzle() {
      return <p className={style}>Chuvisco</p>;
    },
    Rain() {
      return <p className={style}>Chuva</p>;
    },
    Snow() {
      return <p className={style}>Neve</p>;
    },
    Mist() {
      return <p className={style}>Névoa</p>;
    },
    Smoke() {
      return <p className={style}>Fumaça</p>;
    },
    Haze() {
      return <p className={style}>Névoa</p>;
    },
    Dust() {
      return <p className={style}>Poeira</p>;
    },
    Fog() {
      return <p className={style}>Névoa</p>;
    },
    Sand() {
      return <p className={style}>Areia</p>;
    },
    Ash() {
      return <p className={style}>Cinzas</p>;
    },
    Squall() {
      return <p className={style}>Ventania</p>;
    },
    Tornado() {
      return <p className={style}>Tornado</p>;
    },
    Clear() {
      return <p className={style}>Céu Limpo</p>;
    },
    Clouds() {
      return <p className={style}>Nublado</p>;
    },
  };

  return <>{conditionSelector[condition]()}</>;
};
export default Conditions;
