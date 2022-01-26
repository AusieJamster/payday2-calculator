import React, { useState } from 'react';
import SkillTree from './SkillTree';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import { Category, Skill, Tree } from './SkillTile';

import * as mMind from '../resources/skill-data-mastermind';
import * as enforcer from '../resources/skill-data-enforcer';
import * as tech from '../resources/skill-data-technician';
import * as ghost from '../resources/skill-data-ghost';
import * as fugitive from '../resources/skill-data-fugitive';

interface ITreeSkills {
  [key: string]: Array<Skill>;
}
interface ICategory {
  [key: string]: ITreeSkills;
}
type TreePoints = {
  [key in Tree]: number;
};

const allSkills: ICategory = {
  MASTERMIND: {
    MEDIC: [mMind.combatMedic, mMind.quickFix, mMind.painkillers, mMind.uppers, mMind.combatDoctor, mMind.inspire],
    CONTROLLER: [mMind.forcedFriendship, mMind.confident, mMind.joker, mMind.stockholmSyndrome, mMind.partnersInCrime, mMind.hostageTaker],
    SHARPSHOOTER: [mMind.stableShot, mMind.rifleman, mMind.marksman, mMind.ammoEfficiency, mMind.aggressiveReload, mMind.graze],
  },
  ENFORCER: {
    SHOTGUNNER: [enforcer.underdog, enforcer.shotgunCQB, enforcer.shotgunImpact, enforcer.farAway, enforcer.closeBy, enforcer.overkill],
    TANK: [enforcer.resilience, enforcer.dieHard, enforcer.transporter, enforcer.shockAndAwe, enforcer.bullseye, enforcer.ironMan],
    AMMO_SPECIALIST: [enforcer.scavenger, enforcer.bulletstorm, enforcer.portableSaw, enforcer.extraLead, enforcer.sawMassacre, enforcer.fullyLoaded],
  },
  TECHNICIAN: {
    ENGINEER: [tech.thirdLaw, tech.sentryTargetingPackage, tech.ecoSentry, tech.engineering, tech.jackOfAllTrades, tech.towerDefense],
    BREACHER: [tech.hardwareExpert, tech.combatEngineering, tech.drillSawgeant, tech.moreFirepower, tech.kickstarter, tech.fireTrap],
    OPPRESSOR: [tech.steadyGrip, tech.heavyImpact, tech.fireControl, tech.lockNLoad, tech.surefire, tech.bodyExpertise],
  },
  GHOST: {
    SHINOBI: [ghost.chameleon, ghost.cleaner, ghost.sixthSense, ghost.nimble, ghost.ecmOverdrive, ghost.ecmSpecialist],
    ARTFUL_DODGER: [ghost.duckAndCover, ghost.parkour, ghost.innerPockets, ghost.direNeed, ghost.shockproof, ghost.sneakyBastard],
    SILENT_KILLER: [ghost.secondWind, ghost.opticalIllusions, ghost.theProfessional, ghost.lowBlow, ghost.highValueTarget, ghost.unseenStrike],
  },
  FUGITIVE: {
    GUNSLINGER: [fugitive.equilibrium, fugitive.gunNut, fugitive.akimbo, fugitive.oneHandedTalent, fugitive.desperado, fugitive.triggerHappy],
    REVENANT: [fugitive.nineLives, fugitive.runningFromDeath, fugitive.upYouGo, fugitive.swanSong, fugitive.feignDeath, fugitive.messiah],
    BRAWLER: [fugitive.martialArts, fugitive.bloodthirst, fugitive.pumpingIron, fugitive.counterstrike, fugitive.berserker, fugitive.frenzy],
  },
};
export const maxPoints = 100;

export default function SkillMaster() {
  const [screen, setScreen] = useState<0 | 1 | 2 | 3 | 4>(1);
  // const theme = useTheme();
  // const windowLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [totalManager, setTotalManager] = useState<TreePoints>({
    MEDIC: 0,
    CONTROLLER: 0,
    SHARPSHOOTER: 0,
    SHOTGUNNER: 0,
    TANK: 0,
    'AMMO SPECIALIST': 0,
    ENGINEER: 0,
    BREACHER: 0,
    OPPRESSOR: 0,
    SHINOBI: 0,
    'ARTFUL DODGER': 0,
    'SILENT KILLER': 0,
    GUNSLINGER: 0,
    REVENANT: 0,
    BRAWLER: 0,
  });

  const updatePoints = (tree: Skill['tree'], points: number) => {
    const newPoints = totalManager;
    newPoints[tree] = points;
    setTotalManager(newPoints);
  };

  const getPointTotal = () => {
    return Object.values(totalManager).reduce((prevValue, currValue) => prevValue + currValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2 | 3 | 4) => {
    setScreen(newValue);
  };

  function getTreeFromScreenID(screen: 0 | 1 | 2 | 3 | 4) {
    return screen === 0 ? 'MASTERMIND' : screen === 1 ? 'ENFORCER' : screen === 2 ? 'TECHNICIAN' : screen === 3 ? 'GHOST' : 'FUGITIVE';
  }

  function TabPanel({ index, data, ...other }: { index: Category; data: Array<{ name: Tree; tiles: Skill[] }> }) {
    const helperFunctions = {
      updatePoints: updatePoints,
      totalPoints: getPointTotal,
    };

    const TreeName = getTreeFromScreenID(screen);

    return (
      <div role="tabpanel" hidden={TreeName !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
        {TreeName === index && (
          <Box component="div" sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <SkillTree category={index} name={data[0].name} skillTiles={data[0].tiles} {...helperFunctions} />
            <SkillTree category={index} name={data[1].name} skillTiles={data[1].tiles} {...helperFunctions} />
            <SkillTree category={index} name={data[2].name} skillTiles={data[2].tiles} {...helperFunctions} />
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Typography sx={{ fontSize: '3rem', color: 'white', textAlign: 'center' }}>Payday 2 - Skill Calculator</Typography>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', bgcolor: '#222222' }}>
        <Tabs value={screen} onChange={handleChange} aria-label="tabs">
          <Tab label={'MASTERMIND'} id={`tab-MASTERMIND`} aria-labelledby={`tabpanel-MASTERMIND`} sx={{ color: '#ffffff' }} />
          <Tab label={'ENFORCER'} id={`tab-ENFORCER`} aria-labelledby={`tabpanel-ENFORCER`} sx={{ color: '#ffffff' }} />
          <Tab label={'TECHNICIAN'} id={`tab-TECHNICIAN`} aria-labelledby={`tabpanel-TECHNICIAN`} sx={{ color: '#ffffff' }} />
          <Tab label={'GHOST'} id={`tab-GHOST`} aria-labelledby={`tabpanel-GHOST`} sx={{ color: '#ffffff' }} />
          <Tab label={'FUGITIVE'} id={`tab-FUGITIVE`} aria-labelledby={`tabpanel-FUGITIVE`} sx={{ color: '#ffffff' }} />
        </Tabs>
      </Container>
      {/* <Typography sx={{ fontSize: '2rem', color: 'white', textAlign: 'center' }}>{getTreeFromScreenID(screen)}</Typography> */}
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <TabPanel
          index={'MASTERMIND'}
          data={[
            { name: 'MEDIC', tiles: allSkills.MASTERMIND.MEDIC },
            { name: 'CONTROLLER', tiles: allSkills.MASTERMIND.CONTROLLER },
            { name: 'SHARPSHOOTER', tiles: allSkills.MASTERMIND.SHARPSHOOTER },
          ]}
        />
        <TabPanel
          index={'ENFORCER'}
          data={[
            { name: 'SHOTGUNNER', tiles: allSkills.ENFORCER.SHOTGUNNER },
            { name: 'TANK', tiles: allSkills.ENFORCER.TANK },
            { name: 'AMMO SPECIALIST', tiles: allSkills.ENFORCER.AMMO_SPECIALIST },
          ]}
        />
        <TabPanel
          index={'TECHNICIAN'}
          data={[
            { name: 'ENGINEER', tiles: allSkills.TECHNICIAN.ENGINEER },
            { name: 'BREACHER', tiles: allSkills.TECHNICIAN.BREACHER },
            { name: 'OPPRESSOR', tiles: allSkills.TECHNICIAN.OPPRESSOR },
          ]}
        />
        <TabPanel
          index={'GHOST'}
          data={[
            { name: 'SHINOBI', tiles: allSkills.GHOST.SHINOBI },
            { name: 'ARTFUL DODGER', tiles: allSkills.GHOST.ARTFUL_DODGER },
            { name: 'SILENT KILLER', tiles: allSkills.GHOST.SILENT_KILLER },
          ]}
        />
        <TabPanel
          index={'FUGITIVE'}
          data={[
            { name: 'GUNSLINGER', tiles: allSkills.FUGITIVE.GUNSLINGER },
            { name: 'REVENANT', tiles: allSkills.FUGITIVE.REVENANT },
            { name: 'BRAWLER', tiles: allSkills.FUGITIVE.BRAWLER },
          ]}
        />
      </Box>
    </>
  );
}
