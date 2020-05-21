import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticateService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    base_url: string;
    public authenticated;

    constructor(private router: Router, private authService: AuthenticateService) {}

    async canActivate() {
        console.log('Auth guard triggered.');

        // Check to see if a user has a valid token
        this.authenticated = await this.authService.isAuthenticated();
        if (this.authenticated) {
            // If they do, return true and allow the user to load app
            console.log('User logged in.');
            return true;
        }

        // If not, they redirect them to the login page
        // HAVE A SEPARATE LOGIN PAGE FOR JOYFILL
        console.log('Please log in');
        this.router.navigate(['']);
        return false;
    }


}