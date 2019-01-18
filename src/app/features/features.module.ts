import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';

import { TaxReturnsComponent } from './tax-returns/tax-returns.component';
import { PayrollTaxComponent } from './payroll-tax/payroll-tax.component';
import { SalesTaxComponent } from './sales-tax/sales-tax.component';
import { BookkeepingComponent } from './bookkeeping/bookkeeping.component';
import { LookbackServicesComponent } from './lookback-services/lookback-services.component';
import { GovernmentNoticesComponent } from './government-notices/government-notices.component';

@NgModule({
  declarations: [
    SalesTaxComponent,
    PayrollTaxComponent,
    TaxReturnsComponent,
    BookkeepingComponent,
    LookbackServicesComponent,
    GovernmentNoticesComponent
  ],
  imports: [SharedModule, FeaturesRoutingModule]
})
export class FeaturesModule {}
