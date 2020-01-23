import { Component, OnInit } from '@angular/core';
import {FlagService} from '../flag.service';

@Component({
  selector: 'app-flag-com',
  templateUrl: './flag-com.component.html',
  styleUrls: ['./flag-com.component.css']
})
export class FlagComComponent implements OnInit {
  selectedValue;
  selCounList;
  selectedValueCountry: any = [];
  expanded = false;
  newText = false;
  constructor(private flagService: FlagService) {  }
  events = this.flagService.getData();
  ngOnInit() {
  console.log(this.events);
  }

  onSelect(countryName) {
    this.newText = false;
    this.selectedValue = countryName;
    this.selCounList = null;
    for(let i = 0; i < this.events.length; i++) {
      if (this.events[i].continent === countryName) {
        this.selCounList = this.events[i].countries;
      }
    }
  }

  onSelectCon(countryNameFlag, checkVal){
    if(checkVal){

      this.selectedValueCountry = this.selectedValueCountry.concat(countryNameFlag)
    }
    if(!checkVal){
      this.selectedValueCountry = this.selectedValueCountry.filter(item => item !== countryNameFlag);
     }
  }

showCheckboxes() {
  let checkboxes = document.getElementById("checkboxes");
  if (!this.expanded) {
    checkboxes.style.display = "block";
    this.expanded = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded = false;
  }
}
reset(){
  this.selectedValueCountry = [];
  this.selectedValue = '';
  this.newText = true;
}
}
