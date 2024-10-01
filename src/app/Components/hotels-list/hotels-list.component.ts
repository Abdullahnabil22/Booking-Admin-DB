import { Component } from '@angular/core';
import { HostApiService } from '../../Services/host-api.service';


@Component({
  selector: 'app-hotels-list',
  standalone: true,
  imports: [],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.css'
})
export class HotelsListComponent {
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
        this.Host = this.Host.filter(host => host.id == id);
        console.log('is deleted');
      },
      
      error => {
        console.error( error);
      }
    );
  }


}

