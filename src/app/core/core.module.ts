import { EmailService } from './email.service';
import { DemoFormModalComponent } from './home/demo-form-modal-component';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { VideoModalComponent } from './home/video-modal.component';
import { AboutComponent } from './home/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    VideoModalComponent,
    DemoFormModalComponent,
    AboutComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, SidenavListComponent, AppRoutingModule],
  providers: [EmailService],
  entryComponents: [VideoModalComponent, DemoFormModalComponent]
})
export class CoreModule {}
