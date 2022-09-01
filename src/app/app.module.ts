import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, SafeHtmlPipe } from './app.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  imports: [BrowserModule, CKEditorModule],
  declarations: [AppComponent, SafeHtmlPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
