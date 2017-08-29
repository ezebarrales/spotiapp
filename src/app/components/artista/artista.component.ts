import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any;
  topTracks:any[];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(params => params['id']).subscribe(response => {
      this.spotifyService.getArtista(response).subscribe(response => {
        this.artista = response;
      });
      this.spotifyService.getTopTracks(response).subscribe(response => {
        this.topTracks = response;
      });
    });
  }

}
