import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

//Components
import { MainComponent } from "./MainComponent"
import { CodeProjectComponent } from "./CodeProjects/CodeProjectsComponent"
import { NavBarComponent } from "./nav/navbar"
import { AboutComponent } from "./about/about"
import { ArtComponent } from "./art/art"
import { CodeEntry } from './CodeProjects/Entry/CodeEntry'

import { appRoutes } from './routes'


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [MainComponent, CodeProjectComponent, NavBarComponent, AboutComponent, ArtComponent, CodeEntry],
    bootstrap: [MainComponent]
})



export class AppModule {}