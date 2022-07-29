import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/persona.interface';
import { Cargos, CargosService } from 'src/app/services/cargos.service';
import { Ciudades, CiudadService } from 'src/app/services/ciudad.service';
import { Identificacion, IdentificacionService } from 'src/app/services/identificacion.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
    selector: 'app-persona-list',
    templateUrl: './persona-list.component.html',
    styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
    personas: Persona[] = [];

    isEdit = false;

    public identificacion: Identificacion[] = [];
    public cargos: Cargos[] = [];
    public ciudades: Ciudades[] = [];

    public form = new FormGroup({
        id_persona: new FormControl('', Validators.required),
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
        this.retrievePersonas();
        this.identificacionService.getAll().subscribe(data => this.identificacion = data.datos);
        this.cargosService.getAll().subscribe(data => this.cargos = data.datos);
        this.ciudadService.getAll().subscribe(data => this.ciudades = data.datos);
    }

    retrievePersonas(): void {
        this.personaService.getAll().subscribe(data => {
            this.personas = data.datos;
            console.log(data);
        });
    }

    deletePersona(id: number | undefined) {
        this.personaService.delete(id).subscribe(data => {
            console.log(data);
            this.retrievePersonas();
        });
    }

    editPersonas(item: Persona) {
        this.isEdit = !this.isEdit;
        this.form.patchValue({
            id_persona: item.id_persona,
            tipoIdentificacion: item.tipo_identificacion,
            identificacion: item.identificacion,
            primerNombre: item.primer_nombre,
            segundoNombre: item.segundo_nombre,
            primerApellido: item.primer_apellido,
            segundoApellido: item.segundo_apellido,
            direccion: item.direccion,
            celular: item.celular,
            telefono: item.telefono,
            ciudad: item.ciudad,
            cargo: item.cargo
        });
    }

    editPersona() {
        this.personaService.update(this.form.value).subscribe(data => {
            console.log(data);
            this.isEdit = !this.isEdit;
            this.retrievePersonas();
        });
    }

}
