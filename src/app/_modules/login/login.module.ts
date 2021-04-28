import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginContainerComponent } from 'src/app/_containers/login-container/login-container.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        LoginComponent,
        LoginContainerComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
