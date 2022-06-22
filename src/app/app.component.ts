import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showMenu: boolean = false;
  title = 'appLogin';
  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    this.loginService.currentUser.subscribe(user=>{
      if(user.email !== ''){
        this.showMenu = true;
      }else{
        this.showMenu = false;

      }
    })
    
  }
}
