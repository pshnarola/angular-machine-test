import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdeatil',
  templateUrl: './studentdeatil.component.html',
  styleUrls: ['./studentdeatil.component.css']
})
export class StudentdeatilComponent implements OnInit {
  data:any;
  constructor(private router: Router) { 
    if(this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state;
    } else {
      this.router.navigate(["/registartion"])
    }
  }

  ngOnInit() {
    console.log(': ===> this.data', this.data);
  }

}
