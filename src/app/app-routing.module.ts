import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeModule = () =>
  import('@a-domains/modules/home/home.module').then((x) => x.HomeModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: homeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
