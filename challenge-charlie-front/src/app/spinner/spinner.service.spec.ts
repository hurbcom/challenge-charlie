import { SpinnerService } from "./spinner.service";

describe('SpinnerService', () => {
  let spinnerService: SpinnerService;

  beforeEach(() => {
    spinnerService = new SpinnerService();
  });

  it('should start spin', () => {
    spinnerService.startSpin();
    expect(spinnerService.isSpinning).toBe(true);
  });

  it('should stop spin', () => {
    spinnerService.startSpin();
    spinnerService.stopSpin();
    expect(spinnerService.isSpinning).toBe(false);
  });
});