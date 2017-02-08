import { Routes } from '@angular/router'
import { BlogComponent } from './blog'


export const blogRoutes:Routes = [
    {path: 'one', component: BlogComponent},
    {path: '', redirectTo: '/about', pathMatch: 'full'},

]
