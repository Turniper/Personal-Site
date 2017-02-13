import { Component, OnInit } from '@angular/core'
import { ContactModel } from './contactmodel'

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact/contact.html'
})

export class ContactComponent implements OnInit {
    public form: ContactModel;

    ngOnInit() {
        this.form = {
            submitted: false,
            message: "red",
            email: "fed@doom",
            name: "Manfred Elizabeth"
        }
    }

    save(model: ContactModel, isValid: boolean) {
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }

}

