import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CardComponent } from '../card/card.component';
import { Contrat } from '../shared/models/contrat.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatIconModule, CommonModule,FormsModule,CardComponent],
})
export class HomeComponent {
  categories: string[] = ['Travail', 'Immobilier'];
  selectedCategory: string = 'Category';
  
  card1:Contrat={
    category:'Travail',
    type:'Contrat',
    sousType:'CDD',
    image:'/assets/screenshots/cdi.png',
    titre:'Contrat de travail CDI',
  }

  card2:Contrat={
    category:'Travail',
    type:'Contrat',
    sousType:'CDD',
    image:'/assets/screenshots/cdi-sans-logo.png',
    titre:'Contrat de travail CDI sans logo',
  }

  card3:Contrat={
    category:'Travail',
    type:'Contrat',
    sousType:'CDD',
    image:'/assets/screenshots/cdd.png',
    titre:'Contrat de travail CDD',
  }

  card4:Contrat={
    category:'Travail',
    type:'Contrat',
    sousType:'CDD',
    image:'/assets/screenshots/cdd-sans-logo.png',
    titre:'Contrat de travail CDD sans logo',
  }

  types: string[] = [];
  selectedType: string = 'Type';

  sousTypes: string[] = [];
  selectedSousType: string = 'Sous Type';

  categorySelected() {
    this.types = [];
    this.selectedType = 'Type';
    
    if (this.selectedCategory === 'Travail') {
      this.types = ['Contrat', 'Attestation'];
    } else if (this.selectedCategory === 'Immobilier') {
      this.types = ['Contrat'];
    }
  }

  typeSelected() {
    this.sousTypes = []; // Reset the sousTypes when a new type is selected
    this.selectedSousType = 'Sous Type';

    if (this.selectedType === 'Contrat' && this.selectedCategory==="Travail") {
      this.sousTypes = ['CDD', 'CDI'];
    } else if (this.selectedType === 'Attestation') {
      // Add options for Attestation
    } else if (this.selectedType === 'Contrat' && this.selectedCategory==="Immobilier") {
      this.sousTypes = ['Location'];
    }
  }

  sousTypeSelected() {
    
  }
}
