import Candidato from "./src/Candidato";
import ObjetoSubastado from "./src/ObjetoSubastado";
import Subasta from "./src/Subasta";
import Estado from "./src/enums/Estado";
import Estatus from "./src/enums/Estatus";

const main = () => {
    // Creamos a los candidatos
    const candidato1 = new Candidato("", "", new Date(), Estado.DEFAULT);
    const candidato2 = new Candidato("", "", new Date(), Estado.DEFAULT);

    // Creamos el objeto que se va a subastar
    const objetoSubastado = new ObjetoSubastado("", "", "", 0);

    // Creamos la subasta
    const subasta = new Subasta(objetoSubastado);

    // Subscribimos a los candidatos a la subasta
    subasta.subscribeAll(candidato1, candidato2);

    // Modificamos el objeto subastado para que se le notifique a los candidatos
    subasta.setObjetoSubastado(new ObjetoSubastado("", "", "", 0));

    // Cerramos la subasta para notificar a los candidatos
    subasta.setEstatus(Estatus.CERRADA);
};

main();