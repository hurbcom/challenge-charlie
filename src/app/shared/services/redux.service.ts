import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ReduxService {

  private cityNameSource = new BehaviorSubject('');
  private currentMeterSource = new BehaviorSubject('C');

  cityName = this.cityNameSource.asObservable();
  currentMeter = this.currentMeterSource.asObservable();


  constructor() { }

  setCity(city) {
    this.cityNameSource.next(city);
  }

  setWeatherMeter(meter) {
    let tempMeter = (meter == "C") ? "F" : "C";
    this.currentMeterSource.next(tempMeter);
  }

  // changeCurrentStep(step) {
  //   this.totalSteps.subscribe(total => {
  //     if (step > 0 && step <= total) {
  //       this.currentStepSource.next(step);
  //     }

  //     if (step == total) {
  //       this.isLastStepSource.next(true);
  //     } else {
  //       this.isLastStepSource.next(false);
  //     }

  //     if (step == 1) {
  //       this.isFirstStepSource.next(true);
  //     } else {
  //       this.isFirstStepSource.next(false);
  //     }
  //   });

  // }

  // changeSteps(steps) {
  //   this.allStepsSource.next(steps);
  //   this.totalStepsSource.next(steps.length)
  // }

}