import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSummerComponent } from './season-summer.component';

describe('SeasonSummerComponent', () => {
  let component: SeasonSummerComponent;
  let fixture: ComponentFixture<SeasonSummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonSummerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonSummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
