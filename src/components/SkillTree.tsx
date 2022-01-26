import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import SkillTile, { Skill, Category, SkillState, Tree } from './SkillTile';
import { maxPoints } from './SkillMaster';

interface SkillTreeProps {
  category: Category;
  name: Tree;
  skillTiles: Array<Skill>;
  updatePoints: (tree: Tree, points: number) => void;
  totalPoints: () => number;
}

const tierUnlock = [0, 1, 3, 18];

export default function SkillTree({ category, name, skillTiles, updatePoints, totalPoints }: SkillTreeProps) {
  const [points, setPoints] = useState(0);
  // const tierCost = [
  //   [1, 3],
  //   [2, 4],
  //   [3, 6],
  //   [4, 8],
  // ];
  function checkIllegalSkills() {
    let pointCounter = 0;
    for (let i = 0; i < skillTiles.length; i++) {
      if (skillTiles[i].state === 'OFF') continue;
      if (pointCounter < tierUnlock[skillTiles[i].tier - 1]) {
        skillTiles[i].state = 'OFF';
      } else {
        pointCounter += skillTiles[i].state === 'BASIC' ? skillTiles[i].tier : Math.max(3, skillTiles[i].tier * 2);
      }
    }
  }

  function handleSkillClick(skill: Skill): SkillState {
    let pointsToAdd = 0;

    if (points < tierUnlock[skill.tier - 1]) {
      return (skill.state = 'OFF');
    }

    switch (skill.state) {
      case 'BASIC':
        skill.state = 'ACED';
        pointsToAdd = Math.max(3, skill.tier * 2);
        break;
      case 'ACED':
        skill.state = 'OFF';
        pointsToAdd = 0;
        break;

      default:
        skill.state = 'BASIC';
        pointsToAdd = skill.tier;
        break;
    }

    if (pointsToAdd + totalPoints() > maxPoints) {
      skill.state = 'OFF';
    }
    if (skill.state === 'OFF') checkIllegalSkills();

    const newPoints = calculatePoints(skillTiles);
    setPoints(newPoints);
    updatePoints(skill.tree, newPoints);

    return skill.state;
  }

  function calculatePoints(skillTiles: Array<Skill>): number {
    const skillpoints = skillTiles.map((skill) => {
      switch (skill.state) {
        case 'BASIC':
          return skill.tier;
        case 'ACED':
          return skill.tier + Math.max(3, skill.tier * 2);

        default:
          return 0;
      }
    });
    return skillpoints.reduce((prevValue, currValue) => prevValue + currValue);
  }

  function getSkillRows(skillTiles: Array<Skill>): JSX.Element {
    let rows: Array<JSX.Element> = [];

    for (let i = 4; i >= 0; i--) {
      rows.push(
        <TableRow key={`tier ` + i} sx={{ display: 'flex', justifyContent: 'space-around', margin: 0 }}>
          {skillTiles
            .filter((skill) => skill.tier === i)
            .map((skill) => (
              <TableCell component="td" key={skill.name} scope="row" sx={{ p: 0, borderBottom: 0 }}>
                <SkillTile
                  skillName={skill.name}
                  skillState={skill.state}
                  skillImageURL={skill.imageURL}
                  handleClick={() => {
                    return handleSkillClick(skill);
                  }}
                />
              </TableCell>
            ))}
        </TableRow>
      );
    }
    return <>{rows}</>;
  }
  return (
    <Table sx={{ width: 250, backgroundColor: '#222222', m: '1rem' }} aria-label={`${category}: ${name} table`}>
      <TableBody>
        {getSkillRows(skillTiles)}
        <TableRow>
          <TableCell component="td" sx={{ p: 1, m: 0, borderBottom: 0 }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                m: 0,
                textAlign: 'center',
                fontSize: '1.25rem',
              }}
            >
              {name}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ p: 1, m: 0, borderBottom: 0 }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                m: 0,
                textAlign: 'center',
                fontSize: '2rem',
              }}
            >
              {points}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
