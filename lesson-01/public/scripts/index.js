import { renderSearchFormBlock, getSearchData, search } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js';
import { renderToast } from './lib.js';
window.addEventListener('DOMContentLoaded', () => {
    localStorage.user = JSON.stringify({
        username: 'Wade Warren',
        avatarUrl: '/img/avatar.png',
    });
    localStorage.favoritesAmount = '5';
    const { username, avatarUrl } = getUserData(localStorage.user);
    const favoritesAmount = getFavoritesAmount(localStorage.favoritesAmount);
    renderUserBlock(username, avatarUrl, favoritesAmount);
    renderSearchFormBlock();
    const searchForm = document.querySelector('.search');
    let searchFormData;
    searchForm.addEventListener('submit', (event) => {
        searchFormData = getSearchData(event, searchForm);
        search(searchFormData);
    });
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRXRDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFNBQVMsRUFBRSxpQkFBaUI7S0FDN0IsQ0FBQyxDQUFDO0lBQ0wsWUFBWSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFFbkMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELE1BQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RSxlQUFlLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUNyRCxxQkFBcUIsRUFBRSxDQUFBO0lBRXZCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsSUFBSSxjQUFjLENBQUM7SUFDbkIsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzlDLGNBQWMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILHFCQUFxQixFQUFFLENBQUE7SUFDdkIsV0FBVyxDQUNQLEVBQUMsSUFBSSxFQUFFLDJEQUEyRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFDcEYsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FDdkUsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrLCBnZXRTZWFyY2hEYXRhLCBzZWFyY2ggfSBmcm9tICcuL3NlYXJjaC1mb3JtLmpzJ1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoU3R1YkJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcydcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jaywgZ2V0VXNlckRhdGEsIGdldEZhdm9yaXRlc0Ftb3VudCB9IGZyb20gJy4vdXNlci5qcydcbmltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSAnLi9saWIuanMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UudXNlciA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJuYW1lOiAnV2FkZSBXYXJyZW4nLFxuICAgICAgYXZhdGFyVXJsOiAnL2ltZy9hdmF0YXIucG5nJyxcbiAgICB9KTtcbiAgbG9jYWxTdG9yYWdlLmZhdm9yaXRlc0Ftb3VudCA9ICc1JztcblxuICBjb25zdCB7IHVzZXJuYW1lLCBhdmF0YXJVcmwgfSA9IGdldFVzZXJEYXRhKGxvY2FsU3RvcmFnZS51c2VyKTtcbiAgY29uc3QgZmF2b3JpdGVzQW1vdW50ID0gZ2V0RmF2b3JpdGVzQW1vdW50KGxvY2FsU3RvcmFnZS5mYXZvcml0ZXNBbW91bnQpO1xuICByZW5kZXJVc2VyQmxvY2sodXNlcm5hbWUsIGF2YXRhclVybCwgZmF2b3JpdGVzQW1vdW50KVxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG4gIGxldCBzZWFyY2hGb3JtRGF0YTtcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBzZWFyY2hGb3JtRGF0YSA9IGdldFNlYXJjaERhdGEoZXZlbnQsIHNlYXJjaEZvcm0pO1xuICAgIHNlYXJjaChzZWFyY2hGb3JtRGF0YSk7XG4gIH0pO1xuXG4gIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpXG4gIHJlbmRlclRvYXN0KFxuICAgICAge3RleHQ6ICfQrdGC0L4g0L/RgNC40LzQtdGAINGD0LLQtdC00L7QvNC70LXQvdC40Y8uINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0LXQs9C+INC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCcsIHR5cGU6ICdzdWNjZXNzJ30sXG4gICAgICB7bmFtZTogJ9Cf0L7QvdGP0LsnLCBoYW5kbGVyOiAoKSA9PiB7Y29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKX19XG4gIClcbn0pXG4iXX0=