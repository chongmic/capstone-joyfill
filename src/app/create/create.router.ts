import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage } from './create.page';

const routes: Routes = [
  {
    path: 'create',
    component: CreatePage,
    children:[
        {
            path:'complete',
            loadChildren:() => import('../pages/complete-page/complete.module').then(
                m => m.CompletePageModule
            ),
        },
        {
            path:'select',
            loadChildren:() => import('../pages/select-page/select.module').then(
                m => m.SelectPageModule
            ),
        }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRouter{}