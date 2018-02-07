import { MealFromGarnishDTO } from './meal-from-garnish.dto';

export interface GarnishDTO {
    id: number;
    name: string;
    description: string;
    meals?: Array<MealFromGarnishDTO>;
}
