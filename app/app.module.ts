import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

//Components
import { MainComponent } from "./MainComponent"
import { CodeProjectComponent } from "./CodeProjects/CodeProjectsComponent"
import { NavBarComponent } from "./nav/navbar"
import { AboutComponent } from "./about/about"
import { ArtComponent } from "./art/art"
import { CodeEntry } from './CodeProjects/Entry/CodeEntry'
import { ContactComponent } from './contact/contact'

import { appRoutes } from './routes'


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [MainComponent, CodeProjectComponent, NavBarComponent, AboutComponent, ArtComponent, CodeEntry, ContactComponent],
    bootstrap: [MainComponent]
})



export class AppModule {}