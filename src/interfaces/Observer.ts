import ObjetoSubastado from "../ObjetoSubastado";

interface Observer {
    notify(objetoSubastado: ObjetoSubastado): void;
}

export default Observer;