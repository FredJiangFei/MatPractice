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
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { GridListComponent } from './grid-list/grid-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    InputComponent,
    CardComponent,
    DatepickerComponent,
    GridListComponent,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
