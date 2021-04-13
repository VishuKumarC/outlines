import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login',
        loadChildren: () => import('./_modules/login/login.module').then(m => m.LoginModule)
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            {
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
