import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class studentdataservice {

  //reusablity of code
  studentData: any;
  data: { admin: { name: string; age: number; mob: number; }[]; statusCode: number; massage: string; } | undefined;

  constructor() { }

  test(a: number, b: number) {
    return a * b; //40 lines of code
  }
}
