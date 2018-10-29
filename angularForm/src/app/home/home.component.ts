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
  }



  loginForm = this.fb.group({
    uName :['',Validators.required],
    password : ['',Validators.required]
  });

  onLogin() {
    // alert("Ok");
    console.log(this.loginForm.value);
  }

}
