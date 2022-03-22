// rating component
const rating = document.querySelector('.rating')! as HTMLDivElement;
const success = document.querySelector('.success')! as HTMLDivElement;
const ratingCount = document.querySelector('.rating__count')! as HTMLDivElement;
const ratingSubmit = document.querySelector(
  '.rating__submit'
)! as HTMLButtonElement;
const successInfo = document.querySelector('.success__info')! as HTMLDivElement;

let activeCountIndex: number = -1;
let activeElement: Element;
const ratingCountArr: Element[] = Array.from(ratingCount.children);

ratingCountArr.forEach((el) => {
  el.addEventListener('click', (e): void => {
    if (activeCountIndex >= 0 && activeCountIndex < ratingCountArr.length) {
      // ratingCountArr[activeCountIndex].classList.remove('number__active');
      ratingCountArr[activeCountIndex].classList.remove('number__active');
    }

    activeCountIndex = ratingCountArr.indexOf(el);
    activeElement = el;
    el.classList.add('number__active');
  });
});

ratingSubmit.addEventListener('click', (e): void => {
  if (activeCountIndex !== -1) {
    // hide rating
    rating.classList.add('rating--hide');
    // display thank you
    success.classList.add('success--show');
    // update success info
    successInfo.innerHTML = `You selected ${activeElement.innerHTML} out of ${ratingCountArr.length}`;
  }
});
