import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgbNavItem, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    TranslateModule,
    NgbNavModule
  ],
  providers: [
    NgbNavItem 
  ]
})
export class HomeModule { }
