import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

export interface Skill {
  name: string;
  imageURL: string;
  category: Category;
  tree: Tree;
  tier: 1 | 2 | 3 | 4;
  position: 0 | 1;
  basic: string;
  ace: string;
  state: SkillState;
  //   mechanics: string;
  //   strategy: string;
}

export type Category = 'MASTERMIND' | 'ENFORCER' | 'TECHNICIAN' | 'GHOST' | 'FUGITIVE';
export type SkillState = 'OFF' | 'BASIC' | 'ACED';
export type Tree =
  | 'MEDIC'
  | 'CONTROLLER'
  | 'SHARPSHOOTER'
  | 'SHOTGUNNER'
  | 'TANK'
  | 'AMMO SPECIALIST'
  | 'ENGINEER'
  | 'BREACHER'
  | 'OPPRESSOR'
  | 'SHINOBI'
  | 'ARTFUL DODGER'
  | 'SILENT KILLER'
  | 'GUNSLINGER'
  | 'REVENANT'
  | 'BRAWLER';

interface SkillTileProps {
  skillName: string;
  skillState: SkillState;
  skillImageURL: string;
  handleClick: () => SkillState;
}

export default function SkillTile({ skillName, skillState, skillImageURL, handleClick }: SkillTileProps) {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  const [selected, setSelected] = useState<SkillState>(skillState);

  let aceLoaded = true,
    imgLoaded = false;

  function drawCustomImage(ctx: CanvasRenderingContext2D, ace: HTMLImageElement, img: HTMLImageElement) {
    if (aceLoaded && imgLoaded) {
      ctx.drawImage(ace, 0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }

  const getTextColor = (selected: SkillState) => {
    switch (selected) {
      case 'BASIC':
        return '#ffffff';
      case 'ACED':
        return '#FFD700';

      default:
        return '#000000';
    }
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, 48, 48);
    let img = new Image();
    img.src = skillImageURL;
    let ace = new Image();

    if (selected === 'OFF') ctx.filter = 'brightness(30%)';
    else if (selected === 'BASIC') ctx.filter = 'brightness(100%)';
    else {
      aceLoaded = false;
      ace.src = 'http://acefinishing.net/wp-content/uploads/2017/12/spades-256.png';
    }

    ace.onload = function () {
      aceLoaded = true;
      drawCustomImage(ctx, ace, img);
    };
    img.onload = function () {
      imgLoaded = true;
      drawCustomImage(ctx, ace, img);
    };
  }, [selected, skillImageURL]);

  useEffect(() => {
    setSelected(skillState);
  }, [skillState]);

  return (
    <Grid item>
      <Button
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 100 }}
        onClick={() => {
          setSelected(handleClick());
        }}
      >
        <canvas height="48" width="48" ref={canvasRef} />
        <Typography
          sx={{
            color: getTextColor(selected),
            m: 1,
            textAlign: 'center',
            fontSize: '.75rem',
          }}
        >
          {skillName.toUpperCase()}
        </Typography>
      </Button>
    </Grid>
  );
}
