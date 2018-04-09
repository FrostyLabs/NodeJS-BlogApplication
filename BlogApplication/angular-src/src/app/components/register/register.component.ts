import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private FlashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.FlashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 8000}); // 8 seconds in ms
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.FlashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 8000}); // 8 seconds in ms
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.FlashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 8000}); // 8 seconds in ms
        this.router.navigate(['/login']);
      } else {
        this.FlashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 8000}); // 8 seconds in ms
        this.router.navigate(['/register']);
      }
    });
  }
}
