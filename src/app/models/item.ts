import { Data } from "@angular/router";

export interface Item1 {
    id: number;
    ITEM_NAME: string;
    DESCRIPCION: string;
    TIPO_COMIDA: boolean;
    PRECIO: number;
    FOTO_URL: string;
    createdAt: Data;
    updatedAt: Data;

}
