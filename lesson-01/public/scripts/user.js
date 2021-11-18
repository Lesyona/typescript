import { renderBlock } from './lib.js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxRQUFnQixFQUFFLFVBQWtCLEVBQUUsbUJBQTJCO0lBQ2hHLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFDakYsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUE7SUFFOUMsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFVBQVU7OzRCQUVmLFFBQVE7O2tDQUVGLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxnQkFBZ0I7Ozs7S0FJdkYsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sgKHVzZXJOYW1lOiBzdHJpbmcsIGF2YXRhckxpbms6IHN0cmluZywgZmF2b3JpdGVJdGVtc0Ftb3VudDogbnVtYmVyKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gISFmYXZvcml0ZUl0ZW1zQW1vdW50XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7YXZhdGFyTGlua31cIiBhbHQ9XCJXYWRlIFdhcnJlblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2hhc0Zhdm9yaXRlSXRlbXMgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuIl19