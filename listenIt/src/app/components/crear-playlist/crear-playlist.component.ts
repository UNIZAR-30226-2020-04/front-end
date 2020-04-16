import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FileService } from '../../services/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-playlist',
  templateUrl: './crear-playlist.component.html'
})
export class CrearPlaylistComponent implements OnInit {

  public title: string;
  public status;

  public tituloPlaylist;
  public email;

  constructor(
  	private userService: UserService,
  	private fileService: FileService,
  	private route: ActivatedRoute,
  	private router: Router
  	) {

    this.title = 'Crear playlist';
  }

  ngOnInit(): void {
  	this.email = this.userService.getToken();
  }

  newPlaylist() {
    this.fileService.createPlaylist(this.email,this.tituloPlaylist).subscribe(
      response => {
        if (response) {
        	this.status = "success";
        }
        else {
        	this.status = "error";
        }
      },
      error => {
          console.log(<any> error);
          var errorMessage = <any> error;
          if (errorMessage != null) {
              this.status = 'error';
          }
      }
    );
  }

}