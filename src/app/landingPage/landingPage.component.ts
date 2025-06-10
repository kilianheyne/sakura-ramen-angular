import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landingpage',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section>
            <h1>SAKURA RAMEN</h1>
            <p>THE BEST RAMEN IN TOWN</p>
        </section>
    `,
    styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageContent {

}