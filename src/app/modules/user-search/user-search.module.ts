import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchComponent } from './user-search.component';

//components
import { 
  SearchBar, SearchResults, 
  SearchPaging, SearchResultsCount
 } from "./components";


@NgModule({
  declarations: [
    UserSearchComponent,
    SearchBar,
    SearchResults,
    SearchPaging,
    SearchResultsCount
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserSearchRoutingModule
  ]
})
export class UserSearchModule { }
