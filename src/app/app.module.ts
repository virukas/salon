import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './page/service/service.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { PipessComponent } from './pipess/pipess.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    ServiceComponent,
    ContactComponent,
    AboutusComponent,
    PagenotfoundComponent,
    PipessComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
