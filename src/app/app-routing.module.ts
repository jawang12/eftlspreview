import { BlogComponent } from './blog/blog.component';
import { TaxReturnsComponent } from './features/tax-returns/tax-returns.component';
import { SalesTaxComponent } from './features/sales-tax/sales-tax.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sales-tax',
    component: SalesTaxComponent
  },
  {
    path: 'tax-returns',
    component: TaxReturnsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
