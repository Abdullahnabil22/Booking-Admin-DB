import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ApprovedListComponent } from './Components/approved-list/approved-list.component';
import { ApartmentListComponent } from './Components/apartment-list/apartment-list.component';
import { VisitorsChartComponent } from './Components/visitors-chart/visitors-chart.component';
import { UsersListControlComponent } from './Components/users-list-control/users-list-control.component';
import { LoginComponent } from './Components/login/login.component';
import { EarningChartComponent } from './Components/earning-chart/earning-chart.component';
import { HotelsListComponent } from './Components/hotels-list/hotels-list.component';
import { DetailsComponent } from './Components/details/details.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'approved-list', component: ApprovedListComponent },
  { path: 'apartment-list', component: ApartmentListComponent },
  { path: 'earning-chart', component: EarningChartComponent },
  { path: 'hotels-list', component: HotelsListComponent },
  { path: 'users-list-control', component: UsersListControlComponent },
  { path: 'visitors-chart', component: VisitorsChartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent },

];
