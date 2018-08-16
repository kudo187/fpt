import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../admin';
import { AdminService } from '../../../shared_service/admin.service';
import { Router } from '../../../../../node_modules/@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  username = "";
  password = "";
  private admins: Admin[];

  constructor(private _adminService: AdminService, private router:Router) { }

  ngOnInit() {

    $(document).ready(function () {
      var formInputs = $('input[type="text"],input[type="password"]');
      formInputs.focus(function () {
        $(this).parent().children('p.formLabel').addClass('formTop');
        $('div#formWrapper').addClass('darken-bg');
        $('div.logo').addClass('logo-active');
      });
      formInputs.focusout(function () {
        if ($.trim($(this).val()).length == 0) {
          $(this).parent().children('p.formLabel').removeClass('formTop');
        }
        $('div#formWrapper').removeClass('darken-bg');
        $('div.logo').removeClass('logo-active');
      });
      $('p.formLabel').click(function () {
        $(this).parent().children('.form-style').focus();
      });
    });


    this._adminService.getAllAdmins().subscribe((admins) => {
      this.admins = admins;
    }, (error) => {
      console.log(error);
    })
  }

  loginAdmin(e){
    e.preventDefault();
    console.log(e);
    
    console.log(this.admins);
    this.username= e.target.elements[0].value;
    this.password= e.target.elements[1].value;
    for (let i = 0; i < this.admins.length - 1; i++) {
      const element = this.admins[i];
      if (this.username == element.username && this.password == element.password) {
        this.router.navigate(['admin/dashboard']);
      }else{
        alert("User name or password invalid !!!!");
        this.password = "";
      }
    }
    
  }



}
