import { Component } from '@angular/core'

@Component({
    selector: 'code-proj-sel',
    templateUrl: 'app/CodeProjects/CodeProjectsComponent.html'
})

export class CodeProjectComponent {
    projects = [
    {
        name: 'Test1',
        icon: '/app/assets/Turnip.jpg'
    }
    
    
    
    ]
}