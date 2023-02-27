import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCardsComponent } from './componentes/home-cards/home-cards.component';
import { BarChartComponent } from './componentes/bar-chart/bar-chart.component';
import { LineChartComponent } from './componentes/line-chart/line-chart.component';
import { PaymentSubscriptionComponent } from './componentes/payment-subscription/payment-subscription.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeCardsComponent,
    BarChartComponent,
    LineChartComponent,
    PaymentSubscriptionComponent
  ],
  imports: [
  CommonModule,
    HomeRoutingModule,
    
  ],
  exports:[HomeCardsComponent, BarChartComponent, LineChartComponent, PaymentSubscriptionComponent]
})
export class HomeModule { }
