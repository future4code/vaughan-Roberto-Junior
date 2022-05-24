import { v4 } from "uuid";


export class GenerateID{
    static generateId = (): string => v4()
}