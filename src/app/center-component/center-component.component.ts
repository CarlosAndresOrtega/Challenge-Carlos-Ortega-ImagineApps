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
      text: 'Amazon tiene un complejo sistema de venta a través del cual comercializa productos de vendedores y, también, bajo el mismo paraguas, los propios. Es uno de los operadores de ecommerce que mayor volumen de datos de vendedores maneja y la Comisión cree que puede haberlos utilizado para competir con sus proveedores más pequeños.',
      date: '01/02/2007',
      hour: '12:45:23',
      icon: 'https://media.licdn.com/dms/image/C4E03AQFztoBPChLfwQ/profile-displayphoto-shrink_200_200/0/1516323177822?e=1690416000&v=beta&t=DxQRImm1l-ajFhiOyn3BZZaypInFHiTkS4gUawSSJLk',
      name: "Kevin O'Leary",
      position: "Chairaman O'Shares Investments & Beanstox",
      img: '../../assets/portfolio.png',
    },
    {
      id: 2,
      text: 'Un desarrollador frontend utiliza el código para implementar el diseño de un sitio web o de una aplicación. Sus herramientas principales son HTML, CSS y JavaScript: HTML para la estructura general y el contenido del sitio web, CSS para el estilo y JavaScript para la interactividad avanzada.',
      date: '01/02/1998',
      hour: '12:45:23',
      icon: 'https://media.licdn.com/dms/image/D4E35AQEh5JUjCMzKZg/profile-framedphoto-shrink_200_200/0/1678577937385?e=1685599200&v=beta&t=naDC_KMEmPfWnTs0MAHkyZWDP7-xLoDEISP6KEgxzeU',
      name: "Carlos Andres Ortega Yate",
      position: "Front-end developer",
      img: 'https://media.licdn.com/dms/image/D4E16AQHZuQfyPnptmg/profile-displaybackgroundimage-shrink_350_1400/0/1684816547817?e=1690416000&v=beta&t=RJ2qvSBrzjuT2Yr3oSzXtXPyrCst4tDb-9Fctr8eP0M',
    },
    {
      id: 3,
      text: 'Three.js es una biblioteca liviana escrita en JavaScript para crear y mostrar gráficos animados por computadora en 3D en un navegador Web y puede ser utilizada en conjunción con el elemento canvas de HTML5, SVG o WebGL. El código fuente está alojado en un repositorio en GitHub. Se ha popularizado como una de las más importantes para la creación de las animaciones en WebGL.',
      date: '11/05/2017',
      hour: '12:45:23',
      icon: 'https://media.licdn.com/dms/image/C4E0BAQGVNXfn-XB6NQ/company-logo_200_200/0/1672836112710?e=1692835200&v=beta&t=fuksW8IlM_oo55IvYsT8M25IBH1A5871iKod025nsNI',
      name: "Three.js Journey",
      position: "The Best Way to learn WebGL with Three.js.",
      img: 'https://media.licdn.com/dms/image/D4E22AQHl0fNCf34hJQ/feedshare-shrink_800/0/1681309316300?e=1687996800&v=beta&t=CKuRirHoF92k8-xY0JvWanPCB4-GNSUzgwSaHmQOIrE',
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
      const fechaA = new Date(
        a.date.split('/').reverse().join('-') + ' ' + a.hour
      );
      const fechaB = new Date(
        b.date.split('/').reverse().join('-') + ' ' + b.hour
      );
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
      const fechaA = new Date(
        a.date.split('/').reverse().join('-') + ' ' + a.hour
      );
      const fechaB = new Date(
        b.date.split('/').reverse().join('-') + ' ' + b.hour
      );
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
      const fechaActual = new Date();

      const hour = fechaActual.getHours().toString().padStart(2, '0');
      const minutes = fechaActual.getMinutes().toString().padStart(2, '0');
      const seconds = fechaActual.getSeconds().toString().padStart(2, '0');

      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
      const anio = fechaActual.getFullYear().toString();

      const publishingData = {
        date: `${dia}/${mes}/${anio}`,
        hour: `${hour}:${minutes}:${seconds}`,
        name: `Nicolas Rojas Nino`,
        position: 'CEO en imagine apps',
        img: '../../assets/portfolioCarlos.png',
        icon: 'https://media.licdn.com/dms/image/D4E03AQFSn1ZvRhYJaw/profile-displayphoto-shrink_200_200/0/1679416155228?e=1690416000&v=beta&t=D2aJbGdlcKQ5BkzurysflE7Phb-sJrg9HTypBY3BUfs',
        id: this.PublishingArray.length + 1,
        text: this.textInput,
      };

      this.selectedPublishing = publishingData;
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
