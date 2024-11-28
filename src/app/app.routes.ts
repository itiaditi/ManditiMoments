import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CollectionsComponent } from './collections/collections.component';

export const routes: Routes = [{
    path:'',
    component:HomeComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'collections',
    component:CollectionsComponent
}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Use RouterModule.forRoot to configure routes
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
