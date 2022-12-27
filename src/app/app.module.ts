import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainComponent } from './shared/components/main/main.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MaterialModule } from './shared/modules/modulematerial';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentModalComponent } from './shared/components/student-modal/student-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    StudentsPageComponent,
    StudentModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
