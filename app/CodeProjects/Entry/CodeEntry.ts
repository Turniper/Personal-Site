import { Component, Input } from '@angular/core'

@Component({
    selector: 'CodeProjEntry',
    templateUrl: 'app/CodeProjects/Entry/CodeEntry.html'
})

export class CodeEntry {
    @Input() project:any
}