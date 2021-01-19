import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { PastPapersComponent } from './components/past-papers/past-papers.component';
import { EssayListComponent } from './components/essay-list/essay-list.component';
import { VocabularyListComponent } from './components/vocabulary-list/vocabulary-list.component';
import { GrammerListComponent } from './components/grammer-list/grammer-list.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'create-new',
        component:CreateLessonComponent
      },
  
      {
        path:'grammer-list',
        component:GrammerListComponent
      },
      {
        path:'vocabulary-list',
        component:VocabularyListComponent
      },
      {
        path:'essay-list',
        component:EssayListComponent
      },
      {
        path:'past-papers',
        component:PastPapersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
