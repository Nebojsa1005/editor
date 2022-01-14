import { Component, OnInit } from '@angular/core';
import * as customEditor from './build/ckeditor'




@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {

  constructor() {}
    
  public ckEditor = customEditor
  config: any
  


  ngOnInit() {
   
  }

}
