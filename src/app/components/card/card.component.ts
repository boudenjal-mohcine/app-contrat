import { Component, Input } from '@angular/core';
import { Contrat } from '../shared/models/contrat.model';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports:[RouterLink,NgIf]


})
export class CardComponent {
  @Input() card: Contrat | undefined; 
  
  isHovered: boolean = false; 

}
