import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import { HomeComponent } from './features/home/home.component';
import { RefereeApplyComponent } from './features/referee-apply/referee-apply.component';

import {DropdownModule} from 'primeng/dropdown';

import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RefereeApplyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
