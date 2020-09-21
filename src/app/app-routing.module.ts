import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ResumeComponentComponent } from './resume-component/resume-component.component';
import { WorkComponentComponent } from './work-component/work-component.component';


const routes: Routes = [
  { path: '', component: HomeComponentComponent, 
    children: [
      {path: 'about', component: AboutComponentComponent},
      {path: 'work', component: WorkComponentComponent}
  ]},

  { path: 'home', component: HomeComponentComponent, 
    children: [
      {path: 'about', component: AboutComponentComponent},
      {path: 'work', component: WorkComponentComponent}, 
    ]},

  { path: 'resume', component: ResumeComponentComponent},

  { path: '**', component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ResumeComponentComponent]
