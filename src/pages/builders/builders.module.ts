import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildersPage } from './builders';

@NgModule({
  declarations: [
    BuildersPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildersPage),
  ],
})
export class BuildersPageModule {}
