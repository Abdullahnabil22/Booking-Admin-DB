import { Component } from '@angular/core';
import { HostApiService } from '../../Services/host-api.service';

@Component({
  selector: 'app-approved-list',
  standalone: true,
  imports: [],
  templateUrl: './approved-list.component.html',
  styleUrl: './approved-list.component.css'
})
export class ApprovedListComponent {


  constructor(private HostApi:HostApiService) { }

  Host:any[]=[]

  ngOnInit():void{

    this.HostApi.getAllHosts().subscribe({
      next:(host)=>{
        this.Host=host
       console.log( this.Host=host);


      },
      error:(err)=>{
        console.log(err);

      }


    })

  
  }
  deleteHost(id: number): void {
    this.HostApi.deleteHost(id).subscribe(
      response => {
        // إزالة المضيف من الواجهة بعد نجاح الحذف
        this.Host = this.Host.filter(host => host.id !== id);
        console.log('is deleted');
      },
      error => {
        console.error( error);
      }
    );
  }

}
