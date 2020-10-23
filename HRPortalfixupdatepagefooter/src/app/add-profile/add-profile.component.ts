import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { Candidate } from '../candidate';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  candidate:Candidate=new Candidate;
  submitted = false;
  constructor(private candidateService:CandidateService, private router: Router) { }

  ngOnInit() {
  }

  newCandidate(){
    this.submitted=true;
    this.candidate =new Candidate();
  }
  save() {
    this.candidateService.createCandidate(this.candidate)
      .subscribe(data => console.log(data), error => console.log(error));
    this.candidate = new Candidate();
    //this.gotoList();
    this.alertMsg();
  }
onSubmit() {
    this.submitted = true;
    this.save();    
  }
/*gotoList() {
    this.router.navigate(['/view-candidate']);
  }*/

  alertMsg()
  {
    if(this.submitted == true)
    {
      alert('Data Added Successfully');
      this.router.navigate(['/view-candidate']);

    }
    else{
      alert('Data not Added');
      this.router.navigate(['/add-profile']);
    }
  }
}
