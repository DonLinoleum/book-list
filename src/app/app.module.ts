import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayout } from './layouts/main/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule,MatDialog} from '@angular/material/dialog';
import { MainComponent } from './pages/main/main.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailModalComponent } from './components/modals/book-detail-modal/book-detail-modal.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorUpdateComponent } from './components/modals/author-update/author-update.component';
import { GetBooksService } from './services/getBooks.service';
import { GetAuthorsService } from './services/getAuthors.service';
import { GetLanguageService } from './services/getLanguages.service';
import { UpdateDB } from './services/updateDb.service';
import { AuthorCreateFromComponent } from './components/modals/author-create-from/author-create-from.component';
import { BookCreateFromComponent } from './components/modals/book-create-from/book-create-from.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayout,
    MainComponent,
    AuthorsComponent,
    BookComponent,
    BookDetailModalComponent,
    AuthorComponent,
    AuthorUpdateComponent,
    AuthorCreateFromComponent,
    BookCreateFromComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [GetBooksService,GetAuthorsService,UpdateDB,GetLanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
