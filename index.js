const divs = document.querySelectorAll('.container>div');
divs.forEach((div) => {
  const effectDiv = div.lastElementChild;

  div.onclick = (e) => {
    const pos = {
      left: e.clientX - div.getBoundingClientRect().left + 'px',
      top: e.clientY - div.getBoundingClientRect().top + 'px',
    };

    effectDiv.style.top = pos.top;
    effectDiv.style.left = pos.left;

    if (effectDiv === document.querySelector('.laser-gun .effect')) {
      const hue = Math.random() * 360;
      effectDiv.style.setProperty('--hue', hue);
      effectDiv.style.setProperty(
        '--color',
        `hsl(${hue}, ${Math.random() * 100}%, ${
          Math.random() * (100 - 50) + 50
        }%)`
      );

      effectDiv.style.setProperty(
        '--angle',
        (Math.random() * (9 - 5) + 5) * 10
      );

      const es = getComputedStyle(effectDiv);
      const minSize = Number(es.getPropertyValue('--min-size'));
      const maxSize = Number(es.getPropertyValue('--max-size'));
      effectDiv.style.setProperty(
        '--size',
        `${Math.random() * (maxSize - minSize) + minSize}px`
      );
    } else if (effectDiv === document.querySelector('.explosion .effect')) {
      effectDiv.style.setProperty('--angle', Math.random() * 90);

      const maxSize = 30;
      const minSize = 20;
      for (let i = 0; i < 4; i++) {
        effectDiv.style.setProperty(
          `--size${i + 1}`,
          `${Math.random() * (maxSize - minSize) + minSize}px`
        );
      }
    } else if (effectDiv === document.querySelector('.magic-spell .effect')) {
      const maxSize = 50;
      const minSize = 25;
      effectDiv.style.setProperty(
        '--size',
        `${Math.random() * (maxSize - minSize) + minSize}px`
      );

      const es = getComputedStyle(effectDiv);
      const clickCount = Number(es.getPropertyValue('--count'));
      const svg = document.querySelector('.magic-spell .effect svg');

      clickCount % 2 === 0
        ? (svg.style.animationName = 'brightEven')
        : (svg.style.animationName = 'brightOdd');

      effectDiv.style.setProperty('--count', clickCount + 1);
    } else if (effectDiv === document.querySelector('.glitter .effect')) {
      const maxSize = 15;
      const minSize = 2;
      for (let i = 0; i < 10; i++) {
        effectDiv.style.setProperty(
          `--size${i + 1}`,
          `${Math.random() * (maxSize - minSize) + minSize}px`
        );
      }

      effectDiv.style.setProperty('--hue', Math.random() * 360);

      effectDiv.style.setProperty(
        '--luminance',
        `${Math.random() * (100 - 50) + 50}%`
      );
    }

    effectDiv.classList.add('play');
    effectDiv.onanimationend = () => effectDiv.classList.remove('play');
  };
});
