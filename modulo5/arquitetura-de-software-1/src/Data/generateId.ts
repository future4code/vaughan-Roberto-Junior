import { v4 } from 'uuid';

export class GenerateID{
    generateId(){
        return v4();
    }
}