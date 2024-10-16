import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private postService: PostsService){
    this.postService.loadData().subscribe( (val:any) => {
      console.log(val);
    })
  }  
}
