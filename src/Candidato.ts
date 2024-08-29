import Estado from "./enums/Estado";
import Observer from "./interfaces/Observer";
import ObjetoSubastado from "./ObjetoSubastado";

class Candidato implements Observer {
    private id: string;
    private nombre: string;
    private fechaNacimiento: Date;
    private estado: Estado;

    constructor(id: string, nombre: string, fechaNacimiento: Date, estado: Estado) {
        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.estado = estado;
    }

    getId(): string { return this.id; }

    notify(objetoSubastado: ObjetoSubastado): void {
        console.log(`Candidato ${this.nombre} notificado`);
    }
}

export default Candidato;