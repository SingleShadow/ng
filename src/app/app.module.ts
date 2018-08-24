import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AppRoutesModule } from './app-routes.module';
import { FooterComponent } from './footer/footer.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeatureListComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
