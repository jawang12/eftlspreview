import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesTaxComponent } from './features/sales-tax/sales-tax.component';
import { TaxReturnsComponent } from './features/tax-returns/tax-returns.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, SalesTaxComponent, TaxReturnsComponent, BlogComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
