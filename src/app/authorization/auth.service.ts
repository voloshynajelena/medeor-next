import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { UserRestInterface } from './user-rest.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // ########################################

    private static readonly LOGIN = '/login';
    private static readonly USER = '/user';

    // ########################################

    public static AUTHENTICATION_TOKEN = '_authentication__token_';
    public static USER_ID = '_user__id_';

    // ########################################

    constructor(private httpClient: HttpClient) {}

    // ########################################

    public signIn(login: string, pass: string): Observable<{ token: string; userId: string; error?: string }> {
        return this.httpClient.get<{ token: string; userId: string }>(AuthService.LOGIN, {
            params: { login, pass }
        });
    }

    public register(userData: any): Observable<UserRestInterface> {
        return this.httpClient.post<UserRestInterface>(AuthService.USER, userData);
    }

    // ########################################

    public getUserData(): Observable<UserModel> {
        const id: any = localStorage.getItem(AuthService.USER_ID);

        return this.httpClient
            .get<UserRestInterface>(AuthService.USER, {
                params: { id }
            })
            .pipe(
                map((user) => {
                    return new UserModel(
                        user.id,
                        user.name,
                        user.surname,
                        user.email,
                        user.phone,
                        user.location,
                        user.specialties,
                        user.photo
                    );
                })
            );
    }

    // ########################################
}
