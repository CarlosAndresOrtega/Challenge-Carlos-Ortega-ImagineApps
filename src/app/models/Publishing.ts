/**
 * Interfaz que representa un objeto de usuario.
 * @typedef {Object} Publishing
 * @property {number} id - id correspondiente a la publicación.
 * @property {string} text - texto correspondiente a la publicación.
 * @property {string} date - fecha correspondiente a la publicación.
 * @property {string} hour - hora correspondiente al tiempo que fue hecha la publicación.
 */

export class Publishing {
    id:number=0;
    text: string ="";
    date: string = "";
    hour: string = "";
    img:  string="";
}
