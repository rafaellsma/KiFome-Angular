import { Meal } from './meal';

export class Menu {
    Id: number;
    FinalTimeToOrder: String;
    InitialTimeToOrder: String;
    LimitOfMeals: number;
    Meals: Array<Meal>;
}
