import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  questionTypes: { [key: string]: { type: string } };
  questions: any[] = []

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.form = new FormGroup({})

    this.store.subscribe((state) => {
      this.questions = state.flashquote.questions;
      return state.flashquote.questions.forEach((question: any) => {
        // this.form.addControl(question.id.toString(), this.fb.control(''));
        this.questionTypes = {
          ...this.questionTypes,
          [question.id]: { type: question.type },
        };
      });
    });
  }

  onSubmit() {
    console.log('form value', this.form.value);
  }
}
