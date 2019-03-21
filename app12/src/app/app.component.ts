import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent 

{
 
  public cert_PRno:any;  
  public cert_CName:any;
  public cert_Seatno:any;
  public cert_examination:any;
 public cert_YOP:any;
  public cert_sububject:any;
  

  title = 'SecureCert Demo';

  constructor(private httpClient:HttpClient){  }


queryAllCerts()
{
  this.httpClient.get(`http://localhost:8000/cert`).subscribe
  (
   
    (data:any[]) => {
      if(data.length) {
      //  this.PRno = data[0].age;
        //this.found = true;
      }
    }
  
  )

}

querySpecificCert(){

  this.httpClient.get(`http://localhost:5555/cert/?Seat_no=${this.cert_Seatno}`).subscribe(
    (data:any[]) => {
      if(data.length) {
       console.log(data);
        
      }
    }
  

  )

}

recordCert()
{

  this.httpClient.post(`http://localhost:5555/cert`,{})
  
  .subscribe(
    (data:any) => {
      console.log(data);
    }
  )
}
 



transferCert()
{

}



}
