import { WeatherCard } from ".";

export default {
  title: "WeatherCard",
  component: WeatherCard,
  args: {
    wind: 10,
    humidity: 10,
    presure: 10,
    label: "hoje",
    iconCode: 200,
  },
};

export const Default = (args) => <WeatherCard {...args} />;
Default.args = {
  wind: 10,
  humidity: 10,
  presure: 10,
  description: "COLD",
  temperature: 9,
};
export const IsNoTemp = (args) => <WeatherCard {...args} />;
export const IsNormal = (args) => (
  <WeatherCard {...args} temperature={22} description="Ensolorado" />
);
export const IsCold = (args) => (
  <WeatherCard {...args} temperature={10} description="Frio" />
);
export const IsHot = (args) => (
  <WeatherCard {...args} temperature={40} description="Muito Quente" />
);
export const SmallCard = (args) => (
  <WeatherCard
    {...args}
    temperature={40}
    description="Muito Quente"
    smallCard
  />
);
