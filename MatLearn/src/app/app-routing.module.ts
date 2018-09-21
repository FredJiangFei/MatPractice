import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
    { path: 'formfield', component: FormFieldComponent },
    { path: 'input', component: InputComponent },
    { path: 'card', component: CardComponent },
    { path: 'datepicker', component: DatepickerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
