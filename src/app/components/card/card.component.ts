import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        ButtonComponent
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    constructor(
        private readonly _router: Router
    ) { }

    navigate() {
        this._router.navigate(['/product']);
    }
}
