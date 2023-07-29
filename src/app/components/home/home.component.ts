import { Component, OnInit } from '@angular/core';
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
  imports: [MatIconModule, CommonModule, FormsModule, CardComponent],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.filtredCards = this.allCards;
  }
  categories: string[] = ['Travail', 'Immobilier'];
  selectedCategory: string = 'Category';
  allCards: Contrat[] = [
    {
      category: 'Travail',
      type: 'Contrat',
      sousType: 'CDI',
      image: '/assets/screenshots/cdi.png',
      titre: 'Contrat de travail CDI',
    },

    {
      category: 'Travail',
      type: 'Contrat',
      sousType: 'CDI',
      image: '/assets/screenshots/cdi-sans-logo.png',
      titre: 'Contrat de travail CDI sans logo',
    },

    {
      category: 'Travail',
      type: 'Contrat',
      sousType: 'CDD',
      image: '/assets/screenshots/cdd.png',
      titre: 'Contrat de travail CDD',
    },

    {
      category: 'Travail',
      type: 'Contrat',
      sousType: 'CDD',
      image: '/assets/screenshots/cdd-sans-logo.png',
      titre: 'Contrat de travail CDD sans logo',
    },

    {
      category: 'Immobilier',
      type: 'Contrat',
      sousType: 'Location',
      image: '/assets/screenshots/location.png',
      titre: 'Contrat de Location',
    },

    {
      category: 'Travail',
      type: 'Attestation',
      sousType: 'Attestation',
      image: '/assets/screenshots/attestation.png',
      titre: 'Attestation de travail',
    },
  ];
  filtredCards: Contrat[] = [];
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
    this.filtredCards = this.allCards.filter(
      (card) => card.category === this.selectedCategory
    );
  }

  typeSelected() {
    this.sousTypes = []; // Reset the sousTypes when a new type is selected
    this.selectedSousType = 'Sous Type';

    if (
      this.selectedType === 'Contrat' &&
      this.selectedCategory === 'Travail'
    ) {
      this.sousTypes = ['CDD', 'CDI'];
    } else if (this.selectedType === 'Attestation') {
      this.sousTypes = ['Attestation'];
      this.selectedSousType = 'Attestation';
    } else if (
      this.selectedType === 'Contrat' &&
      this.selectedCategory === 'Immobilier'
    ) {
      this.sousTypes = ['Location'];
    }
    this.filtredCards = this.allCards.filter(
      (card) =>
        card.category === this.selectedCategory &&
        card.type === this.selectedType
    );
  }

  sousTypeSelected() {
    this.filtredCards = this.allCards.filter(
      (card) =>
        card.category === this.selectedCategory &&
        card.type === this.selectedType &&
        card.sousType === this.selectedSousType
    );
  }
}
