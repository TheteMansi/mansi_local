import { Component } from '@angular/core';
import { StoringDataService } from '../storingdata.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentdata:any;
  name:any="";
  valueFromChild:any;
  parentName = 'poonam';
  surName:any;
  constructor(public storingDataService : StoringDataService){

  }

  set(){
  this.storingDataService.setData = "poonam";
  }
  getData(value : any){
    console.log(value);
    this.valueFromChild = value;
    
  }
  surname(surName:any){
    console.log(surName);
    this.surName = surName;
  }



}
