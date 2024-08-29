class ObjetoSubastado {
    private id: string;
    private nombre: string;
    private descripcion: string;
    private precio: number;

    constructor(id: string, nombre: string, descripcion: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    getId(): string { return this.id };

    getNombre(): string { return this.nombre };

    getDescripcion(): string { return this.descripcion };

    getPrecio(): number { return this.precio };
}

export default ObjetoSubastado;