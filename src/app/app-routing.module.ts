import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ 
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'tv', loadChildren: () => import('./tv/tv.module').then(m => m.TvModule) }, 
  // { path: 'network', loadChildren: () => import('./network/network.module').then(m => m.NetworkModule) },
  // { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  // { path: 'menubar', loadChildren: () => import('./menubar/menubar.module').then(m => m.MenubarModule) },
  { path: 'register', component: RegisterComponent },
  { path: 'moviedetails/:id', component: MoviedetailsComponent },
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '**', component: HomeheaderComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
