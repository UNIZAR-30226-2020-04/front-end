import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { podcast } from '../models/podcast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  public url: string;
  public podcast: podcast;

  constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
  }

  createPodcast(email,titulo): Observable<any>{
    let data = {user: email, podcast: titulo};
    console.log(email,titulo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.url + 'createPodcast',data, {headers: headers});
  } 

  seguir(token,podcast){
    let data = {email: token, name: podcast};
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+ 'seguirPodcast', data, {headers: headers});
  }
  
  dejarSeguir(token,podcast){
    let data = {email: token, name: podcast};
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+ 'dejarSeguirPodcast', data, {headers: headers});
	}

  seguido(token,podcast){
    let data = {email: token, name: podcast};
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+ 'seguidoPodcast', data, {headers: headers});
  }

  getPodcast(){
    let podcast = JSON.parse(localStorage.getItem('verPodcast'));
    if (podcast != "undefined") {
        this.podcast = podcast;
    } else {
        this.podcast = null;
    }
    return this.podcast;
  }

  getCapitulos(token,podcast) : Observable<any> {
    let data = {user: token, podcast: podcast};
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'podcast/'+ token, {headers: headers});
	}
  
  getPodcasts(token) : Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.url+'getPodcastsByUser', JSON.stringify(token), {headers: headers});
	}

  getPodcastsBiblio(token) : Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'podcastBiblio/'+ token, {headers: headers});
  }
  
  addPodcast(token, podcast: podcast){
    let data = {email: token, name: podcast.nombre, date: podcast.fecha};
    console.log(data);
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this._http.post(this.url+ 'createPodcast', data, {headers: headers});
  }

  deletePodcast(token, podcast){
    let data = {user: token, idpodcast: JSON.stringify(podcast)};
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this._http.post(this.url+'deletePodcast', data, {headers: headers});
	}
}