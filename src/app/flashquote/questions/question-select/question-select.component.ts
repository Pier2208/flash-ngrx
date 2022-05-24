import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuestionSelectDialogComponent } from '../question-select-dialog/question-select-dialog.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-select',
  templateUrl: './question-select.component.html',
  styleUrls: ['./question-select.component.scss']
})
export class QuestionSelectComponent implements OnInit {
  @Input() question: Question
  @Input() form: FormGroup;
  selectedOptions: any[] = [];
  formControl: FormControl;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required]);
    this.form.addControl(this.question.id.toString(), this.formControl);
  }

  // open full screen dialog for select with more than 10 options
  openMultiSelectDialog() {
    // create a dialog config object
    const dialogConfig = new MatDialogConfig()
    // add the question and all the options (as Observable) related to this select
    dialogConfig.data = { question: this.question, options: this.question.responses, selectedOpts: this.selectedOptions }
    dialogConfig.width = '100vw';
    dialogConfig.panelClass = 'mobile-dialog-container'
    // call the open method on the matDialog service and pass in the component to render
    // inside the dialog - returns a ref of the currently opened dialog
    const dialogRef = this.matDialog.open(QuestionSelectDialogComponent, dialogConfig)
    // when closing, the dialog passes the selected options back to the caller component
    dialogRef.afterClosed().subscribe(data => {
      this.selectedOptions = data || this.selectedOptions || []
      this.setControlValue();
    })
  }

  // set the selected options in the formControl value
  setControlValue() {
    let value: string[] = []

    this.selectedOptions?.forEach(opt => {
      if (opt !== undefined)
        value.push(opt.id);
    })
    this.formControl.patchValue(value.join());
  }


  remove(option: string): void {
    const index = this.selectedOptions.findIndex(opt => opt.id === option)

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    this.setControlValue()
  }
}
