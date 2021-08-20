import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorieslistComponent } from './storieslist/storieslist.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: 'stories', component: StorieslistComponent },
  { path: 'story/:id', component: StoryComponent },
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: '**', redirectTo: '/stories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
