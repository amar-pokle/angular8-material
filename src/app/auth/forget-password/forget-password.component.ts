import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, PatternValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public sendingData: any;
  public sending: boolean = false;

  // @Input('forgotData') set forgotData(fromIdeaCreateComponent) {
  //   if (typeof (fromIdeaCreateComponent) == "string") {
  //     this.sendingData = fromIdeaCreateComponent;
  //   }
  // }

//  @Output() save = new EventEmitter();

  email = new FormControl('', [Validators.email])
  /*  snack_successfull = 'The Reset Password link has been sent to your Registered email ID. Please use the link to reset your password and login.';
   snack_unsuccessfull = "Hmm... that email doesn't seem to be registered with us. Please use your registered email ID. Or register with us now!"; */


  constructor( public router: Router, private toastr: ToastrService) { }

  /*  openSnackBar(message: string, action?: string) {
     console.log(action);
     let config = new MatSnackBarConfig();
     if (message == this.snack_successfull) {
       config.panelClass = ['custom-class'];
     } else if (message == this.snack_unsuccessfull) {
       config.panelClass = ['custom-class-un'];
     }
     this.snackBar.open(message, action ? 'Dismiss' : undefined, config);
   } */

  ngOnInit() {
    // $(document).ready(function () {
    //   $("#body").removeClass();
    //   $("#body").addClass("pencil_cup");
    // });
  }

  getErrorMessage(data) {
    //console.log(data);
    if (data == 'email') {
      return this.email.hasError('required') ? 'You must enter a email' :
        this.email.hasError('email') ? 'Not a valid email' :
          '';
    }
  }

  forgot_password() {
    var email = document.getElementById('txtEmail');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (this.email.value == "") {
      document.getElementById('textId').focus();
      return this.getErrorMessage('email');
      this.toastr.error('Email required');
    }
     else if (!filter.test(this.email.value)) {
      this.toastr.error('Please provide a valid email address');
      return false;
    }
  //   this.common.userAction[0]['click'] = 'forget_password-button';

  //   //testuser4@solutionsline.com
  //   var data = '{"email":"' + this.email.value.trim() + '"}';
    //console.log(data);
    // this.authService.forgot_password(data)
    //   .subscribe((res) => {
    //     if (res == 'email_send') {
    //       if (this.sendingData == 'fromIdeacomponent') {
    //         this.router.navigate(['../idea/new']);
    //         this.toastr.success('The Reset Password link has been sent to your Registered email ID. Please use the link to reset your password and login.');
    //         this.sending = true;
    //         this.save.emit(this.sending);
    //         return false;
    //       }
      //     this.toastr.success('The Reset Password link has been sent to your Registered email ID. Please use the link to reset your password and login.');
      //     this.router.navigate(['./profile/change-password']);
      //   } else if (res == 'invalid_token') {
      //     this.toastr.error('Invalid Token');
      //   } else if (res == 'email_not_found') {
      //     this.toastr.error('Email Field is compulsory');
      //   } else if (res == 'email_not_registered') {
      //     this.toastr.error('Email not registered');
      //   } else if (res == 'invalied_email_id') {
      //     this.toastr.error('Invalid Email ID');
      //   } else if (res == 'ERROR') {
      //     this.toastr.error('Error');
      //   }
      // }, (error) => {
      //   console.log(error);
      // });
  }


  // back_to_login() {
  //   this.router.navigate(['./auth/login']);
  // }

}

