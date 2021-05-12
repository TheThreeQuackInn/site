import {Monsters_monsters as Beast} from '@threequackinn/frontend-container/pages/conjure-animals/graphql';

export type AnimalStats = Omit<Beast, 'speed' | 'proficiencies'> & {
    speed: Array<string>;
    proficiencies: Array<string>;
};
