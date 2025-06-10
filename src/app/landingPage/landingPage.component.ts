import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-landingpage',
    standalone: true,
    imports: [CommonModule, NavBarComponent],
    template: `
        <section>
            <div>
                <app-nav-bar></app-nav-bar>
            </div>
            <h1>SAKURA RAMEN</h1>
            <p>THE BEST RAMEN IN TOWN</p>
        </section>
    `,
    styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageContent {

}