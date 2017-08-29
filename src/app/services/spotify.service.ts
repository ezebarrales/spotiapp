import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private artistas:any[] = [];

  private urlBusqueda:string = "https://api.spotify.com/v1/search";
  private urlArtista:string = "https://api.spotify.com/v1/artists";
  private urlTopTracks:string = "https://api.spotify.com/v1/artists";

  private key:string = "BQASmhWsBKfeF9SRO6jg_Wf1ssdFCxaNHcOrHoxydmpRAtbZihEbe-CnV3JT1f7sFMYS_Uomrn3fFpbmV91LSg";

  constructor(private http:Http) { }

  getArtists(termino:string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer "+this.key);
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda+query;

    return this.http.get(url, { headers }).map(response => {
      this.artistas = response.json().artists.items;
      return this.artistas;
    });
  }

  getArtista(id:string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer "+this.key);
    let url = `${this.urlArtista}/${id}`;
    return this.http.get(url, { headers }).map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  getTopTracks(id:string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer "+this.key);
    let url = `${this.urlArtista}/${id}/top-tracks?country=AR`;
    return this.http.get(url, { headers }).map(response => {
      console.log(response.json().tracks);
      return response.json().tracks;
    });
  }

}
