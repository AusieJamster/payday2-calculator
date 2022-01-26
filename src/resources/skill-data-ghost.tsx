import { Skill } from '../components/SkillTile';

// SHINOBI

export const chameleon: Skill = {
  name: 'Chameleon',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/f/f5/Chameleon.png',
  category: 'GHOST',
  tree: 'SHINOBI',
  tier: 1,
  position: 0,
  basic: 'Increases the time before you start getting detected by 25% while in casing mode. You can also mark enemies while in casing mode',
  ace: 'You can pick up items while in casing mode. You also gain 30% more value to items and cash that you pick up.',
  state: 'OFF',
};

export const cleaner: Skill = {
  name: 'Cleaner',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a9/Cleaner.png',
  category: 'GHOST',
  tree: 'SHINOBI',
  tier: 2,
  position: 0,
  basic: 'You gain 1 additional body bag in your inventory. Also increases the body bag inventory space to 3 from 2.',
  ace: 'You gain the ability to place 2 body bag cases.',
  state: 'OFF',
};

export const sixthSense: Skill = {
  name: 'Sixth Sense',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/d/d5/Sixth_Sense.png',
  category: 'GHOST',
  tree: 'SHINOBI',
  tier: 2,
  position: 1,
  basic: 'You gain the ability to automatically mark enemies within a 10 meter radius around you after standing still for 3.5 seconds while in stealth.',
  ace: 'You gain access to all insider assets. Cleaning costs after killing a civilian is reduced by 75%.',
  state: 'OFF',
};

export const nimble: Skill = {
  name: 'Nimble',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/cb/Nimble.png',
  category: 'GHOST',
  tree: 'SHINOBI',
  tier: 3,
  position: 0,
  basic: 'You gain the ability to disable 1 camera from detecting you and your crew. Effect lasts for 25 seconds.',
  ace: 'You lockpick 100% faster. You also gain the ability to lockpick safes.',
  state: 'OFF',
};

export const ecmOverdrive: Skill = {
  name: 'ECM Overdrive',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/d/d3/ECM_Overdrive.png',
  category: 'GHOST',
  tree: 'SHINOBI',
  tier: 3,
  position: 1,
  basic: 'Your ECM jammer and feedback duration is increased by 25%.',
  ace: 'Your ECM jammer can now also be used to open certain electronic doors.',
  state: 'OFF',
};

export const ecmSpecialist: Skill = {
  name: 'ECM Specialist',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/2/2f/ECM_Specialist.png',
  category: 'GHOST',
  tree: 'SHINOBI',
  tier: 4,
  position: 0,
  basic: 'You can now place 2 ECM jammers instead of just one.',
  ace: 'The ECM jammer duration is increased by an additional 25% and the ECM feedback duration lasts 25% longer. Pagers are delayed by the ECM jammer.',
  state: 'OFF',
};

// ARTFUL DODGER

export const duckAndCover: Skill = {
  name: 'Duck And Cover',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/3/3e/Duck_And_Cover_U100.png',
  category: 'GHOST',
  tree: 'ARTFUL DODGER',
  tier: 1,
  position: 0,
  basic: 'Your stamina starts regenerating 25% earlier and 25% faster. You also sprint 25% faster',
  ace: 'You have a 10% increased chance to dodge while sprinting. You gain 15% chance to dodge while ziplining.',
  state: 'OFF',
};

export const parkour: Skill = {
  name: 'Parkour',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/d/d9/Parkour.png',
  category: 'GHOST',
  tree: 'ARTFUL DODGER',
  tier: 2,
  position: 0,
  basic: 'You gain 10% additional movement speed and 20% increased speed while climbing ladders.',
  ace: 'You gain the ability to sprint in any direction. Run and reload - you can reload your weapons while sprinting.',
  state: 'OFF',
};

export const innerPockets: Skill = {
  name: 'Inner Pockets',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/8/83/Inner_Pockets.png',
  category: 'GHOST',
  tree: 'ARTFUL DODGER',
  tier: 2,
  position: 1,
  basic: 'Increases the concealment of melee weapons by 2.',
  ace: 'Increases the concealment of all ballistic vests by 4.',
  state: 'OFF',
};

export const direNeed: Skill = {
  name: 'Dire Need',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/7/78/Dire_Need.png',
  category: 'GHOST',
  tree: 'ARTFUL DODGER',
  tier: 3,
  position: 0,
  basic: 'When your armor breaks, the first shot on every enemy will cause that enemy to stagger. This effect ends when your armor recovers.',
  ace: 'The effect persists for 6 seconds after your armor has recovered.',
  state: 'OFF',
};

export const shockproof: Skill = {
  name: 'Shockproof',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/9/95/Shockproof.png',
  category: 'GHOST',
  tree: 'ARTFUL DODGER',
  tier: 3,
  position: 1,
  basic: 'When tased, the shock effect has a 30% chance to backfire on the Taser, knocking them back.',
  ace: 'When tased, you are able to free yourself from the taser interacting with it within 2 seconds of getting tased.',
  state: 'OFF',
};

export const sneakyBastard: Skill = {
  name: 'Sneaky Bastard',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a5/Sneaky_Bastard.png',
  category: 'GHOST',
  tree: 'ARTFUL DODGER',
  tier: 4,
  position: 0,
  basic: 'You gain a 1% dodge chance for every 3 points of concealment under 35 up to 10%.',
  ace: 'You gain a 1% dodge chance for every 1 point of concealment under 35 up to 10%.',
  state: 'OFF',
};

// SILENT KILLER

export const secondWind: Skill = {
  name: 'Second Wind',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/6/62/Second_Wind.png',
  category: 'GHOST',
  tree: 'SILENT KILLER',
  tier: 1,
  position: 0,
  basic: 'When your armor breaks your movement speed is increase by 30% for 5 seconds.',
  ace: 'This effect also applies to your crew when triggered.',
  state: 'OFF',
};

export const opticalIllusions: Skill = {
  name: 'Optical Illusions',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/9/9d/Optical_Illusions.png',
  category: 'GHOST',
  tree: 'SILENT KILLER',
  tier: 2,
  position: 0,
  basic: 'You are 35% less likely to be targeted by enemies.',
  ace: 'You gain 1 concealment for each silenced weapon you equip and reduces the concealment penalty of silencers by 2.',
  state: 'OFF',
};

export const theProfessional: Skill = {
  name: 'The Professional',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/6/68/The_Professional.png',
  category: 'GHOST',
  tree: 'SILENT KILLER',
  tier: 2,
  position: 1,
  basic: 'You gain 8 weapon stability and 100% snap to zoom speed increase with silenced weapons.',
  ace: 'You gain 12 weapon accuracy with silenced weapons.',
  state: 'OFF',
};

export const lowBlow: Skill = {
  name: 'Low Blow',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/9/97/Low_Blow.png',
  category: 'GHOST',
  tree: 'SILENT KILLER',
  tier: 3,
  position: 0,
  basic: 'You gain a 3% critical hit chance for every 3 points of concealment under 35 up to 30%.',
  ace: 'You gain 3% critical hit chance for every 1 point of concealment under 35 up to 30%.',
  state: 'OFF',
};

export const highValueTarget: Skill = {
  name: 'High Value Target',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/0c/High_Value_Target.png',
  category: 'GHOST',
  tree: 'SILENT KILLER',
  tier: 3,
  position: 1,
  basic: 'Enemies you mark take 15% more damage.',
  ace: 'Enemies you mark take an additional 50% damage when further away than 10 meters. Increases the duration of marked enemies by 100% and you can now mark specials by aiming at them with any weapon.',
  state: 'OFF',
};

export const unseenStrike: Skill = {
  name: 'unseenStrike',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/1/16/Unseen_Strike.png',
  category: 'GHOST',
  tree: 'SILENT KILLER',
  tier: 4,
  position: 0,
  basic: 'If you do not lose any armor or health for 4 seconds, you gain 35% critical hit chance for 6 seconds.',
  ace: 'The critical hit chance duration is increased to 18 seconds.',
  state: 'OFF',
};
