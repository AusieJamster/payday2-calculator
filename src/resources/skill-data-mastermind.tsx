import { Skill } from '../components/SkillTile';

// MEDIC

export const combatMedic: Skill = {
  name: 'Combat Medic',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/c2/Combat_Medic.png',
  category: 'MASTERMIND',
  tree: 'MEDIC',
  tier: 1,
  position: 0,
  basic: 'You gain a 30% damage reduction for 5 seconds both after and during reviving another player.',
  ace: 'Reviving a crew member gives them 30% more health.',
  state: 'OFF',
};

export const quickFix: Skill = {
  name: 'Quick Fix',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/c6/Quick_Fix.png',
  category: 'MASTERMIND',
  tree: 'MEDIC',
  tier: 2,
  position: 0,
  basic: 'Decreases your First Aid Kit and Doctor Bag deploy time by 50%.',
  ace: 'Crew members that use your First Aid Kits or Doctor Bags take 10% less damage for 120 seconds.',
  state: 'OFF',
};

export const painkillers: Skill = {
  name: 'Painkillers',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/4/45/Painkillers.png',
  category: 'MASTERMIND',
  tree: 'MEDIC',
  tier: 2,
  position: 1,
  basic: 'Crew members you revive take 30% less damage for 5 seconds.',
  ace: 'The damage reduction is increased by an additional 50%.',
  state: 'OFF',
};

export const uppers: Skill = {
  name: 'Uppers',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/f/f4/Uppers.png',
  category: 'MASTERMIND',
  tree: 'MEDIC',
  tier: 3,
  position: 0,
  basic: 'Adds 7 more First Aid Kits to your inventory.',
  ace: 'Adds 3 First Aid Kits to your inventory. Your deployed First Aid Kits will be automatically used if a player is downed within a 5 meter radius of the First Aid Kit. This cannot occur more than once every 20 seconds.',
  state: 'OFF',
};

export const combatDoctor: Skill = {
  name: 'Combat Doctor',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/5d/Combat_Doctor.png',
  category: 'MASTERMIND',
  tree: 'MEDIC',
  tier: 3,
  position: 1,
  basic: 'You can now deploy 2 Doctor Bags instead of just one.',
  ace: 'Your doctor bags have 2 more charges.',
  state: 'OFF',
};

export const inspire: Skill = {
  name: 'Inspire',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/c4/Inspire.png',
  category: 'MASTERMIND',
  tree: 'MEDIC',
  tier: 4,
  position: 0,
  basic: 'You revive crew members 100% faster. Shouting at your teammates will increase their movement and reload speed by 20% for 10 seconds.',
  ace: 'There is a 100% chance that you can revive crew members at a distance of up to 9 meters by shouting at them. This cannot occur more than once every 20 seconds.',
  state: 'OFF',
};

// CONTROLLER

export const forcedFriendship: Skill = {
  name: 'Forced Friendship',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/6/6f/Forced_Friendship.png',
  category: 'MASTERMIND',
  tree: 'CONTROLLER',
  tier: 1,
  position: 0,
  basic: 'Increases your supply of cable ties by 4. You can cable tie hostages 75% faster.',
  ace: 'You and your crew gain 0.5 damage absorption for each hostage you have. This effect stacks with up to a maximum of 8 hostages. Note: This skill does not stack with other players Forced Friendship skills.',
  state: 'OFF',
};

export const confident: Skill = {
  name: 'Confident',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/2/20/Confident.png',
  category: 'MASTERMIND',
  tree: 'CONTROLLER',
  tier: 2,
  position: 0,
  basic: 'The power and range of your intimidation is increased by 50%.',
  ace: 'You can now have 2 converted enemies at the same time.',
  state: 'OFF',
};

export const joker: Skill = {
  name: 'Joker',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/e/ef/Joker.png',
  category: 'MASTERMIND',
  tree: 'CONTROLLER',
  tier: 2,
  position: 1,
  basic:
    'You can convert a non-special enemy to fight on your side. This cannot be done during stealth and the enemy must have surrendered in order for you to convert them. You can only convert one non-special enemy at a time.',
  ace: 'Your converted enemy deal 35% more damage. The time taken to convert an enemy is reduced by 65%.',
  state: 'OFF',
};

export const stockholmSyndrome: Skill = {
  name: 'Stockholm Syndrome',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/09/Stockholm_Syndrome.png',
  category: 'MASTERMIND',
  tree: 'CONTROLLER',
  tier: 3,
  position: 0,
  basic: 'Civilians are intimidated by the noise you make and remain intimidated 50% longer.',
  ace: 'Your hostages will not flee when they have been rescued by law enforcers. Whenever you get into custody, your hostages will trade themselves for your safe return. This effect can occur during assaults, but only 1 time during a heist.',
  state: 'OFF',
};

export const partnersInCrime: Skill = {
  name: 'Partners In Crime',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/7/7c/Partners_In_Crime.png',
  category: 'MASTERMIND',
  tree: 'CONTROLLER',
  tier: 3,
  position: 1,
  basic: 'Having a converted enemy increases your movement speed by 10%. Your converted enemy takes 45% less damage.',
  ace: 'Having a converted enemy increases your health by 30%. Your converted enemy takes an additional 54% less damage.',
  state: 'OFF',
};

export const hostageTaker: Skill = {
  name: 'Hostage Taker',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/8/85/Hostage_Taker.png',
  category: 'MASTERMIND',
  tree: 'CONTROLLER',
  tier: 4,
  position: 0,
  basic: 'Having at least one of your own hostage or converted law enforcer makes you regenerate 1.5% health every 5 seconds.',
  ace: 'Having at least one of your own hostage or converted law enforcer makes you regenerate 4.5% health every 5 seconds.',
  state: 'OFF',
};

// SHARPSHOOTER

export const stableShot: Skill = {
  name: 'Stable Shot',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a2/Stable_Shot.png',
  category: 'MASTERMIND',
  tree: 'SHARPSHOOTER',
  tier: 1,
  position: 0,
  basic: 'You gain 8 weapon stability.',
  ace: 'You gain 16 weapon accuracy while standing still.',
  state: 'OFF',
};

export const rifleman: Skill = {
  name: 'Rifleman',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/8/8b/Rifleman.png',
  category: 'MASTERMIND',
  tree: 'SHARPSHOOTER',
  tier: 2,
  position: 0,
  basic: 'Your snap to zoom is 100% faster with all weapons. Your movement speed is unhindered while using steel sight.',
  ace: 'Your weapon zoom level is increased by 25% with all weapons. Your weapon accuracy while moving with SMGs, Assault Rifles and Sniper Rifles is increased by 16.',
  state: 'OFF',
};

export const marksman: Skill = {
  name: 'Marksman',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a0/Marksman.png',
  category: 'MASTERMIND',
  tree: 'SHARPSHOOTER',
  tier: 2,
  position: 1,
  basic: 'You gain 8 weapon accuracy with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
  ace: 'You gain a 20% accuracy bonus while aiming down sights with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
  state: 'OFF',
};

export const ammoEfficiency: Skill = {
  name: 'Ammo Efficiency',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/b/be/Ammo_Efficiency.png',
  category: 'MASTERMIND',
  tree: 'SHARPSHOOTER',
  tier: 3,
  position: 0,
  basic:
    'Getting 3 headshots in less than 6 seconds will refund 1 bullet to your used weapon. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot mode.',
  ace: 'The amount of headshots required is reduced to 2.',
  state: 'OFF',
};

export const aggressiveReload: Skill = {
  name: 'Aggressive Reload',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/e/e2/Aggressive_Reload.png',
  category: 'MASTERMIND',
  tree: 'SHARPSHOOTER',
  tier: 3,
  position: 1,
  basic: 'Increases your reload speed with SMGs, Assault Rifles and Sniper Rifles by 15%.',
  ace: 'Any killing headshot will increase your reload speed by 100% for 4 seconds. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
  state: 'OFF',
};

export const graze: Skill = {
  name: 'Graze',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/09/Graze.png',
  category: 'MASTERMIND',
  tree: 'SHARPSHOOTER',
  tier: 4,
  position: 0,
  basic: 'Snipers that hit their target deal 20% of the damage dealt in a 100cm radius around the bullet trajectory.',
  ace: "If a bullet would headshot-kill someone, the graze skill will deal 100% of the weapon's damage instead of 20%.",
  state: 'OFF',
};
