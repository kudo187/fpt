import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../shared_service/admin.service';
import { Admin } from '../../../admin';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  private admins:Admin[];
  constructor(private _adminService:AdminService) { }

  ngOnInit() {
    this._adminService.getAllAdmins().subscribe((admins)=>{
      this.admins = admins; 
    },(error)=>{
      console.log(error);
    })
  }

  // deleteAdmin(admin){
  //     this._adminService.deleteAdmin(admin.id_ad_user).subscribe((data)=>{
  //       this.admins.splice(this.admins.indexOf(admin),1);
  //     },(error)=>{
  //       console.log(error);
  //     })
  // }

}
