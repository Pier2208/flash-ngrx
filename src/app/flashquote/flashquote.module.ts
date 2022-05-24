import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FlashquoteRoutingModule } from './flashquote-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import * as fromFlashquote from './reducers';
import { FlashquoteEffects } from './flashquote.effects';
import { HttpClientModule } from '@angular/common/http';
import { FlashquoteResolver } from './flashquote.resolver';
import { QuestionBaseComponent } from './questions/question-base/question-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionInputFieldComponent } from './questions/question-input-field/question-input-field.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { QuestionSelectComponent } from './questions/question-select/question-select.component';
import { QuestionSelectDialogComponent } from './questions/question-select-dialog/question-select-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { SearchFilterPipe } from './pipes/filter/search-filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    QuestionBaseComponent,
    QuestionInputFieldComponent,
    QuestionSelectComponent,
    QuestionSelectDialogComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlashquoteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    EffectsModule.forFeature([FlashquoteEffects]),
    StoreModule.forFeature(
      fromFlashquote.flashquoteFeatureKey,
      fromFlashquote.reducers
    ),
  ],
  providers: [FlashquoteResolver],
})
export class FlashquoteModule {
  static forRoot(): ModuleWithProviders<FlashquoteModule> {
    return {
      ngModule: FlashquoteModule,
      providers: [],
    };
  }
}
