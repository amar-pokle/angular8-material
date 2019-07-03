import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormControl,
  Validators,} from '@angular/forms'
  import { ToastrService } from "ngx-toastr";
  import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public backregister: boolean = false;
  public sending: boolean = false;
  public sendingData: any;

 
  
  public acceptTermsCheck: boolean = true;
  username = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ]);
  retypePassword = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ]);
  phone = new FormControl("", [Validators.required, Validators.maxLength(10)]);

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    //console.log("Registeration testing");
    
  }

  getErrorMessage(data) {
    //console.log(data);
    if (data == "username") {
      return this.username.hasError("required")
        ? "You must enter a username"
        : this.username.errors.minlength.actualLength < 3
        ? "User Name must have min 6 char & max 16 char  "
        : "";
    } else if (data == "email") {
      return this.email.hasError("required")
        ? "You must enter a email-id"
        : this.email.hasError("email")
        ? "Not a valid email"
        : "";
    } else if (data == "password") {
      //console.log(this.password.errors.minlength.actualLength);
      return this.password.hasError("required")
        ? "You must enter a password"
        : this.password.errors.minlength.actualLength < 9
        ? "password must be greater then or equal to 8 digit"
        : "";
    } else if (data == "phone") {
      //console.log(this.password.errors.minlength.actualLength);
      return this.phone.hasError("required")
        ? "You must enter a phone"
        : this.phone.errors.minlength.actualLength != 10
        ? "Phone Number must be equal to 10 digit"
        : "";
    }
  }

  termsCheck() {
    this.acceptTermsCheck = !this.acceptTermsCheck;
    return this.acceptTermsCheck;
  }

  // back() {
  //   var back = "back";
  //   this.save.emit(back);
  // }

  // addto() {
  //   this.router.navigate(["../user_agreement"]);
  // }

  registrer() {
    //console.log(this.phone.value.toString().length);
    if (this.username.value == "") {
      document.getElementById("txtUserName").focus();
      return this.getErrorMessage("username");
      //  this.toastr.error("User Name field is empty.");
      //console.log("User Name field is empty.");
      // return false;
    } else if (this.username.value.toString().length == 3) {
      // this.toastr.error("User Name must be greater then or equal to 3 digit.");

      this.toastr.error("User_name at least 6 digits  digit.");
      //console.log("User Name must be greater then or equal to 3 digit.");
      return false;
    } else if (this.email.value == "") {
      document.getElementById("txtEmail").focus();
      return this.getErrorMessage("email");
      //  this.toastr.error("Email field is empty.");
      //console.log("Email field is empty.");
      return false;
    } 
    // else if (!CommonFunctions.validateEmail(this.email.value)) {
    //   this.toastr.error("Please provide a valid email address");
    //   return false;
    // }
     else if (this.password.value == "") {
      document.getElementById("txtPass").focus();
      return this.getErrorMessage("password");

      //console.log("Password field is empty.");
      return false;
    }
    //  else if (
    //  // !CommonFunctions.validatePassword(this.password.value, this.toastr)
    // )
    //  {
    //   this.toastr.error("Password must be greater then or equal to 8 digit.");
    //   //console.log("Password must be greater then or equal to 8 digit.");
    //   return false;
    // } 
    else if (this.retypePassword.value == "") {
      document.getElementById("retype").focus();
      return this.getErrorMessage("password");
      // this.toastr.error("Retype Password field is empty.");
      //console.log("Retype Password field is empty.");
      return false;
    } else if (this.password.value != this.retypePassword.value) {
      this.toastr.error("Password and repassword field should be same.");
      //console.log("Password and Retype Password field should be same.");
      return false;
    } else if (this.phone.value == "") {
      document.getElementById("mobile").focus();
      return this.getErrorMessage("phone");
    } else if (this.phone.value.toString().length != 0) {
      //console.log(this.phone.value.toString().length);
      // if (!CommonFunctions.validateMobile(this.phone.value)) {
      //   this.toastr.error("Mobile Number contains 10 digits.");
      //   //console.log("Mobile Number only contains 10 digits.");
      //   return false;
      // }
    }

    if (this.acceptTermsCheck != false) {
      var data =
        '{"username":"' +
        this.username.value.trim() +
        '","emailId":"' +
        this.email.value.trim() +
        '","password":"' +
        this.password.value +
        '","repassword":"' +
        this.retypePassword.value +
        '","mobileNo":"' +
        this.phone.value +
        '"}';
        error => {
          console.log(error);
        }
    } else {
      this.toastr.error("Please accept Terms & Conditions to Login");
    }
  }

 
}
