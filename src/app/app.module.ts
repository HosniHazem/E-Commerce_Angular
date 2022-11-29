import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconsModule } from 'ng-heroicons';
// import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './shared/components/00-base/icons/icons.module';
import { SharedModule } from './shared/shared.module';
import {AuthModule} from "./features/auth/auth.module";
import {ShopModule} from "./features/shop/shop.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ShopModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
