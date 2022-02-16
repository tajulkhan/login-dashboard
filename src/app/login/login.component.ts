import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  password ='';
  constructor(private router: Router) { }

  onSubmit(myFrom:NgForm){
    console.log(myFrom);
    
  }
  ngOnInit(): void {
  //   (function hello() {
  //     console.log('Hello!!!');
  // })()


}
goToLogin(): void{
  this.router.navigate(['/dashboard']);
}

saveData(val: any) {
  const temp = {
    username: this.name,
    password:this.password
  }
  
  window.sessionStorage.setItem('loginData', JSON.stringify(temp))
  console.log(temp)
  this.goToLogin();
}

}
