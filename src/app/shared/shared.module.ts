import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/01-atoms/button/button.component';
import { IconComponent } from './components/01-atoms/icon/icon.component';
import { ImageComponent } from './components/01-atoms/image/image.component';
import { InputComponent } from './components/01-atoms/inputs/input/input.component';
import { CheckboxComponent } from './components/01-atoms/inputs/checkbox/checkbox.component';
import { RadioComponent } from './components/01-atoms/inputs/radio/radio.component';
import { SelectComponent } from './components/01-atoms/inputs/select/select.component';
import { PasswordInputComponent } from './components/01-atoms/inputs/password-input/password-input.component';
import { IconsModule } from './components/00-base/icons/icons.module';



@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent,
    PasswordInputComponent,
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports:[
    ButtonComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    PasswordInputComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
