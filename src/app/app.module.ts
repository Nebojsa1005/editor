import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, CkEditorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
