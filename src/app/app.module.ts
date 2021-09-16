import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AgentsGridComponent } from './pages/agents-grid/agents-grid.component';
import { AgentSingleComponent } from './pages/agent-single/agent-single.component';
import { BlogGridComponent } from './pages/blog-grid/blog-grid.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PropertyGridComponent } from './pages/property-grid/property-grid.component';
import { PropertySingleComponent } from './pages/property-single/property-single.component';
import { MenuComponent } from './layout/menu/menu.component';

const appRoutes : Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'agent-single', component: AgentSingleComponent },
  { path: 'agents-grid', component: AgentsGridComponent },
  { path: 'blog-grid', component: BlogGridComponent },
  { path: 'blog-single', component: BlogSingleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'property-grid', component: PropertyGridComponent },
  { path: 'property-single', component: PropertySingleComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AgentsGridComponent,
    AgentSingleComponent,
    BlogGridComponent,
    BlogSingleComponent,
    ContactComponent,
    HomePageComponent,
    PropertyGridComponent,
    PropertySingleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
