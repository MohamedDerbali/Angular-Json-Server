import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '', component: TutorialsListComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'update/:id', component: UpdateTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
