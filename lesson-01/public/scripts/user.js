import { renderBlock } from './lib.js';
export function getUserData(user) {
    if (user == null) {
        return '';
    }
    if (typeof user === 'string') {
        try {
            return JSON.parse(user);
        }
        catch (e) {
            return '';
        }
    }
    return user.toString();
}
export function getFavoritesAmount(favoritesAmount) {
    if (favoritesAmount == null) {
        return 0;
    }
    return +favoritesAmount;
}
export function renderUserBlock(userName, avatarLink, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = !!favoriteItemsAmount;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxVQUFVLENBQUE7QUFFcEMsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFhO0lBQ3ZDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsSUFBSTtZQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDekIsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxlQUF5QjtJQUMxRCxJQUFJLGVBQWUsSUFBSSxJQUFJLEVBQUU7UUFDM0IsT0FBTyxDQUFDLENBQUM7S0FDVjtJQUNELE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDMUIsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLG1CQUEyQjtJQUMvRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFBO0lBQ2pGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFBO0lBRTlDLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixVQUFVOzs0QkFFZixRQUFROztrQ0FFRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlbmRlckJsb2NrfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKHVzZXI6IHVua25vd24pIHtcbiAgaWYgKHVzZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodHlwZW9mIHVzZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVzZXIudG9TdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Ftb3VudChmYXZvcml0ZXNBbW91bnQ/OiB1bmtub3duKSB7XG4gIGlmIChmYXZvcml0ZXNBbW91bnQgPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiArZmF2b3JpdGVzQW1vdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKHVzZXJOYW1lOiBzdHJpbmcsIGF2YXRhckxpbms6IHN0cmluZywgZmF2b3JpdGVJdGVtc0Ftb3VudDogbnVtYmVyKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gISFmYXZvcml0ZUl0ZW1zQW1vdW50XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7YXZhdGFyTGlua31cIiBhbHQ9XCJXYWRlIFdhcnJlblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2hhc0Zhdm9yaXRlSXRlbXMgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuIl19