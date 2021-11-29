import {renderBlock} from './lib.js'

export function getUserData(user: unknown) {
  if (user == null) {
    return '';
  }
  if (typeof user === 'string') {
    try {
      return JSON.parse(user);
    } catch (e) {
      return '';
    }
  }
  return user.toString();
}

export function getFavoritesAmount(favoritesAmount?: unknown) {
  if (favoritesAmount == null) {
    return 0;
  }
  return +favoritesAmount;
}

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = !!favoriteItemsAmount

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
