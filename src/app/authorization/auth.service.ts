import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // ########################################

    private static readonly LOGIN = 'https://api-medeor.herokuapp.com/login';

    // ########################################

    public static AUTHENTICATION_TOKEN_ITEM = '_authentication__token_';

    // ########################################

    constructor(private httpClient: HttpClient) {}

    // ########################################

    public signIn(login: string, pass: string): Observable<any> {
        return this.httpClient.get<any>(
            AuthService.LOGIN,
            { params: { login, pass } }
        );
    }

    // ########################################
}
