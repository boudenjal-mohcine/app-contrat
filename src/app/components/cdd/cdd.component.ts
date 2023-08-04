import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cdd',
  templateUrl: './cdd.component.html',
  styleUrls: ['./cdd.component.scss'],
  standalone: true,
  imports: [CommonModule,NgIf],
})
export class CddComponent {

  @Input() logo: Boolean = true; 
  @Input() form?: FormGroup;


}
