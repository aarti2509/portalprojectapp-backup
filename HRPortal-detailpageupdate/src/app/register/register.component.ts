import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { from } from 'rxjs';
import { HumanResourceService } from '../human-resource.service';
import { HumanResource } from '../human-resource';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  humanResource: HumanResource=new HumanResource();
  submitted = false;
   msg="";

  constructor(private humanreSourceService:HumanResourceService ,private router:Router) { }

  ngOnInit() {
  }


  save(){
    console.log(`In component save method entered`);
     this.humanreSourceService.createHumanResource(this.humanResource)
     .subscribe(
       data => 
       {
       console.log(data);
        console.log("response received");   
        
       },
       error => 
       {
         console.log(error);
         console.log(`Exception occured`);
         });
   console.log(`pincode= ${this.humanResource.pincode}`);
   this.humanResource=new HumanResource();
   //this.goHumanlist();
       this.alertMsg()

  }
/*
  goHumanlist(){
    console.log(`In component goHumanlist method`);
    this.router.navigate(['/login']);
  }*/
  onSubmit()
  {
    console.log(`In component onSubmit method `);
    this.submitted=true;
    this.save();
   
  }

 /* newCandidate(){
    this.submitted=true;
    this.humanResource =new HumanResource();
  }*/

  backToLogin()
  {
    this.router.navigate(['/login']);
  }

  alertMsg()
  {
    if(this.submitted == true)
    {
      alert('Registration Successfully');
      this.router.navigate(['/login']);

    }
    else{
      alert('Registration Failed');
      this.router.navigate(['/register']);
    }
  }
}
