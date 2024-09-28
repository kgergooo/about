import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTE = {
  appDetails: 'app-details',
};
const routes: Routes = [
  {
    path: APP_ROUTE.appDetails + '/:id',
    loadChildren: () =>
      import('./pages/app-details/app-details.modeule').then(
        (m) => m.AppDetailsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
