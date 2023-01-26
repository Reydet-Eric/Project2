import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAutomnComponent } from './season-automn.component';

describe('SeasonAutomnComponent', () => {
  let component: SeasonAutomnComponent;
  let fixture: ComponentFixture<SeasonAutomnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonAutomnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonAutomnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
