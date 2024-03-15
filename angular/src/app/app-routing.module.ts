import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { PortalComponent } from './portal/portal.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HelpcompComponent } from './helpcomp/helpcomp.component';

const routes: Routes = [
  {path: 'portal', component: PortalComponent},
  {path: 'create', component: CreateComponent},
  {path: 'events', component: EventsComponent},
  {path: 'help', component: HelpcompComponent},
  {path: '', redirectTo: '/portal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
