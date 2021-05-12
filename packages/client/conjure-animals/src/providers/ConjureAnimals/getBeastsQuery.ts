import {gql} from '@apollo/client';

export default gql`
    query Monsters {
        monsters(filter: {type: "beast"}) {
            alignment
            ac: armor_class
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
            url
            wisdom
            xp
        }
    }
`;
