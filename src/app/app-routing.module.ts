import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthorsComponent } from './pages/authors/authors.component';

const routes: Routes = 
[
  {path: "", component: MainComponent},
  {path: "authors", component:AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
