import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

  {
    path: '',  //el string vacio simula como si estuvieras en el 1er component de la ruta
    component: PorPaisComponent, //Este es el componente que se usaria en este path
    pathMatch: 'full' //Full para que sea tal cual como el path
  },
  {
    path: 'region', // seria url/region
    component: PorRegionComponent, // en url/region , se mostraria este componente
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id',  // el : es para hacer ese valor dinamico, en este caso iria al url pais/id y el id dependera del que se obtenga
    component: VerPaisComponent
  },
  {
    // Esta es para cuando se introduzca una url que no exista , redireccione a la pagina del redirectTo, se le puede agregar un component que muestre el error.
    path: '**',
    redirectTo: '',
    // component: 404Component
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {

}
