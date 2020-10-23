import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { ActivatedRoute, Router } from '@angular/router';
import {CandidateService} from '../candidate.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
  candidate:Candidate;
  id:number;
  constructor(private route:ActivatedRoute,private router:Router,
    private candidateService:CandidateService) { }

  ngOnInit() {
    this.candidate=new Candidate();
    this.id=this.route.snapshot.params['id'];

    this.candidateService.getCandidate(this.id).
    subscribe(
      data =>{
        console.log(this.candidate.firstName);
        console.log(this.candidate.company);
        console.log(data);
        this.candidate=data;
      },
      error =>
      {
        console.log(error);
        console.log("error occured in ditails-component-ts");
      });
   }

   list(){
     this.router.navigate(['/view-candidate']);
   }

}
