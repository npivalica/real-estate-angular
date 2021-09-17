import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { AgentsGridComponent } from './pages/agents-grid/agents-grid.component';
import { AgentSingleComponent } from './pages/agent-single/agent-single.component';
import { BlogGridComponent } from './pages/blog-grid/blog-grid.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PropertyGridComponent } from './pages/property-grid/property-grid.component';
import { PropertySingleComponent } from './pages/property-single/property-single.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'agent-single', component: AgentSingleComponent },
  { path: 'agents-grid', component: AgentsGridComponent },
  { path: 'blog-grid', component: BlogGridComponent },
  { path: 'blog-single', component: BlogSingleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'property-grid', component: PropertyGridComponent },
  { path: 'property-single', component: PropertySingleComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }