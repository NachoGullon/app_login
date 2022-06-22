import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }


  ngOnInit(): void {
    this.createForm();
    
  }
  public doLogin(): void {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => { 
      if(res.status === false){
      }else{
        this.router.navigate(['/home']);
      }
    });
   
  }
  private createForm(): void{
    this.loginForm =this.formBuilder.group({
      modelo: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      color: [null]
    });
  }
 
}

