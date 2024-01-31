import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialContentComponent } from './tutorial-content/tutorial-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: '', component: TutorialContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
