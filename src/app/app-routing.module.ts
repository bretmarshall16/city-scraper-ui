import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatResolve } from './components';
import { SchoolComponent } from './components/school/school.component';
import { PlayerComponent } from './components/player/player.component';




const stats: Route = {
  path: 'stats',
  component: StatsComponent,
  resolve: {
    data: StatResolve
  }
};

const school: Route = {
  path: 'school/:id',
  component: SchoolComponent,
  
};

const player: Route = {
  path: 'player/:id',
  component: PlayerComponent,

};

const main: Route = {
  path: '',
  component: MainComponent,
  children: [
    stats,
    school,
    player,
    {
      path: '',
      redirectTo: 'stats',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'stats',
      pathMatch: 'full'
    },
  ]

};


const routes: Routes = [
  main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
