export const VW = (width: number) => {
  const vw = window.innerWidth * 0.01;

  return `${width * vw}px`;
};

export const VH = (height: number) => {
  const vh = window.innerHeight * 0.01;

  return `${height * vh}px`;
};
