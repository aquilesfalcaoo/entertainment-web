import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private tokenService: TokenService, private router: Router) {}

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['/login']);
  }
}
