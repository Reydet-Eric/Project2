import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSpringComponent } from './season-spring.component';

describe('SeasonSpringComponent', () => {
  let component: SeasonSpringComponent;
  let fixture: ComponentFixture<SeasonSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonSpringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
