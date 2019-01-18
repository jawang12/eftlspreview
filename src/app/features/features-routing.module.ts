import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesTaxComponent } from './sales-tax/sales-tax.component';
import { TaxReturnsComponent } from './tax-returns/tax-returns.component';
import { LookbackServicesComponent } from './lookback-services/lookback-services.component';
import { GovernmentNoticesComponent } from './government-notices/government-notices.component';
import { BookkeepingComponent } from './bookkeeping/bookkeeping.component';
import { PayrollTaxComponent } from './payroll-tax/payroll-tax.component';

const routes: Routes = [
  {
    path: 'sales-tax',
    component: SalesTaxComponent
  },
  {
    path: 'tax-returns',
    component: TaxReturnsComponent
  },
  {
    path: 'payroll-tax',
    component: PayrollTaxComponent
  },
  {
    path: 'bookkeeping',
    component: BookkeepingComponent
  },
  {
    path: 'government-notices',
    component: GovernmentNoticesComponent
  },
  {
    path: 'lookback-services',
    component: LookbackServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
