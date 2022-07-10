export function translateCondition(condition: string) {
  interface SelectorInterface {
    [key: string]: () => string;
  }

  const conditionSelector: SelectorInterface = {
    Thunderstorm() {
      return "Trovoada";
    },
    Drizzle() {
      return "Chuvisco";
    },
    Rain() {
      return "Chuva";
    },
    Snow() {
      return "Neve";
    },
    Mist() {
      return "Névoa";
    },
    Smoke() {
      return "Fumaça";
    },
    Haze() {
      return "Névoa";
    },
    Dust() {
      return "Poeira";
    },
    Fog() {
      return "Névoa";
    },
    Sand() {
      return "Areia";
    },
    Ash() {
      return "Cinzas";
    },
    Squall() {
      return "Ventania";
    },
    Tornado() {
      return "Tornado";
    },
    Clear() {
      return "Céu Limpo";
    },
    Clouds() {
      return "Nublado";
    },
  };
  return conditionSelector[condition]();
}
