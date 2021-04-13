import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginContainerComponent } from 'src/app/_containers/login-container/login-container.component';


@NgModule({
    declarations: [
        LoginComponent,
        LoginContainerComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }
