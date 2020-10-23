import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.scss']
})
export class UpdateCandidateComponent implements OnInit {
   candidate:Candidate;
   id:number;
   
  constructor(private route:ActivatedRoute,private router:Router,
    private candidateService:CandidateService) { }

  ngOnInit() {
    this.candidate=new Candidate();
    this.id=this.route.snapshot.params['id'];
    
    this.candidateService.getCandidate(this.id).
    subscribe(
      data => {
        console.log(data);
        this.candidate=data;
      },
      error =>console.log(error));
  }

  updateCandidate(){
    this.candidateService.updateCandidate(this.id,this.candidate)
    .subscribe(
      data => {
        console.log("response received");
        console.log(data);
        console.log(this.candidate.firstName);
        console.log(this.candidate.lastName);
        
      },
      error => console.log(error));
    this.candidate=new Candidate();
    this.goToList();
  }

  onSubmit(){
   this.updateCandidate();
  }

  goToList(){
    this.router.navigate(['/view-candidate']);
  }
}
