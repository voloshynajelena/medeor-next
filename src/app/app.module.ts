import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducer } from './store';

@NgModule({
    declarations: [AppComponent, LayoutComponent, SettingsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthorizationModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot(appEffects),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
