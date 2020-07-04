import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { HttpClientModule } from "@angular/common/http";

//effects
import { EffectsModule } from "@ngrx/effects";
import { UserSearchEffects } from "./effects";

//services
import { EffectsUserSearchService, StateUserSearchService, SetUserSearchService } from "./shared/services";

//reducer
import { root } from "./reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    StoreModule.forRoot({root}),
    StoreDevtoolsModule.instrument({maxAge: 30}),
    EffectsModule.forRoot([
      UserSearchEffects
    ])
  ],
  providers: [ 
    EffectsUserSearchService,
    StateUserSearchService,
    SetUserSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
