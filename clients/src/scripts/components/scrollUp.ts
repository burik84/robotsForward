const scrollUp = () => {
  const scroll:HTMLDivElement = document.querySelector('.scrollup');
  const heightWindow = document.documentElement.clientHeight;
  window.addEventListener('scroll', () => {
    const heightScroll = window.pageYOffset;

    if (heightScroll > heightWindow) {
      scroll.style.display = 'block';
    } else {
      scroll.style.display = 'none';
    }
  });

  scroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
};

export default scrollUp;
