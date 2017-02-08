import { Component } from '@angular/core'

@Component({
    selector: 'code-proj-sel',
    templateUrl: 'app/CodeProjects/CodeProjectsComponent.html'
})

export class CodeProjectComponent {
    project = {
        name: 'Test',
        icon: '/app/assets/test.png'
    }
}