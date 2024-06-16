import RedeMT from "./RedeMT";

export default interface Subestacoes{
    id: number;
    codigo:string;
    nome: string;
    latitude: number;
    longitude: number;
    redesMT: RedeMT | null
}