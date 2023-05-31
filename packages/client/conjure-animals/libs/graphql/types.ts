/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Monsters
// ====================================================

export interface Monsters_monsters_armor_class {
    readonly __typename: 'MonsterArmorClass';
    readonly value: number;
    readonly type: MonsterArmorClassType;
}

export interface Monsters_monsters_actions_damage_damage_type {
    readonly __typename: 'DamageType';
    readonly name: string;
}

export interface Monsters_monsters_actions_damage {
    readonly __typename: 'ActionDamage';
    readonly damage_dice: string | null;
    readonly damage_type: Monsters_monsters_actions_damage_damage_type | null;
}

export interface Monsters_monsters_actions {
    readonly __typename: 'MonsterAction';
    readonly attack_bonus: number | null;
    readonly desc: string;
    readonly name: string;
    readonly damage: ReadonlyArray<Monsters_monsters_actions_damage> | null;
}

export interface Monsters_monsters_proficiencies_proficiency {
    readonly __typename: 'Proficiency';
    readonly name: string;
}

export interface Monsters_monsters_proficiencies {
    readonly __typename: 'MonsterProficiency';
    readonly value: number;
    readonly proficiency: Monsters_monsters_proficiencies_proficiency;
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
    readonly armor_class: ReadonlyArray<Monsters_monsters_armor_class | null> | null;
    readonly actions: ReadonlyArray<Monsters_monsters_actions> | null;
    readonly cr: number;
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly hitDice: string;
    readonly hp: number;
    readonly index: string;
    readonly intelligence: number;
    readonly languages: string;
    readonly name: string;
    readonly proficiencies: ReadonlyArray<Monsters_monsters_proficiencies>;
    readonly size: Size;
    readonly speed: Monsters_monsters_speed;
    readonly strength: number;
    readonly subtype: MonsterSubtype | null;
    readonly type: MonsterType;
    readonly wisdom: number;
    readonly xp: number;
}

export interface Monsters {
    readonly monsters: ReadonlyArray<Monsters_monsters> | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum MonsterArmorClassType {
    armor = 'armor',
    condition = 'condition',
    dex = 'dex',
    natural = 'natural',
    spell = 'spell',
}

export enum MonsterSubtype {
    ANY_RACE = 'ANY_RACE',
    DEMON = 'DEMON',
    DEVIL = 'DEVIL',
    DWARF = 'DWARF',
    ELF = 'ELF',
    GNOLL = 'GNOLL',
    GNOME = 'GNOME',
    GOBLINOID = 'GOBLINOID',
    GRIMLOCK = 'GRIMLOCK',
    HUMAN = 'HUMAN',
    KOBOLD = 'KOBOLD',
    LIZARDFOLK = 'LIZARDFOLK',
    MERFOLK = 'MERFOLK',
    ORC = 'ORC',
    SAHUAGIN = 'SAHUAGIN',
    SHAPECHANGER = 'SHAPECHANGER',
    TITAN = 'TITAN',
}

export enum MonsterType {
    ABERRATION = 'ABERRATION',
    BEAST = 'BEAST',
    CELESTIAL = 'CELESTIAL',
    CONSTRUCT = 'CONSTRUCT',
    DRAGON = 'DRAGON',
    ELEMENTAL = 'ELEMENTAL',
    FEY = 'FEY',
    FIEND = 'FIEND',
    GIANT = 'GIANT',
    HUMANOID = 'HUMANOID',
    MONSTROSITY = 'MONSTROSITY',
    OOZE = 'OOZE',
    PLANT = 'PLANT',
    SWARM = 'SWARM',
    UNDEAD = 'UNDEAD',
}

export enum Size {
    GARGANTUAN = 'GARGANTUAN',
    HUGE = 'HUGE',
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    TINY = 'TINY',
}

//==============================================================
// END Enums and Input Objects
//==============================================================
