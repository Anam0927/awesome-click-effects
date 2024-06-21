import { EFFECT_FNS, EFFECT_NAMES } from "./effectFns";
import "./styles/index.scss";

const playEffect = (
  effectDiv: HTMLDivElement,
  effectName?: keyof typeof EFFECT_NAMES
) => {
  if (effectName) {
    EFFECT_FNS[effectName](effectDiv);
  }
  effectDiv.classList.add("play");
  effectDiv.onanimationend = () => effectDiv.classList.remove("play");
};

const effectContainers = document.querySelectorAll(
  ".container>div"
) as NodeListOf<HTMLDivElement>;
effectContainers.forEach((effectContainer) => {
  const effectDiv = effectContainer.querySelector(".effect") as HTMLDivElement;

  effectContainer.onclick = (e) => {
    const pos = {
      left: `${e.clientX - effectContainer.getBoundingClientRect().left}px`,
      top: `${e.clientY - effectContainer.getBoundingClientRect().top}px`,
    };

    effectDiv.style.top = pos.top;
    effectDiv.style.left = pos.left;

    if (effectDiv === document.querySelector(".laser-gun .effect")) {
      playEffect(effectDiv, EFFECT_NAMES.LASER_GUN);
      return;
    }

    if (effectDiv === document.querySelector(".explosion .effect")) {
      playEffect(effectDiv, EFFECT_NAMES.EXPLOSION);
      return;
    }

    if (effectDiv === document.querySelector(".magic-spell .effect")) {
      playEffect(effectDiv, EFFECT_NAMES.MAGIC_SPELL);
      return;
    }

    if (effectDiv === document.querySelector(".glitter .effect")) {
      playEffect(effectDiv, EFFECT_NAMES.GLITTER);
      return;
    }

    playEffect(effectDiv);
  };
});
