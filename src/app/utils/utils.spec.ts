import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from '../pages/home/home.component';

describe('Utils', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [HomeComponent]
		});
	});

	it('Valor da temperatura arredondado', inject([HomeComponent], (test: HomeComponent) => {
		const expectedResult = 36;
		const stringNumber = test.utils.roundWeather(36.000);
		const parseRoundedNumber = parseInt(stringNumber, 2);
		expect(parseRoundedNumber).toEqual(expectedResult);
	}));

	it('Teste setando css da temperatura', inject([HomeComponent], (test: HomeComponent) => {
		const expectedResult = 'warm-temp';
		const result = test.utils.setTempNumberColor(16, 'Celcius');
		expect(result).toEqual(expectedResult);
	}));

	it('Teste de formatação de hora', inject([HomeComponent], (test: HomeComponent) => {
		const expectedResult = '12';
		const result = test.utils.formatTime('2021-04-01 12:00:00');
		expect(result).toEqual(expectedResult);
	}));

	it('Teste de formatação de hora', inject([HomeComponent], (test: HomeComponent) => {
		const condition = 'snow';
		const expectedResult = 'Neve';
		const result = test.utils.translateConditions(condition);
		expect(result).toEqual(expectedResult);
	}));

});
