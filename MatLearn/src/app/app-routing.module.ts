import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
    { path: 'formfield', component: FormFieldComponent },
    { path: 'input', component: InputComponent },
    { path: 'card', component: CardComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'gridList', component: GridListComponent },
    { path: 'icon', component: IconComponent },
    { path: 'dialog', component: DialogComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
