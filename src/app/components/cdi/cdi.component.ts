import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cdi',
  templateUrl: './cdi.component.html',
  styleUrls: ['./cdi.component.scss'],
  standalone: true,
  imports: [CommonModule,NgIf,FormsModule,ReactiveFormsModule],
})
export class CdiComponent {

  @Input() logo: Boolean = true; 
  @Input() form?: FormGroup;

}
