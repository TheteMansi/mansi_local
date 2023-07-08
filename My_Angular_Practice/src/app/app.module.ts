import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { FormComponent } from './form/form.component';

console.log('app.module.ts file');


@NgModule({
  declarations: [//components, directives, pipes
    AppComponent,
    LandingComponent,
    LoginComponent,
   DirectivesInAngularComponent,
   ParentComponent,
   ChildComponent,
   LifecyclehooksComponent,
   FormComponent,
  ],
  imports: [//modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
