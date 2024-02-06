import { Component, OnInit } from '@angular/core';
import { faLinkedin, faInstagramSquare, faYoutube, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { UserService } from './services/user.service';
import { UserProps } from './types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faLinkedin = faLinkedin;
  faInstagramSquare = faInstagramSquare;
  faYoutube = faYoutube;
  faSquareGithub = faSquareGithub;

  dataUser!: UserProps

  constructor(private userService: UserService) { }

  getUser() {
    return this.userService.getUser('evelynhelena').subscribe(user => {
      this.dataUser = user
    })
  }

  ngOnInit(): void {
    this.getUser()
  }


}
