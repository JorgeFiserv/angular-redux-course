import { NgModule, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { StoreModule } from '@ngrx/store';
import { TodoInput } from './components/todo-input/todo-input';
import { TodoList } from './components/todo-list/todo-list';
import { TodoItem } from './components/todo-item/todo-item';
import { TodoFooter } from './components/todo-footer/todo-footer';

@NgModule({
  declarations: [App, TodoInput, TodoList, TodoItem, TodoFooter],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: () => 0 }),
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
