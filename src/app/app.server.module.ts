import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';
export const coreRoutes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule,
    RouterModule.forRoot(coreRoutes)
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent]
})
export class AppServerModule {}
