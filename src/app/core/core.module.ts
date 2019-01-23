import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { VideoModalComponent } from './home/video-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    VideoModalComponent
  ],
  imports: [SharedModule, AppRoutingModule],
  exports: [HeaderComponent, SidenavListComponent, AppRoutingModule],
  entryComponents: [VideoModalComponent]
})
export class CoreModule {}
