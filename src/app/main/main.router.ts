import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children:[
        {
            path:'home',
            loadChildren:() => import('../pages/home-page/home.module').then(
                m => m.HomePageModule
            ),
        },
        {
            path:'profile',
            loadChildren:() => import('../pages/profile-page/profile.module').then(
                m => m.ProfilePageModule
            ),
        },
        {
            path:'friends',
            loadChildren:() => import('../pages/friends-page/friends.module').then(
                m => m.FriendsPageModule
            ),
        },
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter{}