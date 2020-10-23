import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanResourceService {
  private  baseUrl = 'http://localhost:3000/hr';
  constructor(private http: HttpClient) { }

  public loginUserFromRemote(HumanResource:Object):Observable<Object>
  { 
       return this.http.post(`${this.baseUrl}`,HumanResource);
  }

  public  createHumanResource( HumanResource:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,HumanResource);
  }

 
}
