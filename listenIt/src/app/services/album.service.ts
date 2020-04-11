import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public url: string;

  constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
	}

  addAlbum(token, album: album){
    let data = {email: token, name: album.nombre, date: album.fecha};
    console.log(data);
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', token);

    return this._http.post(this.url+ 'createAlbum', data, {headers: headers});
  }

  /*deleteAlbum(token, id: string){
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', token);

		let options = new HttpHeaders({headers: headers});
		return this._http.delete(this.url+'album/'+id, options);
	}*/
}