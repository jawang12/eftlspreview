import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, BlogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
