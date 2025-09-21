import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home';
import { CvComponent } from './sections/cv/cv';
import { PublicationsComponent } from './sections/publications/publications';
import { ProjectsComponent } from './sections/projects/projects';
import { OutreachComponent } from './sections/outreach/outreach';
import { ContactComponent } from './sections/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'cv', component: CvComponent, title: 'CV' },
  { path: 'publications', component: PublicationsComponent, title: 'Publications' },
  { path: 'projects', component: ProjectsComponent, title: 'Projets' },
  { path: 'outreach', component: OutreachComponent, title: 'Outreach' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', redirectTo: '' }
];
