import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorage.user = JSON.stringify({
      username: 'Wade Warren',
      avatarUrl: '/img/avatar.png',
    });
  localStorage.favoritesAmount = '5';

  const { username, avatarUrl } = getUserData(localStorage.user);
  const favoritesAmount = getFavoritesAmount(localStorage.favoritesAmount);
  renderUserBlock(username, avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
