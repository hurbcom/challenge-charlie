import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

  _isSpinning: boolean;

  startSpin() {
    this._isSpinning = true;
  }

  stopSpin() {
    this._isSpinning = false;
  }

  get isSpinning() {
    return this._isSpinning;
  }
}