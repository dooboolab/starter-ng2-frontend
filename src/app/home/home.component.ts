import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { DoobooService } from '../dooboo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DoobooService]
})
export class HomeComponent implements OnInit {

  dataResponse: any;
  email: string;
  isValidEmail: boolean = false;

  constructor(private doobooService: DoobooService) { }

  ngOnInit() {
  }

  isValidMailFormat(email: string){
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (email !== "" && EMAIL_REGEXP.test(email)) {
      return true;
    }
    return false;
  }

  filterEmail(email){
    console.log('email : ' + email);
    if (!this.isValidMailFormat(email)){
      this.isValidEmail = false;
      return;
    }
    this.isValidEmail = true;
  }

  leftEmail(email){
    this.doobooService.leftMaliUrl(email)
    .subscribe(
      data => {
        this.dataResponse = data;
        console.log(this.dataResponse);
        console.log('status : ' + this.dataResponse.status);
      },
      error => console.log(error)
    );
    return;
  }

}
