import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: 'home' },
  {
    path: 'home', loadChildren: () => import(`./pages/Home/Home.module`).then(
      module => module.HomeModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
    scrollPositionRestoration: "top"
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
