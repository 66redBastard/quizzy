import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { TextareaComponent } from './components/textarea/textarea.component';



@NgModule({
  declarations: [
    InputComponent,
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
