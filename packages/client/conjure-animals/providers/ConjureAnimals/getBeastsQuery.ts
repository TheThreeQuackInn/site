import {gql} from '@apollo/client';

export default gql`
    query Monsters {
        monsters(limit: 500, challenge_rating: {lte: 2}, order: {by: NAME}, type: BEAST) {
            armor_class {
                value
                type
            }
            actions {
                attack_bonus
                desc
                name
                damage {
                    damage_dice
                    damage_type {
                        name
                    }
                }
            }
            cr: challenge_rating
            charisma
            constitution
            dexterity
            hitDice: hit_dice
            hp: hit_points
            index
            intelligence
            languages
            name
            proficiencies {
                value
                proficiency {
                    name
                }
            }
            size
            speed {
                burrow
                climb
                fly
                hover
                swim
                walk
            }
            strength
            subtype
            type
            wisdom
            xp
        }
    }
`;
