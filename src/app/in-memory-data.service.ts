// import { Hero } from './hero'

// export const HEROES: Hero[] = [
//     { id: 11, name: 'Harish' },
//     { id: 12, name: 'Satish' },
//     { id: 13, name: 'Jatin' },
//     { id: 14, name: 'Yousif' },
//     { id: 15, name: 'Tousifh' },
//     { id: 16, name: 'Yuan' },
//     { id: 17, name: 'Regesh' },
//     { id: 18, name: 'Rajat' },
//     { id: 19, name: 'Rakesh' },
//     { id: 20, name: 'Terrence' }    
// ];

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Harish' },
            { id: 12, name: 'Satish' },
            { id: 13, name: 'Jatin' },
            { id: 14, name: 'Yousif' },
            { id: 15, name: 'Tousifh' },
            { id: 16, name: 'Yuan' },
            { id: 17, name: 'Regesh' },
            { id: 18, name: 'Rajat' },
            { id: 19, name: 'Rakesh' },
            { id: 20, name: 'Terrence' }
        ];

        return heroes;
    }

}