import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
    selector: 'app-product-page',
    standalone: true,
    imports: [
        HeaderComponent,
        ButtonComponent,
        CardComponent
    ],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
