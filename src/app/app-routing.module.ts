import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'tutorial', loadChildren: () => import('./features/tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  {
    path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
