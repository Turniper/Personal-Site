import { Component } from '@angular/core'

@Component({
    selector: 'code-proj-sel',
    templateUrl: 'app/CodeProjects/CodeProjectsComponent.html'
})

export class CodeProjectComponent {
    projects = [
    {
        name: 'This Website',
        icon: '/app/assets/images/Turnip.jpg',
        github: 'https://github.com/Turniper/Personal-Site',
        description: 'Built with Angular2 and Bootstrap.'
    },
    {
        name: 'UAV Debris Detector',
        icon: '/app/assets/images/Turnip.jpg',
        github: 'https://github.com/Turniper/UAV-Debris-Detector',
        description: 'A program designed to batch process UAV Imagery taken at the site of disasters in order to identify debris and other features of interest to first responders.'
    },
    {
        name: 'USNG Grid Utility',
        icon: '/app/assets/images/Turnip.jpg',
        github: '/app/assets/Turnip.jpg',
        description: 'Numba 3'
    }
    ]
}