import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { UsersComponent} from './components/users/users.component';
import { PostsComponent} from './components/posts/posts.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'posts', component:PostsComponent},
  {path:'post-detail/:id', component:PostDetailComponent}
];


@NgModule({
  exports: [RouterModule], // exporting to main app.module
  imports: [
    RouterModule.forRoot(routes)
  ],
  
})
export class AppRoutingModule { }
