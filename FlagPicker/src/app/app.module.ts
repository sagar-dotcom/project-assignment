import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagComComponent } from './flag-com/flag-com.component';
import {FlagService} from './flag.service';
@NgModule({
  declarations: [
    AppComponent,
    FlagComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
