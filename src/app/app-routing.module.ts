import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './2-spa/heroes/heroes.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './2-spa/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './2-spa/about/about.module#AboutModule'
  },
  {
    path: 'car',
    loadChildren: './4-flow/car/car.module#CarModule'
  },
  {
    path: 'contacts',
    loadChildren: './3-data/contacts/contacts.module#ContactsModule'
  },
  {
    path: 'converter',
    loadChildren: './5-inject/converter/converter.module#ConverterModule'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
