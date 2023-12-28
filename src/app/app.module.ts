import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NavbarComponent } from './base/components/navbar/navbar.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DownloadComponent } from './download/download.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './base/components/footer/footer.component';
import { ContentModule } from './content/content.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from './shared/shared.module';
import { BaseModule } from './base/base.module';
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DownloadComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    [CollapseModule.forRoot()],
    ContentModule,
    BsDropdownModule.forRoot(),
    SharedModule,
    BaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
