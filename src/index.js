export const paintCards = () => {
  const items = document.querySelectorAll('.item:nth-child(odd)');
  items.forEach((item) => (item.style.backgroundColor = 'red'));
};

export const findElement = () => {
  let item = document.querySelector('li');
  while (item) {
    if (item.matches('.likedItem')) {
      item.style.backgroundColor = 'blue';
      break;
    } else {
      item = item.nextElementSibling;
    }
  }
};
