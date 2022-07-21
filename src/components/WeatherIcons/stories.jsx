import { WeatherIcons } from ".";

export default {
  title: "WeatherIcons",
  component: WeatherIcons,
  argTypes: {
    code: {
      control: "radio",
      options: [200, 300, 500, 600, 700, 800, 801],
    },
  },
};

export const Default = (args) => (
  <div style={{ fontSize: "60px" }}>
    <WeatherIcons {...args} />
  </div>
);
