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
import { LinkComponent } from './components/01-atoms/link/link.component';
import {RouterLinkWithHref} from "@angular/router";
import { HeaderComponent } from './components/06-layout/header/header.component';
import { BreadcrumbComponent } from './components/02-molecules/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/06-layout/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GridComponent } from './components/07-templates/grid/grid.component';
import { RatingsComponent } from './components/02-molecules/ratings/ratings.component';
import { ErrorComponent } from './components/02-molecules/error/error.component';
import { DeviderComponent } from './components/01-atoms/devider/devider.component';
import { StockIndicatorComponent } from './components/01-atoms/stock-indicator/stock-indicator.component';



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
    LinkComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    GridComponent,
    RatingsComponent,
    ErrorComponent,
    DeviderComponent,
    StockIndicatorComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterLinkWithHref,
    BrowserAnimationsModule,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    PasswordInputComponent,
    SelectComponent,
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    RatingsComponent,
    ErrorComponent,
    DeviderComponent,
    StockIndicatorComponent
  ]
})
export class SharedModule { }
