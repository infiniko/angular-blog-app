import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredPostArray: Array<any>;
  latestPostArray: Array<any>;
  constructor(private postService: PostsService){
    
  } 
  ngOnInit(){
    this.postService.loadFeatured().then( (val:any) => {
      this.featuredPostArray = val;
    })
    this.postService.loadLatest().then( (val) => {
      this.latestPostArray = val;
    })
  } 
}
