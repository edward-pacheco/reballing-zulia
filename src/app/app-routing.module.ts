import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path:'servicios', component:ServicesComponent},
  {path:'publicaciones', component:PostsComponent},
  {path:'contactanos', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
