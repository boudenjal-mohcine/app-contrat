import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CddComponent } from './components/cdd/cdd.component';
import { CdiComponent } from './components/cdi/cdi.component';

const routes: Routes = [
  { path: 'cdd', component: CddComponent },
  { path: 'cdi', component: CdiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
