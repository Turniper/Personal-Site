import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { blogRoutes } from './blogRoutes'
import { BlogComponent } from './blog'
import { PostComponent } from './post'

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(blogRoutes)],
    declarations: [ BlogComponent, PostComponent ],
    bootstrap: []
})

export class BlogModule {}