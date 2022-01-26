import { Skill } from '../components/SkillTile';

// ENGINEER

export const thirdLaw: Skill = {
  name: 'Third Law',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/f/ff/Third_Law.png',
  category: 'TECHNICIAN',
  tree: 'ENGINEER',
  tier: 1,
  position: 0,
  basic: 'The cost of deploying a sentry gun is reduced by 5%.',
  ace: 'Your sentry guns gain a protective shield.',
  state: 'OFF',
};

export const sentryTargetingPackage: Skill = {
  name: 'Sentry Targeting Package',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/58/Sentry_Targeting_Package2.png',
  category: 'TECHNICIAN',
  tree: 'ENGINEER',
  tier: 2,
  position: 0,
  basic: 'Your sentry guns gain a 100% increase in accuracy.',
  ace: 'Your sentry guns rotation speed is increased by 150%. Your sentry guns also have 50% more ammunition.',
  state: 'OFF',
};

export const ecoSentry: Skill = {
  name: 'Eco Sentry',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a8/Eco_Sentry.png',
  category: 'TECHNICIAN',
  tree: 'ENGINEER',
  tier: 2,
  position: 1,
  basic: 'The cost of deploying a sentry gun is reduced by 5%.',
  ace: 'Your sentry guns gain 150% increased health.',
  state: 'OFF',
};

export const engineering: Skill = {
  name: 'Engineering',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/3/3e/Engineering.png',
  category: 'TECHNICIAN',
  tree: 'ENGINEER',
  tier: 3,
  position: 0,
  basic: 'You can now select a less noisy version of the sentry guns, making them much less likely to be targeted by enemies.',
  ace: 'You can now toggle AP rounds on your sentry guns, lowering the rate of fire by 75%, but increasing the damage by 250% and allowing it to pierce through enemies and shields.',
  state: 'OFF',
};

export const jackOfAllTrades: Skill = {
  name: 'Jack Of All Trades',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/1/15/Jack_Of_All_Trades_U100.png',
  category: 'TECHNICIAN',
  tree: 'ENGINEER',
  tier: 3,
  position: 1,
  basic: 'You deploy and interact with all deployables 100% faster.',
  ace: 'You can now equip a second deployable to bring with you. If your deployable is equipped as a secondary deployable, you can only bring half of what you would bring if it was equipped as a primary deployable.',
  state: 'OFF',
};

export const towerDefense: Skill = {
  name: 'Tower Defense',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/ab/Tower_Defense.png',
  category: 'TECHNICIAN',
  tree: 'ENGINEER',
  tier: 4,
  position: 0,
  basic: 'You can now carry 1 extra sentry gun.',
  ace: 'You can now carry an additional 2 extra sentry guns.',
  state: 'OFF',
};

// BREACHER

export const hardwareExpert: Skill = {
  name: 'Hardware Expert',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/1/18/Hardware_Expert_U100.png',
  category: 'TECHNICIAN',
  tree: 'BREACHER',
  tier: 1,
  position: 0,
  basic:
    'You fix drills and saws 25% faster. Decrease trip mine deploy time by 20%. Drills and saws are also silent. Civilians and guards must see the drill or saw in order to become alerted.',
  ace: 'Gives your drills and saws a 10% chance to automatically restart after breaking.',
  state: 'OFF',
};

export const combatEngineering: Skill = {
  name: 'Combat Engineering',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/f/f4/Combat_Engineering.png',
  category: 'TECHNICIAN',
  tree: 'BREACHER',
  tier: 2,
  position: 0,
  basic: 'The radius of your trip mine explosion is increase by 30%.',
  ace: 'Your trip mine damage is increase by 50%.',
  state: 'OFF',
};

export const drillSawgeant: Skill = {
  name: 'Drill Sawgeant',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/cb/Drill_Sawgeant.png',
  category: 'TECHNICIAN',
  tree: 'BREACHER',
  tier: 2,
  position: 1,
  basic: 'Your drill and saw timer is decreased by 15%.',
  ace: 'Your drill and saw timer is decreased by an additional 15%.',
  state: 'OFF',
};

export const moreFirepower: Skill = {
  name: 'More Firepower',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/b/ba/More_Firepower.png',
  category: 'TECHNICIAN',
  tree: 'BREACHER',
  tier: 3,
  position: 0,
  basic: 'You gain 1 more shaped charge and 4 more trip mines.',
  ace: 'You gain 2 more shaped charges and 7 more trip mines.',
  state: 'OFF',
};

export const kickstarter: Skill = {
  name: 'Kickstarter',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/a/a4/Kickstarter.png',
  category: 'TECHNICIAN',
  tree: 'BREACHER',
  tier: 3,
  position: 1,
  basic: 'Your drills and saws gain an additional 20% chance to automatically restart after breaking.',
  ace: 'Enables the ability to reset a broken drill or saw with a melee attack. The ability has a 50% chance to fix the drill or saw. The ability can only be used once per time the drill or saw is broken.',
  state: 'OFF',
};

export const fireTrap: Skill = {
  name: 'Fire Trap',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/c/c2/Fire_Trap.png',
  category: 'TECHNICIAN',
  tree: 'BREACHER',
  tier: 4,
  position: 0,
  basic: 'Your trip mines now spread fire around the area of detonation for 10 seconds in a 4 meter diameter.',
  ace: 'Increases the fire effect duration by 10 seconds and increases the fire effect radius by 50%.',
  state: 'OFF',
};

// OPPRESSOR

export const steadyGrip: Skill = {
  name: 'Steady Grip',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/5/56/Steady_Grip.png',
  category: 'TECHNICIAN',
  tree: 'OPPRESSOR',
  tier: 1,
  position: 0,
  basic: 'You gain 8 weapon accuracy.',
  ace: 'You gain 16 weapon stability.',
  state: 'OFF',
};

export const heavyImpact: Skill = {
  name: 'Heavy Impact',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/9/97/Heavy_Impact.png',
  category: 'TECHNICIAN',
  tree: 'OPPRESSOR',
  tier: 2,
  position: 0,
  basic: 'Your shots have a 5% chance to stagger all enemies except Bulldozers and Captain Winters.',
  ace: 'Increase your stagger chance to 20%.',
  state: 'OFF',
};

export const fireControl: Skill = {
  name: 'Fire Control',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/1/1a/Fire_Control.png',
  category: 'TECHNICIAN',
  tree: 'OPPRESSOR',
  tier: 2,
  position: 1,
  basic: 'You gain 12 weapon accuracy while firing from the hip.',
  ace: 'Your accuracy penalty is decreased by 20% when shooting while moving.',
  state: 'OFF',
};

export const lockNLoad: Skill = {
  name: "Lock N' Load",
  imageURL: 'https://static.wikia.nocookie.net/payday/images/9/90/Lock_N%27_Load.png',
  category: 'TECHNICIAN',
  tree: 'OPPRESSOR',
  tier: 3,
  position: 0,
  basic: 'You can now hip-fire with your weapons while sprinting.',
  ace: 'Killing 2 enemies with SMGs, LMGs, Assault Rifles or Special Weapons set on automatic fire mode will increase your next reload speed by up to 100%. This bonus is reduced by 1% for each bullet above 20 in the total magazine size, down to a minimum of 40% reload speed increase.',
  state: 'OFF',
};

export const surefire: Skill = {
  name: 'Surefire',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/0/02/Surefire.png',
  category: 'TECHNICIAN',
  tree: 'OPPRESSOR',
  tier: 3,
  position: 1,
  basic: `Your SMGs, LMGs and Assault Rifles gain 15 more bullets in their magazine. This does not affect the "Lock n' Load" Ace skill.`,
  ace: 'Your ranged weapons can now pierce through enemy body armor.',
  state: 'OFF',
};

export const bodyExpertise: Skill = {
  name: 'Body Expertise',
  imageURL: 'https://static.wikia.nocookie.net/payday/images/9/99/Body_Expertise.png',
  category: 'TECHNICIAN',
  tree: 'OPPRESSOR',
  tier: 4,
  position: 0,
  basic:
    '30% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.',
  ace: '90% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.',
  state: 'OFF',
};
