import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';



@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent {
  isEmailUsed: boolean = false;
  isSubscribed: boolean = false;
  constructor(private subService: SubscribersService){}


  onSubmit(formValue:any){
    const subData: Sub = {
      name: formValue.name,
      email: formValue.email
    }

    this.subService.checkSub(subData.email).then(val=>{ 
      if(val.empty){
        this.subService.addSub(subData);
        this.isEmailUsed = false;
        this.isSubscribed = true;
      }
      else{
        console.log('Email already exists!');
        this.isEmailUsed = true;
      }
    })
  }
}
