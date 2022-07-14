import { Search } from ".";

export default {
  title: "Search",
  component: Search,
};

export const Default = (args) => <Search {...args} />;

export const WithError = (args) => (
  <Search {...args} error="cidade não encontrada" />
);
export const WithCity = (args) => <Search {...args} city="Rio de Janeiro" />;
