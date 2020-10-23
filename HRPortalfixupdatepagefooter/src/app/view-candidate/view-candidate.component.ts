import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.scss']
})
export class ViewCandidateComponent implements OnInit {

  candidates:Observable<Candidate[]>;
  p:number=1;
  key: string;
  reverse: boolean = false;
  constructor(private candidateService:CandidateService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.candidates = this.candidateService.getCandidateList();
  }

  deleteCandidate(id:number){
    this.candidateService.deleteCandidate(id).
    subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error =>console.log(error));
  }

  updateCandidate(id:number){
    this.router.navigate(['/update',id]);
  }

  candidateDetails(id:number){
    this.router.navigate(['/details',id]);
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  add(){
    this.router.navigate(["/add-profile"]);
  }
}
