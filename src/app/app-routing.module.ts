import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

const routerOptions: ExtraOptions = {
  useHash: false, // Desabilita o uso de # para âncoras
  anchorScrolling: 'enabled', // Habilita navegação por âncoras
  onSameUrlNavigation: 'reload', // Habilita usar o mesmo recursos ilimitadas vezes
  // Exemplo de uso em elemento -> routerLink="./" fragment="anchorName"
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

