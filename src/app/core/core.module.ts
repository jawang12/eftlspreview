import { DemoFormModalComponent } from './home/demo-form-modal-component';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { VideoModalComponent } from './home/video-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    VideoModalComponent,
    DemoFormModalComponent
  ],
  imports: [SharedModule, AppRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent, SidenavListComponent, AppRoutingModule],
  entryComponents: [VideoModalComponent, DemoFormModalComponent]
})
export class CoreModule {}
