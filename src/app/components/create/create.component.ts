import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CddComponent } from '../cdd/cdd.component';
import { CdiComponent } from '../cdi/cdi.component';
import { LocationComponent } from '../location/location.component';
import { AttestationComponent } from '../attestation/attestation.component';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [
    CddComponent,
    CdiComponent,
    LocationComponent,
    AttestationComponent,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule
  ],
})
export class CreateComponent implements OnInit {
  contrat?: string;
  public cdiForm!: FormGroup;
  public cddForm!: FormGroup;
  public attestationForm!: FormGroup;
  public locationForm!: FormGroup;
  public choix = 0;
  imageSrc: string | ArrayBuffer | null = null;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contrat = String(params['contrat']);
      console.log(this.contrat);
    });
    

    this.cdiForm = new FormGroup({
      //info societe
      nom_societe: new FormControl(''),
      capitale: new FormControl(''),
      immatriculation: new FormControl(''),
      addresse: new FormControl(''),
      representant: new FormControl(''),
      qualite: new FormControl(''),
      //info employe
      nom_employe: new FormControl(''),
      prenom_employe: new FormControl(''),
      addresse_employe: new FormControl(''),
      date_naissance_employe: new FormControl('', Validators.required),
      nationalite: new FormControl(''),
      cin: new FormControl(''),
      //A1
      date_embauche: new FormControl(''),
      //A2
      fonction: new FormControl(''),
      //A4
      periode_essai: new FormControl(''),
      //A7
      salaire: new FormControl(''),
      //signature
      lieu_signature: new FormControl(''),
      date_signature: new FormControl(''),
    });

    this.cddForm = new FormGroup({
      de_date_embauche: new FormControl(''),
      a_date_embauche: new FormControl(''),
      //info societe
      nom_societe: new FormControl(''),
      capitale: new FormControl(''),
      immatriculation: new FormControl(''),
      addresse: new FormControl(''),
      //info employe
      nom_employe: new FormControl(''),
      prenom_employe: new FormControl(''),
      addresse_employe: new FormControl(''),
      date_naissance_employe: new FormControl('', Validators.required),
      nationalite: new FormControl(''),
      cin: new FormControl(''),
      //A1
      fonction: new FormControl(''),
      periode_essai: new FormControl(''),
      //A3
      salaire: new FormControl(''),
      //signature
      lieu_signature: new FormControl(''),
      date_signature: new FormControl(''),
    });

    this.locationForm = new FormGroup({
      //info loueur
      nom_loueur: new FormControl(''),
      prenom_loueur: new FormControl(''),
      addresse_loueur: new FormControl(''),
      cin_loueur: new FormControl(''),
      //info locataire
      nom_locataire: new FormControl(''),
      prenom_locataire: new FormControl(''),
      addresse_locataire: new FormControl(''),
      cin_locataire: new FormControl(''),
      //A1
      duree: new FormControl(''),
      date_debut: new FormControl(''),
      date_fin: new FormControl(''),
      description: new FormControl(''),
      //A3
      prix_totale: new FormControl(''),
      prix_par_mois: new FormControl(''),
      //signature
      lieu_signature: new FormControl(''),
      date_signature: new FormControl(''),
    });

    this.attestationForm = new FormGroup({
      //info societe
      logo:new FormControl(null),
      nom_societe: new FormControl(''),
      addresse: new FormControl(''),
      //info employe
      nom_employe: new FormControl(''),
      prenom_employe: new FormControl(''),
      qualite: new FormControl(''),
      cnss: new FormControl(''),
      //body
      date_embauche: new FormControl(''),
      //signature
      lieu_signature: new FormControl(''),
      date_signature: new FormControl(''),
    });
  }
  suivant(num: any) {
    this.choix = num;
  }
    onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      // Process the file and preview the image
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };      reader.readAsDataURL(file);

      // Set the file as a FormControl value
      this.attestationForm.get('logo')?.setValue(file);
    }
  }

  //print 
  @ViewChild('attestationComponent', { static: false }) attestationComponentRef!: ElementRef;


  onPrint() {
    setTimeout(() => {
      const contentToPrint = this.attestationComponentRef.nativeElement.innerHTML;
      const printWindow = window.open('', '_blank', 'height=600,width=800');

      if (printWindow) {
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(contentToPrint);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    });
  }

}
