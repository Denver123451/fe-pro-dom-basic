export const paintCards = () => {
  //const items = document.querySelectorAll('.item:nth-child(odd)'); не люблю я сразу добираться к искомому
  //items.forEach((item) => (item.style.backgroundColor = 'red'));
  document.querySelectorAll('.item').forEach((el, num) => {
    if (num % 2 !== 0) {
      el.style.backgroundColor = 'red';
    }
  });
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
