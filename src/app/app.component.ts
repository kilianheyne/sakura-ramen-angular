import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageContent } from './landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
