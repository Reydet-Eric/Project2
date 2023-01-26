import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonWinterComponent } from './season-winter.component';

describe('SeasonWinterComponent', () => {
  let component: SeasonWinterComponent;
  let fixture: ComponentFixture<SeasonWinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonWinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
