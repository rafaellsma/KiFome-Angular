import { Garnish } from "./garnish";

export interface Meal {
    id: number;
    name: String;
    description: String;
    Days: Array<String>;
    Garnishies: Array<Garnish>;
}
