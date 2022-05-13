declare module "vanta" {}

declare function VantaClass({
  el: HTMLElement,
  minHeight: number,
  minWidth: number,
  scale: number,
  scaleMobile: number,
  color: number,
  spacing: number,
  chaos: number,
}) {};

declare var VANTA: { TRUNK: VantaClass };
