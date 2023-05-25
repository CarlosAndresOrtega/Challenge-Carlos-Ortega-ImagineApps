/**
 * Interfaz que representa un objeto de usuario.
 * @typedef {Object} Publishing
 * @property {number} id - id correspondiente a la publicación.
 * @property {string} text - texto correspondiente a la publicación.
 * @property {string} date - fecha correspondiente a la publicación.
 * @property {string} hour - hora correspondiente al tiempo que fue hecha la publicación.
 * @property {string} icon - Imagen perteneciente al icono del usuario que realizo la publicación
 * @property {string} name - Nombre del usuario que realizo la publicación
 * @property {string} position - Cargo del usuario que realizo la publicación
 * @property {string} img - Imagen de la publicación
 */

export class Publishing {
    id:number=0;
    text: string ="";
    date: string = "";
    hour: string = "";
    icon:  string="";
    name:  string="";
    position:string="";
    img: string="";
}
