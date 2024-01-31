import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialContentComponent } from './tutorial-content/tutorial-content.component';


@NgModule({
  declarations: [
    TutorialContentComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
