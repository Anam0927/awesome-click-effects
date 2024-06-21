export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getComputedStyleProperty(
  element: HTMLElement,
  property: string,
  toNumber?: never
): number;
export function getComputedStyleProperty(
  element: HTMLElement,
  property: string,
  toNumber: false
): string;
export function getComputedStyleProperty(
  element: HTMLElement,
  property: string,
  toNumber = true
) {
  const es = getComputedStyle(element);
  const value = es.getPropertyValue(property);
  return toNumber ? parseFloat(value) : value;
}

export function setCustomStyleProperty(
  element: HTMLElement,
  property: string,
  value: string | number
) {
  element.style.setProperty(property, value.toString());
}
