import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-motorbyke',
  templateUrl: './motorbyke.component.html',
  styleUrls: ['./motorbyke.component.scss']
})
export class MotorbykeComponent implements OnInit {
  loginService: any;
  loginForm: any;
  router: any;
  formBuilder: any;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    
  }
  public doLogin(): void {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: { status: boolean; }) => { 
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
