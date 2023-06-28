import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringDataService {
  userFullName : any;
  listOfUsers:any
  studentData: any;
  setData: string | undefined;
  whiteSpaceValidator: any | string;
  constructor() { }
}
