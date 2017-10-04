import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';

import { CrudService } from './service/crud.service';

import { routing } from './route/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    FooterComponent,
    HeaderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    routing
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
