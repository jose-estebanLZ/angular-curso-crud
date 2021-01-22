import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {Band} from '../models/bandas-rock.models'

@Injectable({
  providedIn: 'root'
})
export class BandasRockService {

  constructor(private http: HttpClient) { }

  getSingleComputer(id: string){
    return this.http.get<Band>('https://super-rest.herokuapp.com/test/jesus/' + id)
  }

  getBands(): Observable<[Band]>{
    return this.http.get<[Band]>('https://super-rest.herokuapp.com/test/jesus/');
  }

  saveBand(data: Band){
    return this.http.post('https://super-rest.herokuapp.com/test/jesus/', data);
  }

  updateBand(id: string, data: Band){
    return this.http.put('https://super-rest.herokuapp.com/test/jesus/' + id, data);
  }

  deleteBand(id: string){
    return this.http.delete('https://super-rest.herokuapp.com/test/jesus/' + id)
  }
}
