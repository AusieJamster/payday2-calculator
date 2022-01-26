import { Skill } from '../components/SkillTile';

// SHOTGUNNER

export const underdog: Skill = {
  name: 'Underdog',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/51/Underdog.png',
  category: 'ENFORCER',
  tree: 'SHOTGUNNER',
  tier: 1,
  position: 0,
  basic: 'When three or more enemies are within 18 meters of you, you receive a 15% damage bonus that lasts for 7 seconds.',
  ace: 'When three or more enemies are within 18 meters of you, you also receive a 10% damage reduction that lasts for 7 seconds.',
  state: 'OFF',
};

export const shotgunCQB: Skill = {
  name: 'Shotgun CQB',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/50/Shotgun_CQB_U100.png',
  category: 'ENFORCER',
  tree: 'SHOTGUNNER',
  tier: 2,
  position: 0,
  basic: 'You reload shotguns 15% faster.',
  ace: 'You reload shotguns 35% faster. You gain a 125% increase steel sight speed when using Shotguns.',
  state: 'OFF',
};

export const shotgunImpact: Skill = {
  name: 'Shotgun Impact',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a2/Shotgun_Impact_U100.png',
  category: 'ENFORCER',
  tree: 'SHOTGUNNER',
  tier: 2,
  position: 1,
  basic: 'Your weapon stability with all shotguns is increased by 8. You deal 5% more damage with shotguns.',
  ace: 'You deal an additional 10% more damage with shotguns.',
  state: 'OFF',
};

export const farAway: Skill = {
  name: 'Far Away',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/7/74/Far_Away.png',
  category: 'ENFORCER',
  tree: 'SHOTGUNNER',
  tier: 3,
  position: 0,
  basic: 'Your accuracy bonus while aiming down sights with Shotguns is increased by 40%.',
  ace: 'You gain a 50% increased effective range with Shotguns when aiming down sights.',
  state: 'OFF',
};

export const closeBy: Skill = {
  name: 'Close By',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/5b/Close_By.png',
  category: 'ENFORCER',
  tree: 'SHOTGUNNER',
  tier: 3,
  position: 1,
  basic: 'You can now hip-fire with your Shotguns while sprinting.',
  ace: 'Your rate of fire is increased by 35% while firing from the hip with single shot Shotguns. Shotguns with magazines have their magazine sizes increased by 15 shells.',
  state: 'OFF',
};

export const overkill: Skill = {
  name: 'Overkill',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/c5/Overkill.png',
  category: 'ENFORCER',
  tree: 'SHOTGUNNER',
  tier: 4,
  position: 0,
  basic: 'When you kill an enemy with a shotgun or the OVE9000 portable saw, you receive a 75% damage increase for 20 seconds.',
  ace: 'The damage bonus now applies to all weapons. Skill must still be activated using a Shotgun or the OVE9000 portable saw. Your weapon swap speed is increased by 80%.',
  state: 'OFF',
};

// TANK

export const resilience: Skill = {
  name: 'Resilience',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/6/6a/Thick_Skin.png',
  category: 'ENFORCER',
  tree: 'TANK',
  tier: 1,
  position: 0,
  basic: 'Increase your armor recovery rate by 15%.',
  ace: 'Reduce the visual effect duration of Flashbangs by 75%.',
  state: 'OFF',
};

export const dieHard: Skill = {
  name: 'Die Hard',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/0a/Die_Hard_U100.png',
  category: 'ENFORCER',
  tree: 'TANK',
  tier: 2,
  position: 0,
  basic: 'You take 50% less damage while interacting with objects.',
  ace: 'Increases the armor of all Ballistic vests by 20.',
  state: 'OFF',
};

export const transporter: Skill = {
  name: 'Transporter',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/3/34/Transporter_U100.png',
  category: 'ENFORCER',
  tree: 'TANK',
  tier: 2,
  position: 1,
  basic: 'You can throw bags 50% further.',
  ace: 'For each 10 armor points the bag movement penalty is reduced by 1%.',
  state: 'OFF',
};

export const shockAndAwe: Skill = {
  name: 'Shock And Awe',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/6/6b/Shock_And_Awe.png',
  category: 'ENFORCER',
  tree: 'TANK',
  tier: 3,
  position: 0,
  basic: 'Increases the armor recovery rate for you and your crew by 25%.',
  ace: "Enables your weapons to have a chance to knock back Shield enemies when attacking them. Ranged weapons' knock back chance is increased the higher the total damage of the weapon is. Melee weapons' knock back chance is 100%.",
  state: 'OFF',
};

export const bullseye: Skill = {
  name: 'bullseye',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/7/72/Bullseye.png',
  category: 'ENFORCER',
  tree: 'TANK',
  tier: 3,
  position: 1,
  basic: 'You regenerate 5 armor for each successful headshot. This effect cannot occur more than once every 2 seconds.',
  ace: 'You regenerate an additional 20 armor for each successful headshot.',
  state: 'OFF',
};

export const ironMan: Skill = {
  name: 'Iron Man',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/2/2a/Man_of_Iron.png',
  category: 'ENFORCER',
  tree: 'TANK',
  tier: 4,
  position: 0,
  basic: 'Your total armor values is increased by 30%.',
  ace: 'Unlocks the ability to wear the Improved Combined Tactical Vest.',
  state: 'OFF',
};

// AMMO SPECIALIST

export const scavenger: Skill = {
  name: 'Scavenger',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/1/18/Scavenger.png',
  category: 'ENFORCER',
  tree: 'AMMO SPECIALIST',
  tier: 1,
  position: 0,
  basic: 'Your ammo box pick up range is increased by 50%.',
  ace: 'Every 6th enemy you kill will drop an extra ammo box.',
  state: 'OFF',
};

export const bulletstorm: Skill = {
  name: 'Bulletstorm',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/e/e8/Bulletstorm.png',
  category: 'ENFORCER',
  tree: 'AMMO SPECIALIST',
  tier: 2,
  position: 0,
  basic:
    'Ammo bags placed by you grant players the ability to shoot without depleting their ammunition for up to 5 seconds after interacting with it. The more ammo players replenish, the longer the duration of the effect.',
  ace: 'Increases the base duration of the effect by up to 15 seconds.',
  state: 'OFF',
};

export const portableSaw: Skill = {
  name: 'Portable Saw',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/4/43/Portable_Saw.png',
  category: 'ENFORCER',
  tree: 'AMMO SPECIALIST',
  tier: 2,
  position: 1,
  basic: 'Unlocks the OVE9000 portable saw for you to use as a secondary weapon.',
  ace: 'You gain 1 extra saw blade for the OVE9000 portable saw. You replace your saw blades with carbon blades, increasing your saw efficiency by 40%.',
  state: 'OFF',
};

export const extraLead: Skill = {
  name: 'Extra Lead',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/4/44/Extra_Lead.png',
  category: 'ENFORCER',
  tree: 'AMMO SPECIALIST',
  tier: 3,
  position: 0,
  basic: 'You can now place 2 ammo bags instead of just one.',
  ace: 'Each ammo bag contains 50% more ammunition.',
  state: 'OFF',
};

export const sawMassacre: Skill = {
  name: 'Saw Massacre',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/04/Carbon_Blade.png',
  category: 'ENFORCER',
  tree: 'AMMO SPECIALIST',
  tier: 3,
  position: 1,
  basic: 'Reducing the wear down of the blades on enemies by 50%.',
  ace: 'You can now saw through shield enemies with your OVE9000 portable saw. When killing an enemy with the saw, you have a 50% chance to cause nearby enemies in a 10m radius to panic. Panic will make enemies go into short bursts of uncontrollable fear.',
  state: 'OFF',
};

export const fullyLoaded: Skill = {
  name: 'Fully Loaded',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/8/8b/Fully_Loaded.png',
  category: 'ENFORCER',
  tree: 'AMMO SPECIALIST',
  tier: 4,
  position: 0,
  basic: 'Your total ammo capacity is increased by 25%.',
  ace: 'Increases the amount of ammo you gain from ammo boxes by 75%. You also gain a 5% base chance to get a throwable from an ammo box. The base chance is increased by 1% for each ammo box you pick up that does not contain a throwable. When a throwable has been found, the chance is reset to its base value.',
  state: 'OFF',
};
