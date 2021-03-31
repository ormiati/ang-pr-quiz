import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './common/admin/admin.component';
import { QuizeditorComponent } from './common/quizeditor/quizeditor.component';
import { QuestioneditorComponent } from './common/questioneditor/questioneditor.component';
import { QuizComponent } from './common/quiz/quiz.component';
import { HomeComponent } from './common/home/home.component';
import { NavigationComponent } from './common/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizeditorComponent,
    QuestioneditorComponent,
    QuizComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
