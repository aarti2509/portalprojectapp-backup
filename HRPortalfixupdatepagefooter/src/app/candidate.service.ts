import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
 private url=" http://localhost:3000/candidate";
 
 constructor(private http:HttpClient) { }

 //store data in db
 createCandidate(candidate:Object):Observable<Object>
 {
   return this.http.post(`${this.url}`,candidate);
 }
//fetch list of candidates
 getCandidateList():Observable<any>
 {
   return this.http.get<any>(`${this.url}`);
 }

 //delete specific candidate
 deleteCandidate(id:number):Observable<any>
 {
   return this.http.delete(`${this.url}/${id}`,{responseType:'text'})
 }

 //fetch specific candidate data 
 getCandidate(id:number):Observable<any>
 {
   return this.http.get(`${this.url}/${id}`);
 }

 //update method
 updateCandidate(id:number,value:Object):Observable<Object>
 {
   console.log("entered in updateCandidate() method of candidateService");
  return this.http.put(`${this.url}/${id}`,value);
 }



}
