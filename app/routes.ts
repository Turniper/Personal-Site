import { Routes } from '@angular/router'
import { AboutComponent } from './about/about'
import { ArtComponent } from './art/art'
import { CodeProjectComponent } from './CodeProjects/CodeProjectsComponent'

export const appRoutes:Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'art', component: ArtComponent},
    {path: 'code', component: CodeProjectComponent},
    {path: 'blog', loadChildren: './app/blog/blog.module#BlogModule'},
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: '**', component: AboutComponent}

]
