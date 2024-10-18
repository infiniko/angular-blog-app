import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  
  postResponse: any;
  constructor(private route:ActivatedRoute, private postsService: PostsService){}

  ngOnInit(){
    this.route.params.subscribe(val =>{
      this.postsService.loadOnePost(val.id).subscribe( (post:any) => {
        this.postResponse = post;
      })
    })
  }
}
