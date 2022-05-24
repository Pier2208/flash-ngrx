import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInputFieldComponent } from './question-input-field.component';

describe('QuestionInputFieldComponent', () => {
  let component: QuestionInputFieldComponent;
  let fixture: ComponentFixture<QuestionInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
