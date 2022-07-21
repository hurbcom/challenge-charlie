import { Loading } from ".";

export default {
  title: "Loading",
  component: Loading,
};

export const Default = (args) => <Loading {...args} />;
Default.args = {
  height: 300,
};
