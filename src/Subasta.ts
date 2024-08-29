import Candidato from "./Candidato";
import Estatus from "./enums/Estatus";
import Observable from "./interfaces/Observable";
import Observer from "./interfaces/Observer";
import ObjetoSubastado from "./ObjetoSubastado";

class Subasta implements Observable {
    private objetoSubastado: ObjetoSubastado;
    private candidatos: Candidato[] = [];
    private estatus: Estatus = Estatus.CREADA;

    constructor(objetoSubastado: ObjetoSubastado) {
        this.objetoSubastado = objetoSubastado;
    }

    public setObjetoSubastado(objetoSubastado: ObjetoSubastado) {
        this.objetoSubastado = objetoSubastado;
        this.notify();
    }

    public getObjetoSubastado(): ObjetoSubastado { return this.objetoSubastado; }

    public getCandidatos(): Candidato[] { return this.candidatos; }

    public setEstatus(estatus: Estatus) {
        this.estatus = estatus;
        this.notify();
    }

    public subscribe(observer: Observer): void {
        this.candidatos.push((observer as Candidato));
    }

    public subscribeAll(...observers: Observer[]): void {
        observers.forEach((observer) => this.candidatos.push((observer as Candidato)));
    }

    public unsubscribe(observer: Observer): void {
        this.candidatos = this.candidatos.filter((candidato) => candidato.getId() !== (observer as Candidato).getId());
    }

    public notify(): void {
        this.candidatos.forEach((candidato) => candidato.notify(this.objetoSubastado));
    }
}

export default Subasta;