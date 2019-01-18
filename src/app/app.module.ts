import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent, BlogComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
