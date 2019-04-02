import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service'
import {  HttpClient } from '@angular/common/http';
export class CollegeDetails{
  CollegeId:number
  CollegeName:string
  state:string
  collegeFee:number
  

   constructor(CollegeId:number ,CollegeName:string ,state:string , collegeFee:number ){
     this.CollegeId=CollegeId
     this.CollegeName=CollegeName
     this.state=state
     this.collegeFee=collegeFee
   }
}
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit  {
Colleges:Array<CollegeDetails>=[]
  constructor( private http:HttpClient , private service:CollegeService) {

   }

   ngOnInit()
  {
   
    this.service.getCollegeDetails().subscribe(response=>{ this.Colleges=response;console.log("responded")},
    error=>{console.log("Not responded")});
  }
  removeBook(i:number)
  {
    this.Colleges.splice(i,1)
  }


  sortById() {
    this.Colleges.sort((A,B)=>{
      return A.CollegeId-B.CollegeId;
    });
  }
  sortByFee(){
    this.Colleges.sort((A,B)=>{
      return A.collegeFee-B.collegeFee
    });
  }
  
  sortBystate(){
    this.Colleges.sort((a, b)=> {
      var nameA = a.state.toUpperCase(); // ignore upper and lowercase
      var nameB = b.state.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })
  }
  sortByName(){
    this.Colleges.sort((a, b)=> {
      var nameA = a.CollegeName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.CollegeName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })
  }
}
