import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-base',
  templateUrl: './question-base.component.html',
  styleUrls: ['./question-base.component.scss'],
})
export class QuestionBaseComponent implements OnInit {
  @Input() question: Question;
  @Input() questionType: string;
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
