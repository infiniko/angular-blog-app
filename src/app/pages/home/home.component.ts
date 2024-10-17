import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredPostArray: Array<any>;

  constructor(private postService: PostsService){
    this.postService.loadFeatured().then( (val:any) => {
      this.featuredPostArray = val;
    })
  }  
}
