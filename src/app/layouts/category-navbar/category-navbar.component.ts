import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent {
  
  categoryArray: Array<any>;
  constructor(private categoryService: CategoriesService){}

  ngOnInit(){
    this.categoryService.loadData().subscribe( (val: any) => {
      this.categoryArray = val;
    })
  }
}
