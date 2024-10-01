import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostApiService {

  constructor(private httpclient :HttpClient) { }

  getAllHosts():Observable<Host[]>{
    return this.httpclient.get<Host[]>('http://localhost:3000/host')
  }
  deleteHost(id:number): Observable<any>{
    return this.httpclient.delete(`http://localhost:3000/host/${id}`)
  }

}
