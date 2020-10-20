window.addEventListener('DOMContentLoaded', () => {
  const progressBarsCompleted = document.querySelectorAll(
    '.skill__list__item__progress-bar__completed'
  );
  progressBarsCompleted.forEach((progressBarCompleted) => {
    const width = progressBarCompleted.dataset['value'];
    progressBarCompleted.style['width'] = `${width}%`;
  });
});
