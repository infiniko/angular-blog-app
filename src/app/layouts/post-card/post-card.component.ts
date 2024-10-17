import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {

  @Input() fpostData : any;

  ngOnInit(){
    console.log(this.fpostData);
  }
}
