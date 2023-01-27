import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicerecetteService {

// variable declarée // 
 

  


// URL DE L'API //
  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';
  constructor (public http: HttpClient,  ){



  }

 getPost(){
    return  this.http.get<any>(this.URL2);
    
    // subscribe(responseObjj => {
    //   console.log(responseObjj.meals, "response");
    //   this.mealss = responseObjj.meals;
    };
   
    
    

  }
  

  
  

