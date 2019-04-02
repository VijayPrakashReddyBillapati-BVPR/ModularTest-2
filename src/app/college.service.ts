import { Injectable , OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { CollegeDetails } from 'src/app/design/design.component'


@Injectable({
  providedIn: 'root'
})
export class CollegeService {
constructor(private http:HttpClient){}
Colleges:Array<CollegeDetails>
    url:string="../assets/college.json"
    getCollegeDetails()
  {
    return this.http.get< CollegeDetails[]>(this.url)
  }
   
}
