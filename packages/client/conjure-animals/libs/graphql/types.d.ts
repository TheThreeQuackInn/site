/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Monsters
// ====================================================

export interface Monsters_monsters_actions_damage_damage_type {
    readonly __typename: 'AbilityScoreSkills';
    readonly name: string | null;
}

export interface Monsters_monsters_actions_damage {
    readonly __typename: 'MonsterActionsDamage';
    readonly damage_dice: string | null;
    readonly damage_type: Monsters_monsters_actions_damage_damage_type | null;
}

export interface Monsters_monsters_actions {
    readonly __typename: 'MonsterActions';
    readonly attack_bonus: number | null;
    readonly desc: string | null;
    readonly name: string | null;
    readonly damage: ReadonlyArray<Monsters_monsters_actions_damage | null> | null;
}

export interface Monsters_monsters_proficiencies_proficiency {
    readonly __typename: 'AbilityScoreSkills';
    readonly name: string | null;
}

export interface Monsters_monsters_proficiencies {
    readonly __typename: 'MonsterProficiencies';
    readonly value: number | null;
    readonly proficiency: Monsters_monsters_proficiencies_proficiency | null;
}

export interface Monsters_monsters_speed {
    readonly __typename: 'MonsterSpeed';
    readonly burrow: string | null;
    readonly climb: string | null;
    readonly fly: string | null;
    readonly hover: boolean | null;
    readonly swim: string | null;
    readonly walk: string | null;
}

export interface Monsters_monsters {
    readonly __typename: 'Monster';
    readonly alignment: string | null;
    readonly ac: number | null;
    readonly actions: ReadonlyArray<Monsters_monsters_actions | null> | null;
    readonly cr: number | null;
    readonly charisma: number | null;
    readonly constitution: number | null;
    readonly dexterity: number | null;
    readonly hitDice: string | null;
    readonly hp: number | null;
    readonly index: string | null;
    readonly intelligence: number | null;
    readonly languages: string | null;
    readonly name: string | null;
    readonly proficiencies: ReadonlyArray<Monsters_monsters_proficiencies | null> | null;
    readonly size: string | null;
    readonly speed: Monsters_monsters_speed | null;
    readonly strength: number | null;
    readonly subtype: string | null;
    readonly type: string | null;
    readonly url: string | null;
    readonly wisdom: number | null;
    readonly xp: number | null;
}

export interface Monsters {
    readonly monsters: ReadonlyArray<Monsters_monsters>;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
