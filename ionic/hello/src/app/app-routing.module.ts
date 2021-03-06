import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pagina1', loadChildren: './pagina1/pagina1.module#Pagina1PageModule' },
  { path: 'conteudo', loadChildren: './conteudo/conteudo.module#ConteudoPageModule' },
  { path: 'botoes', loadChildren: './botoes/botoes.module#BotoesPageModule' },
  { path: 'alertas', loadChildren: './alertas/alertas.module#AlertasPageModule' },
  { path: 'cartoes', loadChildren: './cartoes/cartoes.module#CartoesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
