import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';

import { AppComponent } from './app.component';
import { DisplayyelpComponent } from './displayyelp/displayyelp.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayyelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiserviceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
