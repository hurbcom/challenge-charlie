import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from '../pages/home/home.component';

describe('Utils', ()=>
{
    beforeEach(()=>{
        TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [HomeComponent]
        });
    });

    it('Valor da temperatura arredondado', inject([HomeComponent], (test: HomeComponent)=>{
        let stringNumber = test.utils.roundWeather(36.000);
        let parseRoundedNumber = parseInt(stringNumber)

        expect(parseRoundedNumber).toEqual(36)
    }));

    it("Teste setando imagem de background", inject([HomeComponent], (test: HomeComponent)=>{
        let result = test.utils.setBackgroundImage("Rain")

        expect(result).toEqual("../../../assets/imgs/rain.png")
    }));
})