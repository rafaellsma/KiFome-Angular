import { Garnish } from "./garnish";

export interface Meal {
    id: number;
    name: String;
    description: String;
    Days: number;
    GarnishiesId: Array<number>;
    MenuId: number;
}
