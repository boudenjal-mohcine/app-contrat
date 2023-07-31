import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Contrat } from '../shared/models/contrat.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  standalone: true,
  imports: [MatIconModule, RouterLink, MatIconModule],
})
export class ShowComponent implements OnInit {
  card?: Contrat;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  loadContrats(id: number) {
    this.http.get<Contrat[]>('/assets/contrats.json').subscribe(
      (data) => {
        this.card = data.find((contrat) => contrat.id === id);
        console.log(this.card);
      },
      (error) => {
        console.error('Failed to load contrats:', error);
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      if (!isNaN(id)) {
        this.loadContrats(id);
        console.log(id);
      } else {
        console.error('Invalid ID parameter:', params['id']);
      }
    });
  }
}
