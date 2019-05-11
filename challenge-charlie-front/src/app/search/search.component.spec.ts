import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should normalize location', () => {
    component.location = "São Paulo";
    expect(component.normalizedLocation).toBe("Sao Paulo");
  });

  it('should update location', () => {
    const locationToUpdate = "Rio de Janeiro";
    component.location = "São Paulo";
    component.updateLocation(locationToUpdate);
    expect(component.location).toBe(locationToUpdate);
  });
});
