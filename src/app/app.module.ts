import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CddComponent } from './components/cdd/cdd.component';
import { CdiComponent } from './components/cdi/cdi.component';
import { ShowComponent } from './components/show/show.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CddComponent,
    CdiComponent,
    HomeComponent,
    FormsModule,
    CardComponent,
    ShowComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
