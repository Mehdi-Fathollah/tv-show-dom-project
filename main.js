const body = document.body;

// Get Data
let CardData = async () => {
  let data = await fetch('https://api.tvmaze.com/shows/5/episodes');
  let finalData = await data.json();
  finalData.forEach((element) => {
    renderEachCards(element);
    renderOptionsInPage(element);
  });
};

// Render Header
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

  // Select and Options
  const selectEpisodes = document.createElement('select');
  selectEpisodes.classList.add('nav__select-episodes');
  let defaultOption = document.createElement('option');
  defaultOption.classList.add('default-option');
  defaultOption.innerText = 'Select Episode';
  selectEpisodes.append(defaultOption);
  navigation.append(selectEpisodes);
};

// Render Main
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
  episodesTitle.innerText = 'True Detective Episodes';
  episodesSection.append(episodesTitle);

  //   episodes cards
  const episodesCards = document.createElement('div');
  episodesCards.classList.add('cards');
  episodesSection.append(episodesCards);
};

// Render Each Of Card
let renderEachCards = (data) => {
  // Card Div
  const episodesCard = document.createElement('div');
  episodesCard.classList.add('card');
  episodesCard.id = data.name;
  body.querySelector('.cards').append(episodesCard);

  // Card Image
  const cardImage = document.createElement('img');
  cardImage.classList.add('card__img');
  cardImage.src = data.image.medium;
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
  cardEpisodeName.innerText = data.name;
  cardUpper.append(cardEpisodeName);

  // Card Episode Number
  const cardEpisodeNumber = document.createElement('h4');
  cardEpisodeNumber.classList.add('card__episode-number');
  cardEpisodeNumber.innerText = `S${String(data.season).padStart(
    2,
    '0'
  )}E${String(data.number).padStart(2, '0')}`;
  cardUpper.append(cardEpisodeNumber);

  // Card Episode Caption
  const cardEpisodeCaption = document.createElement('p');
  cardEpisodeCaption.classList.add('card__episode-caption');
  cardEpisodeCaption.innerText = data.summary;
  cardEpisodeCaption.innerText = cardEpisodeCaption.innerText
    .replaceAll('<p>', '')
    .replaceAll('</p>', '')
    .replaceAll('<br>', '');
  if (data.summary.length > 100)
    cardEpisodeCaption.innerText =
      cardEpisodeCaption.innerText.substring(0, 100) + '...';
  cardInformation.append(cardEpisodeCaption);

  // Card Episode Link
  const cardEpisodeLink = document.createElement('a');
  cardEpisodeLink.classList.add('card__episode-link');
  cardEpisodeLink.innerText = 'Watch movie';
  cardEpisodeLink.href = data.url;
  cardEpisodeLink.target = '_blank';
  cardInformation.append(cardEpisodeLink);
};

// Render Options In Page
let renderOptionsInPage = (data) => {
  const selectOptions = document.createElement('option');
  selectOptions.classList.add('select-options');
  let selectEl = document.querySelector('.nav__select-episodes');
  selectOptions.innerText = `${data.name} || S${String(data.season).padStart(
    2,
    '0'
  )}E${String(data.number).padStart(2, '0')}`;

  selectOptions.value = data.url;
  selectEl.append(selectOptions);

  let defaultOption = document.querySelector('.default-option');

  selectEl.addEventListener('change', () => {
    if (selectEl.value !== defaultOption.innerText) {
      defaultOption.setAttribute('disabled', 'true');
      window.open(selectEl.value);
    }
  });
};

// Render Footer
let renderFooter = () => {
  // Footer
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  body.querySelector('.main').insertAdjacentElement('afterend', footer);

  //   Footer Title
  const footerTitle = document.createElement('a');
  footerTitle.classList.add('footer__title');
  footerTitle.innerText = 'This website is built using TvMaze 💖🍵';
  footerTitle.href = 'https://www.tvmaze.com/api#licensing';
  footerTitle.target = '_blank';
  footer.append(footerTitle);

  //   Footer Name
  const footerAuthor = document.createElement('h5');
  footerAuthor.classList.add('footer__author-name');
  footerAuthor.innerText = 'Mehdi Fathollah 💕';
  footer.append(footerAuthor);
};

renderHeader();
renderMain();
renderFooter();
CardData();

// Search Input
let searchInputBox = document.querySelector('.nav__search-box-input');
searchInputBox.addEventListener('input', () => {
  const episodeCards = document.querySelectorAll('.card');
  const value = searchInputBox.value.toLowerCase();

  episodeCards.forEach((eachCards) => {
    const episodeCardNames = eachCards
      .querySelector('.card__episode-name')
      .innerText.toLowerCase();
    if (episodeCardNames.includes(value)) {
      eachCards.classList.remove('hide');
    } else {
      eachCards.classList.add('hide');
    }
  });
});
