import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import {FilterPipe} from './filter.pipe';
import {routing} from './app.routes';
import {LoggingserviceService} from './loggingservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  routing

  ],
  providers: [LoggingserviceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
