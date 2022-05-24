import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-input-field',
  templateUrl: './question-input-field.component.html',
  styleUrls: ['./question-input-field.component.scss'],
})
export class QuestionInputFieldComponent implements OnInit {
  @Input() question: Question;
  @Input() type: string;
  @Input() form: FormGroup;
  //@Input() control: FormControl

  formControl: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required]);
    this.form.addControl(this.question.id.toString(), this.formControl);
  }
}
