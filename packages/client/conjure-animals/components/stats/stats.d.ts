import {Monsters_monsters as Beast} from '../../libs/graphql/types';

export type AnimalStats = Omit<Beast, 'speed' | 'proficiencies'> & {
    speed: Array<string>;
    proficiencies: Array<string>;
};
