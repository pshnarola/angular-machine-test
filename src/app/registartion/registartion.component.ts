import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  standard:any = 12;
  previousHistory:any = [];
  displayHistoryForm:boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      rollNumber: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )]],
      currentStandard: ['', Validators.required],
      previousHistory: this.fb.array([])
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  get history() {
    return this.registerForm.controls["previousHistory"] as FormArray;
  }

  onChange(standard) {
    const arr = <FormArray>this.registerForm.controls.previousHistory;
    arr.controls = [];
    if(standard > 1) {
      for (let index = 1; index < standard; index++) {
        const historyFormGroup = this.fb.group({
          standard: [index, Validators.required],
          remark:['', Validators.required],
          percentage:['', [Validators.required, Validators.min(0), Validators.max(100)]],
        });
    
       this.history.push(historyFormGroup);
      }

      this.displayHistoryForm = true;
    } else {
      this.displayHistoryForm = false;
      // this.previousHistory = [];
    }
    // setTimeout(() => {   
    // }, 500);

  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.router.navigate(["/detail"], { state: this.registerForm.value});
    }
  }

}
