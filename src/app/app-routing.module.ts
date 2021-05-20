import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EtudiantsComponent} from './etudiants/etudiants.component';
import { FormateursComponent } from './formateurs/formateurs.component';

const routes: Routes = [
  {path :"",component :AppComponent},
  {path :"etudiants",component :EtudiantsComponent},
  {path :"formateurs",component :FormateursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
