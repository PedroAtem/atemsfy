import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		public authService: AuthService
	) { }

	ngOnInit() {
		this.authService.auth();
	}

}