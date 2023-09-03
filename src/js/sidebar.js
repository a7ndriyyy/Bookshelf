import { fetchCategoryList, fetchParticularCategory } from './service-api';

const sideBarEl = document.querySelector('.side-bar');
const sideBarListEl = document.querySelector('.side-bar-list');
const containerEl = document.querySelector('.container');

startRender();

async function startRender() {
  const data = await fetchCategoryList();

  const markupTitle = `<li><button class="side-bar-btn current-category" type="button">All categories</button></li>`;
  sideBarListEl.insertAdjacentHTML('afterbegin', markupTitle);

  renderMarkupList(data);
}

function renderMarkupList(arrays) {
  const markup = arrays
    .map(({ list_name }) => {
      return `<li><button type="button" class="side-bar-btn">${list_name}</button></li>`;
    })
    .join('');
  return sideBarListEl.insertAdjacentHTML('beforeend', markup);
}

sideBarListEl.addEventListener('click', onRenderMarkup);

function onRenderMarkup(e) {
  const currentCategory = e.target.textContent;

  renderMarkupBook(currentCategory);

  e.target.classList.add('current-category');
}

async function renderMarkupBook(category) {
  const data = await fetchParticularCategory(category);
  console.log(data);

  const markupBook = data.map(book => {
	return `<li class=card-set-item>
	</li`
  })
}
