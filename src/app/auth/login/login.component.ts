import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
//import { CommonVariables } from '../../variable.common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public lat: any;
  public lng: any;
  public locationName: any;
  acceptTermsCheck: boolean = true;
  data: any;
  public sending: boolean = false;
  public sendingData: any;
  public forgotLinkHide: boolean = true;


  // @Input('addImage') set addImage(fromIdeaCreateComponent) {
  //   if (typeof (fromIdeaCreateComponent) == "string") {
  //     this.sendingData = fromIdeaCreateComponent;
  //     this.forgotLinkHide = false;
  //   }
  // }



  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(
    
    private router: Router,
    
  ) { }


  ngOnInit() {
    // $(document).ready(function () {
    //   $("#body").removeClass();
    //   $("#body").addClass("pencil_cup");
    // });
    ////////////////////////////////////////////////////////////////////////////
    // this.storage.get_storageData().then((res) => {
    //   if (CommonFunctions.findKeyIndex(res, 'userId') != undefined) {
    //     this.common.userId = res[CommonFunctions.findKeyIndex(res, 'userId')]['userId'];
    //     this.router.navigate(['/home']);
    //   }
    // })
  }

  getErrorMessage(data) {
    //console.log(data);
    if (data == 'user') {
      return this.username.hasError('required') ? 'You must enter a email' :
        this.username.hasError('email') ? 'Not a valid email' :
          this.username.errors.required ? 'Username is required' :
            '';
    } else if (data == 'pass') {
      //console.log(this.password.errors.minlength.actualLength);
      return this.password.hasError('required') ? 'You must enter a password' :
        (this.password.errors.minlength.actualLength < 9) ? 'password must be greater then or equal to 8 digit' :
          this.password.errors.required ? 'Password is required' :
            '';
    }
  }

  termsCheck() {
    this.acceptTermsCheck = !this.acceptTermsCheck;
    return this.acceptTermsCheck;
  }
  addme() {
    this.router.navigate(['../user_agreement']);
  }

  // forgotClicked() {
  //   var fromForgot = "fromforgot";
  //   this.save.emit(fromForgot);
  // }

  // Back() {
  //   var back = "back";
  //   this.save.emit(back);
  // }

  login() {

   // this.common.userAction[0]['click'] = 'login-button';
    //console.log(this.common.userAction[0]);    

    var email = document.getElementById('txtEmail');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.username.value == "") {
      document.getElementById('txtEmail').focus();
      return this.getErrorMessage('user');
    } else if (!filter.test(this.username.value)) {
      //alert('Please provide a valid User Name address');
     // this.toastr.error('Please provide a valid User Name address');
      return false;
    } else if (this.password.value == "") {
      document.getElementById('txtPass').focus();
      return this.getErrorMessage('pass');
    }

    // if (this.acceptTermsCheck != false) {
    //   this.storage.get_storageData().then((res) => {
    //     //this.common.getUserTrackingData(window.location.href, '');
    //     //testuser4@solutionsline.com
    //     var data = '{"deviceId" : "' + res[CommonFunctions.findKeyIndex(res, 'deviceId')]['deviceId'] +
    //       '","userName":"' + this.username.value.trim() +
    //       '","password":"' + this.password.value.trim() +
    //       '"}';
        //console.log(data);
        //console.log(this.acceptTermsCheck);

//         this.authService.login(data)
//           .subscribe((res) => {
//             if (this.storage.checkArray(res)) {
//               console.log("Login response: ", res);
//               this.storage.check_add_storageData({ 'userId': res['userId'] }, 'userId');
//               this.storage.updateItems({ 'rollId': res['rollId'] }, 'rollId');
//               this.common.userId = res['userId'];
//               this.router.navigate(['../home']);
//               //this.toastr.success('Login  Successful');
//               //console.log('Outside Input');
//               if (this.sendingData == 'fromIdeacomponent') {
//                 // console.log('Inside Input');
//                 this.sending = true;
//                 this.router.navigate(['../idea/new']);
//                 this.save.emit(this.sending);
//               }
//             } else {
//               if (res == 'invalid_token') {
//             //    this.toastr.error('Invalid Token');

//               } else if (res == 'username_not_found') {
//           //      this.toastr.error('userName field is compulsory');
//               } else if (res == 'password_not_found') {
//         //        this.toastr.error('Password field is compulsory');
//               } else if (res == 'deviceid_not_found') {
//       //          this.toastr.error('Device Id not found');
//               } else if (res == 'user_not_found') {
//     //            this.toastr.error('User not exists');
//               } else if (res == 'login_failed') {
//   //              this.toastr.error('Login Failed');
//               }
//             }
//           }, (error) => {
//             console.log(error);
//           })
//       })
//     } else {
// //      this.toastr.error('Please accept Terms & Conditions to Login');
//     }
  }



}

