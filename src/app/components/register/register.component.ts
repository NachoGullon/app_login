import { RegisterService } from './../../services/register.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder, private router: Router, private registerService: RegisterService) { }


  ngOnInit(): void {
    this.createForm();
    
  }
  public doRegister(): void {
    if(this.registerForm.value.password ===  this.registerForm.value.passwordRepeat){
      this.registerService.register(this.registerForm.value.email , this.registerForm.value.password).subscribe(res=>{
        this.router.navigate(['/home']);
      });
      
    }
  }
  private createForm(): void{
    this.registerForm =this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(5)]],
      passwordRepeat:  ['',[Validators.required,Validators.minLength(5)]],
    });
  }
 
}

