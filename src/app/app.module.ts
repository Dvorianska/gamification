import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './user/header/header/header.component';
import { SidebarComponent } from './user/sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './user/dashbord/dashboard/dashboard.component';
import { BadgesComponent } from './user/dashbord/dashboard/badges/badges/badges.component';
import { ChallangesComponent } from './user/dashbord/dashboard/challanges/challanges/challanges.component';
import { ExoftAchievmentComponent } from './user/dashbord/dashboard/exoft-achievment/exoft-achievment/exoft-achievment.component';
import { PAchievmentsComponent } from './user/dashbord/dashboard/p-achievments/p-achievments/p-achievments.component';
import { ThankyouComponent } from './user/dashbord/dashboard/thankyou/thankyou/thankyou.component';
import { TopchartComponent } from './user/dashbord/dashboard/topchart/topchart/topchart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WelcomeComponent } from './user/dashbord/dashboard/welcome/welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    BadgesComponent,
    ChallangesComponent,
    ExoftAchievmentComponent,
    PAchievmentsComponent,
    ThankyouComponent,
    TopchartComponent,
    WelcomeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
