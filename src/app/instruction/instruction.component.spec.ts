import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/instruction/instruction.component.spec.ts
import { InstructionComponent } from './instruction.component';

describe('InstructionComponent', () => {
  let component: InstructionComponent;
  let fixture: ComponentFixture<InstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionComponent);
=======
import { SeasonComponent } from './season.component';

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonComponent);
>>>>>>> f632f9f521109086c28c1df212f1dccb4a8c5df8:src/app/season/season.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
