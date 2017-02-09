import { Component } from '@angular/core'

@Component({
    selector: 'code-proj-sel',
    templateUrl: 'app/CodeProjects/CodeProjectsComponent.html'
})

export class CodeProjectComponent {
    projects = [
    {
        name: 'Test1',
        icon: '/app/assets/Turnip.jpg',
        Description: 'Numba 1'
    },
    {
        name: 'Test2',
        icon: '/app/assets/Turnip.jpg',
        Description: 'Numba 2'
    },
    {
        name: 'Test3',
        icon: '/app/assets/Turnip.jpg',
        Description: 'Numba 3'
    }
    ]
    project1 =  {
        name: 'Test1',
        icon: '/app/assets/Turnip.jpg',
        Description: 'Numba 1'
    }
}