import {
  getComputedStyleProperty,
  getRandomNumber,
  setCustomStyleProperty,
} from "./utils";

type EffectFn = (effectDiv: HTMLDivElement) => void;

const laserGun: EffectFn = (effectDiv) => {
  const hue = Math.random() * 360;
  setCustomStyleProperty(effectDiv, "--hue", hue);
  setCustomStyleProperty(
    effectDiv,
    "--color",
    `hsl(${hue}, ${Math.random() * 100}%, ${getRandomNumber(50, 100)}%)`
  );
  setCustomStyleProperty(effectDiv, "--angle", getRandomNumber(5, 9) * 10);

  const minSize = getComputedStyleProperty(effectDiv, "--min-size");
  const maxSize = getComputedStyleProperty(effectDiv, "--max-size");
  setCustomStyleProperty(
    effectDiv,
    "--size",
    `${getRandomNumber(minSize, maxSize)}px`
  );
};

const explosion: EffectFn = (effectDiv) => {
  const NUMBER_OF_EXPLOSIVE_PARTICLES = 4;
  const MAX_PARTICLE_SIZE = 30;
  const MIN_PARTICLE_SIZE = 20;

  setCustomStyleProperty(effectDiv, "--angle", Math.random() * 90);

  for (let i = 0; i < NUMBER_OF_EXPLOSIVE_PARTICLES; i++) {
    setCustomStyleProperty(
      effectDiv,
      `--size${i + 1}`,
      `${getRandomNumber(MIN_PARTICLE_SIZE, MAX_PARTICLE_SIZE)}px`
    );
  }
};

const magicSpell: EffectFn = (effectDiv) => {
  const MAX_SPELL_SIZE = 50;
  const MIN_SPELL_SIZE = 25;
  setCustomStyleProperty(
    effectDiv,
    "--size",
    `${getRandomNumber(MIN_SPELL_SIZE, MAX_SPELL_SIZE)}px`
  );

  const clickCount = getComputedStyleProperty(effectDiv, "--count");
  const svg = document.querySelector(
    ".magic-spell .effect svg"
  )! as HTMLDivElement;

  svg.style.animationName = clickCount % 2 === 0 ? "brightEven" : "brightOdd";

  setCustomStyleProperty(effectDiv, "--count", clickCount + 1);
};

const glitter: EffectFn = (effectDiv) => {
  const MAX_GLITTER_PARTICLE_SIZE = 15;
  const MIN_GLITTER_PARTICLE_SIZE = 2;
  const NUMBER_OF_GLITTER_PARTICLES = 10;
  for (let i = 0; i < NUMBER_OF_GLITTER_PARTICLES; i++) {
    setCustomStyleProperty(
      effectDiv,
      `--size${i + 1}`,
      `${getRandomNumber(
        MIN_GLITTER_PARTICLE_SIZE,
        MAX_GLITTER_PARTICLE_SIZE
      )}px`
    );
  }

  setCustomStyleProperty(effectDiv, "--hue", Math.random() * 360);
  setCustomStyleProperty(
    effectDiv,
    "--luminance",
    `${getRandomNumber(50, 100)}%`
  );
};

export const EFFECT_FNS = {
  LASER_GUN: laserGun,
  EXPLOSION: explosion,
  MAGIC_SPELL: magicSpell,
  GLITTER: glitter,
};

export const EFFECT_NAMES: { [T in keyof typeof EFFECT_FNS]: T } = {
  LASER_GUN: "LASER_GUN",
  EXPLOSION: "EXPLOSION",
  MAGIC_SPELL: "MAGIC_SPELL",
  GLITTER: "GLITTER",
};
