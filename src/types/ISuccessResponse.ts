import { IHit } from "./IHit";

export interface ISuccessResponse {
    total: number;
    totalHits: number;
    hits: IHit[];
}
