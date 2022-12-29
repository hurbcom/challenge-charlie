const { colorByCelsius } = require("modules/colorByCelsius");

for (let i = -1; i <= 46; i++) {
  // eslint-disable-next-line jest/valid-title
  it(i.toString(), () => {
    expect(colorByCelsius(i)).toMatchSnapshot();
  });
}
