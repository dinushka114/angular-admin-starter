import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GrammerLessonService{

    private grammerLessonUrl = "http://localhost:3000/api/admin/articles";

    constructor(private http:HttpClient){}

    // getGrammerLessons(){
    //     this.http.get(this.grammerLessonUrl)
    //     .subscribe(res=>{
    //         console.log(res);
    //     })
    // }
}