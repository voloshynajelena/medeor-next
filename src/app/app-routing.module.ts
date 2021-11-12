import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './authorization/auth.guard';
import { NotAuthGuard } from 'src/app/authorization/not-auth.guard';
import { RegistrationComponent } from 'src/app/authorization/registration/registration.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full',
    },
    {
        path: 'login',
        canActivate: [NotAuthGuard],
        component: LoginComponent,
    },
    {
        path: 'registration',
        canActivate: [NotAuthGuard],
        component: RegistrationComponent,
    },
    {
        path: 'app',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'settings',
                component: SettingsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
