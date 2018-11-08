import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute ,ParamMap} from '@angular/router' ;
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute , private fb : FormBuilder ) { }
  
  ngOnInit() {
    console.log("init");
    this.loginForm = new FormGroup({
      uName :new FormControl('',[Validators.required,Validators.minLength(4)]),
      password : new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }

  get uName() { return this.loginForm.get('uName'); }
  get password() { return this.loginForm.get('password'); }


  // loginForm = this.fb.group({
  //   uName :['',Validators.required],
  //   password : ['',Validators.required]
  // });

  loginForm = new FormGroup({
    uName :new FormControl('',[Validators.required,Validators.minLength(4)]),
    password : new FormControl('',[Validators.required])
  });

  //get uName() { return this.loginForm.get('uName'); }

  formControl = new FormGroup({
    firstName : new FormControl('edrer',Validators.required)
  });

  onLogin() {
   alert(JSON.stringify(this.loginForm.value)); 
  }

}
