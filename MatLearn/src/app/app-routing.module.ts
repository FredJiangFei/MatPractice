import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
    { path: 'formfield', component: FormFieldComponent },
    { path: 'input', component: InputComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
