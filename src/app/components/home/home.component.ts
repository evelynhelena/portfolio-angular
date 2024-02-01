import { Component } from '@angular/core';
import { faLinkedin, faInstagramSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faInstagramSquare = faInstagramSquare;
  faYoutube = faYoutube;
}
