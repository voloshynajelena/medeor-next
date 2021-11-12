import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducer } from './store';
import { checkAuth } from 'src/app/authorization/store';
import { AppState } from 'src/app/store/app-state.interface';
import { selectAuthInfo } from 'src/app/authorization/store/auth.selectors';
import { skip, take } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AppComponent, LayoutComponent, SettingsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthorizationModule,
        MatIconModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot(appEffects)
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (store: Store<AppState>) => {
                return () => {
                    return new Promise((resolve) => {
                        store
                            .select(selectAuthInfo)
                            .pipe(skip(1), take(1))
                            .subscribe(() => {
                                resolve(true);
                            });

                        store.dispatch(checkAuth());
                    });
                };
            },
            deps: [Store],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
