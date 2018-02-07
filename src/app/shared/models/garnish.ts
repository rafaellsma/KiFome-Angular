import { Meal } from "./meal";

export interface Garnish {
    Id: number;
    Name: string;
    Description: string;
    Meal: Array<Meal>;
}
