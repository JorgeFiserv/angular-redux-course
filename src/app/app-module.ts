import { NgModule, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Filho } from './contador/filho/filho';
import { Nieto } from './contador/nieto/nieto';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [App, Filho, Nieto],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      connectInZone: true,
    }),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
