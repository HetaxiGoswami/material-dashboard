import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
