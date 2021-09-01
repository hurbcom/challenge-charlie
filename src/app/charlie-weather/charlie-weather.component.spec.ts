import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlieWeatherComponent } from './charlie-weather.component';
import { WeatherService } from '../shared/services/get-weather.service';
import { LocationService } from '../shared/services/get-location.service';
import { DebugElement } from '@angular/core';


describe('CharlieWeatherComponent', () => {
    let component: CharlieWeatherComponent,
        fixture: ComponentFixture<CharlieWeatherComponent>,
        de: DebugElement,

        locationService: LocationService,
        weatherService: WeatherService,
        reverseLocationSpy: jasmine.Spy,
        forwardLocationSpy: jasmine.Spy,
        getWeatherSpy: jasmine.Spy;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations : [CharlieWeatherComponent],
            providers : [LocationService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharlieWeatherComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        locationService = de.injector.get(LocationService);
        weatherService = de.injector.get(WeatherService);

        getWeatherSpy = spyOn(weatherService, 'getWeather').and.callThrough();
        reverseLocationSpy = spyOn(locationService, 'getReverseLocation').and.callThrough();
        forwardLocationSpy = spyOn(locationService, 'getForwardLocation').and.callThrough();


        spyOn(component, 'getInitLocation').and.callThrough();
        spyOn(component, 'getWeather').and.callThrough();
        spyOn(component, 'colorCalculation').and.callThrough();
        spyOn(component, 'changeTempUnit').and.callThrough();
        spyOn(component, 'getForwardLocation').and.callThrough();
        spyOn(component, 'getReverseLocation').and.callThrough();
        spyOn(component, 'citySelection').and.callThrough();

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call get initial location function', () => {
        component.getInitLocation();
        expect(component.getInitLocation).toHaveBeenCalled();
    });

    it('should call weather function', () => {
        component.getWeather(-23, -43);
        expect(component.getWeather).toHaveBeenCalled();
    });

    it('should call color calculation function', () => {
        component.colorCalculation(30);
        expect(component.colorCalculation).toHaveBeenCalled();
    });

    it('should call change temperature unit function', () => {
        component.changeTempUnit();
        expect(component.changeTempUnit).toHaveBeenCalled();
    });

    it('should call get forward location function', () => {
        component.getForwardLocation('Rio de Janeiro');
        expect(component.getForwardLocation).toHaveBeenCalled();
    });

    it('should call get reverse location function', () => {
        component.getReverseLocation(-23, -43);
        expect(component.getReverseLocation).toHaveBeenCalled();
    });

    it('should call city selection function', () => {
        component.citySelection('Rio de Janeiro');
        expect(component.citySelection).toHaveBeenCalled();
    });

    // it('should check temp unit boolean', () => {
    //   expect(component.temperatureUnit).toBeFalsy()
    //   component.changeTempUnit()
    //   expect(component.temperatureUnit).toBeTruthy()
    //   component.changeTempUnit()
    //   expect(component.temperatureUnit).toBeFalsy()
    // });

    it('should call weather service', () => {
        weatherService.getWeather(-23, -43);
        expect(getWeatherSpy).toHaveBeenCalled();
    });

    it('should call get reverse location service', () => {
        locationService.getReverseLocation(-23, -43);
        expect(reverseLocationSpy).toHaveBeenCalled();
    });

    it('should call get forward location service', () => {
        locationService.getForwardLocation('london');
        expect(forwardLocationSpy).toHaveBeenCalled();
    });

});
