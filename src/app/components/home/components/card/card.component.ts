import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  @Input()
  title!: string;

  @Input()
  content!: string;

  @Input()
  icon!: IconDefinition;


  ngOnInit(): void {
    console.log('Olá mundo')
  }

}
