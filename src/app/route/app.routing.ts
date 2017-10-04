import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../list/list.component';
import { EditComponent } from '../edit/edit.component';
import { AddComponent } from '../add/add.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'edit', component: EditComponent },
    { path: 'add', component: AddComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
