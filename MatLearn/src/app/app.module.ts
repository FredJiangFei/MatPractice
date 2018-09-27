import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormFieldComponent } from './form-field/form-field.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogShowComponent } from './dialog-show/dialog-show.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    InputComponent,
    CardComponent,
    DatepickerComponent,
    GridListComponent,
    IconComponent,
    DialogComponent,
    DialogShowComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    AppRoutingModule,
  ],
  providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [DialogShowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
