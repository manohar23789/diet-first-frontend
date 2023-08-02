import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public mystudent:Student=new Student()
  stuname:string="";
  stuaddress:string="";
  pincode:string="";
  stucourse:string="";
  stuemail :string="";
  stuSubmitt(){
    console.log("clicked buttin");
    console.log(this.mystudent);
        let res = this.http.post(
          "http://localhost:1234/stu/add",
           this.mystudent,
           {responseType:'text' as 'json'}
        );

        res.subscribe(
           data=>{

           }
        )
  }

}
