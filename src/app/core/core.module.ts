import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SidenavListComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, SidenavListComponent]
})
export class CoreModule {}
