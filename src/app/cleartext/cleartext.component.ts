import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cleartext',
  templateUrl: './cleartext.component.html',
  styleUrls: ['./cleartext.component.css']
})


export class CleartextComponent{

  @Input() placeholder = "";
  
  @Input() value = '';
}
