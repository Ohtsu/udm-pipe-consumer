import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UdmPipeModule} from 'udm-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UdmPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
