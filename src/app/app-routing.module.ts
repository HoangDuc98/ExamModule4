import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BookListComponent} from './book-list/book-list.component';
import {UnreadbookListComponent} from './unreadbook-list/unreadbook-list.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'unreadbook-list', component: UnreadbookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
