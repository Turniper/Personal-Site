import { Component } from '@angular/core'

@Component({
    selector: 'CodeProjEntry',
    templateUrl: 'app/CodeProjects/Entry/CodeEntry.html'
})

export class CodeEntry {
    project = {
        name: 'Test',
        icon: '/app/asests/test.png'
    }
}