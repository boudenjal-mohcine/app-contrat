import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CddComponent } from './components/cdd/cdd.component';
import { CdiComponent } from './components/cdi/cdi.component';
import { HomeComponent } from './components/home/home.component';
import { AttestationComponent } from './components/attestation/attestation.component';
import { LocationComponent } from './components/location/location.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  { path: 'cdd', component: CddComponent },
  { path: 'cdi', component: CdiComponent },
  { path: '', component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'attestation', component: AttestationComponent },
  { path: 'show/:id', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
