import { debounce } from '.';

let mockedAction = jest.fn();
let debouncedMockedAction: Function;

describe('utils - debounce', () => {
  beforeEach(() => {
    mockedAction = jest.fn();
    debouncedMockedAction = debounce({ action: mockedAction });
  });

  it('should render correctly', () => {
    for (let i = 0; i < 100; i++) {
      debouncedMockedAction();
    }

    jest.runAllTimers();

    expect(mockedAction).toBeCalledTimes(1);
  });
});
