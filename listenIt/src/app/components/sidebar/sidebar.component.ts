import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
 
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(){
      localStorage.clear();
      this._router.navigate(['/Login']);
  }
}

