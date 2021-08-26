import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorieslistComponent } from './storieslist/storieslist.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'stories', component: StorieslistComponent },
  { path: 'user/:username', component: UserComponent },
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: '**', redirectTo: '/stories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
