import { GrammerLessonService } from './services/grammer-lessons.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';


import { GrammerListComponent } from './components/grammer-list/grammer-list.component';
import { VocabularyListComponent } from './components/vocabulary-list/vocabulary-list.component';
import { EssayListComponent } from './components/essay-list/essay-list.component';
import { PastPapersComponent } from './components/past-papers/past-papers.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';

@NgModule({
  declarations: [
    NavComponent,
    GrammerListComponent,
    VocabularyListComponent,
    EssayListComponent,
    PastPapersComponent,
    SearchComponent,
    CreateLessonComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers:[GrammerLessonService]
})
export class NavigationModule {}
