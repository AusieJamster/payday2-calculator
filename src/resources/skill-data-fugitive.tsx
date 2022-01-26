import { Skill } from '../components/SkillTile';

// GUNSLINGER

export const equilibrium: Skill = {
  name: 'Equilibrium',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/8/81/Equilibrium.png',
  category: 'FUGITIVE',
  tree: 'GUNSLINGER',
  tier: 1,
  position: 0,
  basic: 'Decreases the time it takes to draw and holster pistols by 33%.',
  ace: 'You gain a 8 weapon accuracy with pistols.',
  state: 'OFF',
};

export const gunNut: Skill = {
  name: 'Gun Nut',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/c1/Gun_Nut.png',
  category: 'FUGITIVE',
  tree: 'GUNSLINGER',
  tier: 2,
  position: 0,
  basic: 'Your pistol magazine sizes are increased by 5 bullets.',
  ace: 'You gain a 50% increased rate of fire with pistols.',
  state: 'OFF',
};

export const akimbo: Skill = {
  name: 'Akimbo',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/03/Akimbo.png',
  category: 'FUGITIVE',
  tree: 'GUNSLINGER',
  tier: 2,
  position: 1,
  basic: "Your Akimbo weapons' stability penalty is reduced by 8.",
  ace: "Your Akimbo weapons' stability penalty is reduced by an additional 8 and they also have a 50% increased ammo capacity.",
  state: 'OFF',
};

export const oneHandedTalent: Skill = {
  name: 'One Handed Talent',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/7/7d/One_Handed_Talent.png',
  category: 'FUGITIVE',
  tree: 'GUNSLINGER',
  tier: 3,
  position: 0,
  basic: 'The base damage of all pistols is increased by 5.',
  ace: 'The base damage of all pistols is increased by an additional 10 damage.',
  state: 'OFF',
};

export const desperado: Skill = {
  name: 'Desperado',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/57/Desperado.png',
  category: 'FUGITIVE',
  tree: 'GUNSLINGER',
  tier: 3,
  position: 1,
  basic: 'Each successful pistol hit gives you a 10% increased accuracy bonus for 10 seconds and can stack 4 times.',
  ace: 'You reload all pistols 50% faster.',
  state: 'OFF',
};

export const triggerHappy: Skill = {
  name: 'Trigger Happy',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/00/Trigger_Happy_U100.png',
  category: 'FUGITIVE',
  tree: 'GUNSLINGER',
  tier: 4,
  position: 0,
  basic: 'For every hit with a pistol you gain 120% damage boost that lasts for 2 seconds. Stacks up to 1 times.',
  ace: 'Increases the damage boost duration to 4 seconds.',
  state: 'OFF',
};

// REVENANT

export const nineLives: Skill = {
  name: 'Nine Lives',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/b/b6/Nine_Lives.png',
  category: 'FUGITIVE',
  tree: 'REVENANT',
  tier: 1,
  position: 0,
  basic: 'You gain a 50% increase to bleedout health.',
  ace: 'You gain the ability to get downed 1 more time before going into custody.',
  state: 'OFF',
};

export const runningFromDeath: Skill = {
  name: 'Running From Death',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/b/bb/Running_From_Death.png',
  category: 'FUGITIVE',
  tree: 'REVENANT',
  tier: 2,
  position: 0,
  basic: 'You reload and swap weapons 100% faster for 10 seconds after being revived.',
  ace: 'You move 30% faster for 10 seconds after being revived.',
  state: 'OFF',
};

export const upYouGo: Skill = {
  name: 'Up You Go',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/02/Up_You_Go.png',
  category: 'FUGITIVE',
  tree: 'REVENANT',
  tier: 2,
  position: 1,
  basic: 'You take 30% less damage for 10 seconds after being revived.',
  ace: 'You receive 40% more health when revived.',
  state: 'OFF',
};

export const swanSong: Skill = {
  name: 'Swan Song',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/e/e0/Swan_Song.png',
  category: 'FUGITIVE',
  tree: 'REVENANT',
  tier: 3,
  position: 0,
  basic: 'Instead of getting downed instantly, you gain the ability to keep on fighting for 3 seconds with a 60% movement penalty before going down.',
  ace: "Increases the duration of Swan Song by 3 seconds. Ammunition won't be depleted while the effect is active.",
  state: 'OFF',
};

export const feignDeath: Skill = {
  name: 'Feign Death',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/f/fd/Feign_Death.png',
  category: 'FUGITIVE',
  tree: 'REVENANT',
  tier: 3,
  position: 1,
  basic: 'When you get downed, you have a 15% chance to instantly get revived.',
  ace: 'The chance to get instantly revived is increased by an additional 30%.',
  state: 'OFF',
};

export const messiah: Skill = {
  name: 'Messiah',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/53/Pistol_Messiah.png',
  category: 'FUGITIVE',
  tree: 'REVENANT',
  tier: 4,
  position: 0,
  basic: 'While in bleedout, you can revive yourself if you kill an enemy. You only have 1 charge.',
  ace: 'Your Messiah charge is replenished whenever you use a doctor bag.',
  state: 'OFF',
};

// BRAWLER

export const martialArts: Skill = {
  name: 'Martial Arts',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/5c/Martial_arts.png',
  category: 'FUGITIVE',
  tree: 'BRAWLER',
  tier: 1,
  position: 0,
  basic: 'You take 50% less damage from all melee attacks. Because of training.',
  ace: 'You are 50% more likely to knock down enemies with a melee strike.',
  state: 'OFF',
};

export const bloodthirst: Skill = {
  name: 'Bloodthirst',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/3/34/Bloodthirst.png',
  category: 'FUGITIVE',
  tree: 'BRAWLER',
  tier: 2,
  position: 0,
  basic:
    'Every kill you get will increase your next melee attack damage by 100%, up to a maximum of 1600%. This effect gets reset when you kill an enemy with a melee attack.',
  ace: 'Whenever you kill an enemy with a melee attack, you will gain a 50% increase in reload speed for 10 seconds.',
  state: 'OFF',
};

export const pumpingIron: Skill = {
  name: 'Pumping Iron',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/e/e4/Pumping_Iron.png',
  category: 'FUGITIVE',
  tree: 'BRAWLER',
  tier: 2,
  position: 1,
  basic: 'Your melee attacks against non-special enemies do 100% more damage.',
  ace: 'Your melee attacks against special enemies do 100% more damage.',
  state: 'OFF',
};

export const counterstrike: Skill = {
  name: 'Counterstrike',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/4/4a/Counter-Strike.png',
  category: 'FUGITIVE',
  tree: 'BRAWLER',
  tier: 3,
  position: 0,
  basic: 'When charging your melee weapon you will counterattack enemies that try to strike you, knocking them down. The knockdown does not deal any damage.',
  ace: 'You gain the ability to counter attack cloakers and their kicks.',
  state: 'OFF',
};

export const berserker: Skill = {
  name: 'Berserker',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a8/Berserker.png',
  category: 'FUGITIVE',
  tree: 'BRAWLER',
  tier: 3,
  position: 1,
  basic: 'The lower your health, the more damage you do. When your health is below 50%, you will do up to 250% more melee and saw damage.',
  ace: 'The lower your health, the more damage you do. When your health is below 50%, you will do up to 100% more damage with ranged weapons as well.',
  state: 'OFF',
};

export const frenzy: Skill = {
  name: 'Frenzy',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/f/f1/Frenzy.png',
  category: 'FUGITIVE',
  tree: 'BRAWLER',
  tier: 4,
  position: 0,
  basic: 'You only get 30% of your maximum health and cannot heal above it but you take 10% less damage and healing received is reduced by 75%.',
  ace: 'Damage taken is now reduced by 25% and healing received is reduced by 0%.',
  state: 'OFF',
};
