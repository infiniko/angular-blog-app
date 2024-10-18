import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrl: './category-single.component.css'
})
export class CategorySingleComponent {

  postArray: Array<any>;
  category: any;
  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit(){
    this.route.params.subscribe((val)=>{
      this.category = val.category;
      this.postsService.loadCategoryPosts(val.id).then( posts => {
        this.postArray = posts;
      });
      
    })
  }
}
