// Elements
const body = document.body;

const main = document.createElement('main');
const footer = document.createElement('footer');

let renderHeader = () => {
  // header
  const header = document.createElement('header');
  header.classList.add('header');
  body.prepend(header);

  // navigation
  const navigation = document.createElement('nav');
  navigation.classList.add('nav');
  header.append(navigation);

  // Logo
  const img = document.createElement('img');
  img.src = './images/svgs/Logo.svg';
  navigation.append(img);

  // search-box
  const searchBox = document.createElement('div');
  searchBox.classList.add('nav__search-box');
  const seacrhIcon = document.createElement('img');
  seacrhIcon.src = './images/svgs/search-icon.svg';
  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = 'Search anything...';
  searchInput.classList.add('nav__search-box-input');
  navigation.append(searchBox);
  searchBox.append(seacrhIcon);
  searchBox.append(searchInput);
};
renderHeader();

let renderMain = () => {
  // main
  const main = document.createElement('main');
  main.classList.add('main');
  body.querySelector('.header').insertAdjacentElement('afterend', main);

  //   episodes section
  const episodesSection = document.createElement('section');
  episodesSection.classList.add('episodes');
  main.append(episodesSection);

  //   episodes title
  const episodesTitle = document.createElement('h1');
  episodesTitle.classList.add('episodes__title');
  episodesTitle.innerText = 'Episodes';
  episodesSection.append(episodesTitle);

  //   episodes cards
  const episodesCards = document.createElement('div');
  episodesCards.classList.add('cards');
  episodesSection.append(episodesCards);

  // Card Div
  const episodesCard = document.createElement('div');
  episodesCard.classList.add('card');
  episodesCards.append(episodesCard);

  // Card Image
  const cardImage = document.createElement('img');
  cardImage.classList.add('card__img');
  cardImage.src = null;
  episodesCard.append(cardImage);

  // Card Information
  const cardInformation = document.createElement('div');
  cardInformation.classList.add('card__information');
  episodesCard.append(cardInformation);

  // Card Information Upper
  const cardUpper = document.createElement('div');
  cardUpper.classList.add('card__upper');
  cardInformation.append(cardUpper);

  // Card Episode Name
  const cardEpisodeName = document.createElement('h3');
  cardEpisodeName.classList.add('card__episode-name');
  cardEpisodeName.innerText = null;
  cardUpper.append(cardEpisodeName);

  // Card Episode Number
  const cardEpisodeNUmber = document.createElement('h4');
  cardEpisodeNUmber.classList.add('card__episode-number');
  cardEpisodeNUmber.innerText = null;
  cardUpper.append(cardEpisodeNUmber);

  // Card Episode Caption
  const cardEpisodeCaption = document.createElement('p');
  cardEpisodeCaption.classList.add('card__episode-caption');
  cardEpisodeCaption.innerText = null;
  cardInformation.append(cardEpisodeCaption);

  // Card Episode Link
  const cardEpisodeLink = document.createElement('a');
  cardEpisodeLink.classList.add('card__episode-link');
  cardEpisodeLink.innerText = 'Watch movie';
  cardEpisodeLink.href = null;
  cardInformation.append(cardEpisodeLink);
};
renderMain();

let renderFooter = () => {
  // Footer
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  body.querySelector('.main').insertAdjacentElement('afterend', footer);

  //   Footer Title
  const footerTitle = document.createElement('h4');
  footerTitle.classList.add('footer__title');
  footerTitle.innerText = 'This website is built using tvmaze 💖🍵';
  footer.append(footerTitle);

  //   Footer Name
  const footerAuthor = document.createElement('h5');
  footerAuthor.classList.add('footer__author-name');
  footerAuthor.innerText = 'Mehdi Fathollah';
  footer.append(footerAuthor);
};
renderFooter();
