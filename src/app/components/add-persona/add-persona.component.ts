import { CiudadService, Ciudades } from './../../services/ciudad.service';
import { Cargos, CargosService } from './../../services/cargos.service';
import { IdentificacionService, Identificacion } from './../../services/identificacion.service';
import { Persona } from './../../interfaces/persona.interface';
import { PersonaService } from './../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-persona',
    templateUrl: './add-persona.component.html',
    styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

    submitted = false;

    public identificacion: Identificacion[] = [];
    public cargos: Cargos[] = [];
    public ciudades: Ciudades[] = [];

    public form = new FormGroup({
        tipoIdentificacion: new FormControl('', Validators.required),
        identificacion: new FormControl('', Validators.required),
        primerNombre: new FormControl('', Validators.required),
        segundoNombre: new FormControl(''),
        primerApellido: new FormControl('', Validators.required),
        segundoApellido: new FormControl(''),
        direccion: new FormControl('', Validators.required),
        celular: new FormControl('', Validators.required),
        telefono: new FormControl(''),
        ciudad: new FormControl('', Validators.required),
        cargo: new FormControl('', Validators.required),
    });

    constructor(
        private personaService: PersonaService,
        private identificacionService: IdentificacionService,
        private cargosService: CargosService,
        private ciudadService: CiudadService
    ) { }

    ngOnInit(): void {
        this.identificacionService.getAll().subscribe(data => this.identificacion = data.datos);
        this.cargosService.getAll().subscribe(data => this.cargos = data.datos);
        this.ciudadService.getAll().subscribe(data => this.ciudades = data.datos);
    }

    savePersona(): void {
        this.personaService.create(this.form.value)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.submitted = true;
            },
            error: (e) => console.error(e)
          });
    }

    newTutorial(): void {
        this.submitted = false;
        this.form.reset();
    }

}
