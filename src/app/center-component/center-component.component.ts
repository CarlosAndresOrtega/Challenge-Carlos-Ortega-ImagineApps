import { Component, OnInit } from '@angular/core';
import { Publishing } from '../models/Publishing';

@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css'],
})
export class CenterComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * Arreglo de publicaciones.
   * @type {Publishing[]}
   *
   * @description - Arreglo que contendra las publicaciones
   */
  PublishingArray: Publishing[] = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda tempore ipsam iste veritatis! Facilis, quia odit consectetur, vel autem optio dolorem ducimus atque velit labore quod esse necessitatibus non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ipsam soluta eum laborum, iure vero esse sunt illo optio autem saepe ipsum laboriosam! Necessitatibus, quae! Labore quasi saepe rem.',
      date: '01/02/2007',
      hour: '12:45:23',
      img:"https://media.licdn.com/dms/image/C4E03AQFztoBPChLfwQ/profile-displayphoto-shrink_200_200/0/1516323177822?e=1690416000&v=beta&t=DxQRImm1l-ajFhiOyn3BZZaypInFHiTkS4gUawSSJLk",
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda tempore ipsam iste veritatis! Facilis, quia odit consectetur, vel autem optio dolorem ducimus atque velit labore quod esse necessitatibus non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ipsam soluta eum laborum, iure vero esse sunt illo optio autem saepe ipsum laboriosam! Necessitatibus, quae! Labore quasi saepe rem.',
      date: '01/02/1998',
      hour: '12:45:23',
      img:"https://media.licdn.com/dms/image/C4E03AQFztoBPChLfwQ/profile-displayphoto-shrink_200_200/0/1516323177822?e=1690416000&v=beta&t=DxQRImm1l-ajFhiOyn3BZZaypInFHiTkS4gUawSSJLk",
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda tempore ipsam iste veritatis! Facilis, quia odit consectetur, vel autem optio dolorem ducimus atque velit labore quod esse necessitatibus non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ipsam soluta eum laborum, iure vero esse sunt illo optio autem saepe ipsum laboriosam! Necessitatibus, quae! Labore quasi saepe rem.',
      date: '11/05/2017',
      hour: '12:45:23',
      img:"https://media.licdn.com/dms/image/C4E03AQFztoBPChLfwQ/profile-displayphoto-shrink_200_200/0/1516323177822?e=1690416000&v=beta&t=DxQRImm1l-ajFhiOyn3BZZaypInFHiTkS4gUawSSJLk",
    },
  ];

  /**
   * Indica si el boton de publicar esta activo
   * @type {boolean}
   * @default false
   */
  active: boolean = false;

  /**
   * Texto que indica el orden de las publicaciones
   * @type {string}
   * @default Populares
   */
  Populares: string = 'Populares';

  /**
   * La publicación seleccionada.
   * @type {Publishing}
   * @default new Publishing()
   */
  selectedPublishing: Publishing = new Publishing();

  /**
   * Variable para guardar el valor del input
   * @type {string}
   * @default empaty
   */
  textInput: string = '';

  /**
   * Varible para abrir y cerrar el panel de ordenar las publicaciones
   * @type {boolean}
   * @default false
   */
  isMenuOpen = false;

  /**
   * Varible para aparecer y desaparecer el boton de eliminar
   * @type {boolean}
   * @default false
   */
  isEdit = false;

  /**
   * Alterna el estado del menú de ordenar entre abierto y cerrado.
   * @returns {void}
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Organiza el arreglo de publicaciones de forma ascendente, dependiendo de la fecha y hora de la publicación 
   * @returns {void}
   */
  public Ascendente(): void {
    this.Populares = 'Ascendente';
    this.PublishingArray.sort((a: any, b: any) => {
      const fechaA = new Date(a.date.split('/').reverse().join('-')+' '+a.hour);
      const fechaB = new Date(b.date.split('/').reverse().join('-')+' '+b.hour);
      return fechaA.getTime() - fechaB.getTime();
    });
  }

  /**
   * Organiza el arreglo de publicaciones de forma descendente, dependiendo de la fecha y hora de la publicación 
   * @returns {void}
   */
  public Descendente(): void {
    this.Populares = 'Descendente';
    this.PublishingArray.sort((a: any, b: any) => {
      const fechaA = new Date(a.date.split('/').reverse().join('-')+' '+a.hour);
      const fechaB = new Date(b.date.split('/').reverse().join('-')+' '+b.hour);
      return fechaB.getTime() - fechaA.getTime();
    });
  }

  /**
   * Organiza el arreglo de publicaciones de forma descendente, dependiendo de la fecha y hora de la publicación
   * @param {Publishing} - publicacion seleccionada para ser eliminada 
   * @returns {void}
   */
  public openForEdit(currentPublishing: Publishing): void {
    this.isEdit = !this.isEdit;
    if (this.isEdit == true) {
      this.selectedPublishing = currentPublishing;
    } else {
      this.selectedPublishing = new Publishing();
    }
  }
  /**
   * Metodo para agregar una nueva publicacion 
   * 
   * @description - Este metodo agrega la informacion referente a la nueva publicación desde la hora, hasta el texto, despues de ser agregada limpia el input y la variable de publicación seleccionada
   * @returns {void}
   */

  public addOrEdit(): void {
    if (this.selectedPublishing.id === 0) {
      this.selectedPublishing.id = this.PublishingArray.length + 1;
      this.selectedPublishing.text = this.textInput;
      const fechaActual = new Date();


      const hour = fechaActual.getHours().toString().padStart(2, '0');
      const minutes = fechaActual.getMinutes().toString().padStart(2, '0');
      const seconds = fechaActual.getSeconds().toString().padStart(2, '0');
      
      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
      const anio = fechaActual.getFullYear().toString();
      
      this.selectedPublishing.date = `${dia}/${mes}/${anio}`;
      this.selectedPublishing.hour = `${hour}:${minutes}:${seconds}`;
      this.selectedPublishing.img="https://media.licdn.com/dms/image/D4E03AQFSn1ZvRhYJaw/profile-displayphoto-shrink_200_200/0/1679416155228?e=1690416000&v=beta&t=D2aJbGdlcKQ5BkzurysflE7Phb-sJrg9HTypBY3BUfs"
      this.PublishingArray.splice(0, 0, this.selectedPublishing);
    }

    this.selectedPublishing = new Publishing();
    this.active = false;
    this.textInput = '';
  }
  /**
   * Metodo utilizado para eliminar una publicación
   * 
   * @returns {void}
   */
  public delete(): void {
    if (confirm('Are you sure you want to delete it?')) {
      this.PublishingArray = this.PublishingArray.filter(
        (x) => x != this.selectedPublishing
      );
      this.selectedPublishing = new Publishing();
      this.isEdit = false;
    }
  }
  /**
   * Metodo que activa o desactiva el input, para que no hayan problemas a la hora de seleccionar una publicación para eliminarla.
   * 
   * @returns {void}
   */
  public changeInput(event: any): void {
    const value = event.target.value;
    if (value == '') {
      this.active = false;
    } else {
      this.active = true;
    }
  }
}
