import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';


@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent {

  constructor(private subService: SubscribersService){}


  onSubmit(formValue:any){
    console.log(formValue);
    const subData: Sub = {
      name: formValue.name,
      email: formValue.email
    }
    // this.subService.addSub(subData);
    this.subService.checkSub(subData.email).then(val=>{
      console.log(val);
      
    })
  }
}
