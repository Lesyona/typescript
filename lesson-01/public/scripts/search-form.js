import { renderBlock } from './lib.js';
function defaultCheckInDate() {
    let today = new Date();
    return `${today.getFullYear()}-${(today.getMonth() + 1)}-${(today.getDate() + 1)}`;
}
function defaultCheckOutDate() {
    let today = new Date();
    return `${today.getFullYear()}-${(today.getMonth() + 1)}-${(today.getDate() + 3)}`;
}
export function getSearchData(event, searchForm) {
    event.preventDefault();
    return {
        city: searchForm.elements["city"].value,
        checkInDate: searchForm.elements["checkin"].value,
        checkOutDate: searchForm.elements["checkout"].value,
        maxPrice: searchForm.elements["price"].value
    };
}
export function search(SearchFormData, callback) {
    console.log(SearchFormData);
}
export function renderSearchFormBlock(checkInDate = defaultCheckInDate(), checkOutDate = defaultCheckOutDate()) {
    let today = new Date();
    let minDate = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
    let date = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    let maxDate = `${today.getFullYear()}-${(today.getMonth() + 2)}-${date.getDate()}`;
    renderBlock('search-form-block', `
    <form class="search">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input name="city" id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>-->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${checkInDate} min=${minDate} max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${checkOutDate} min=${minDate} max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUVwQyxTQUFTLGtCQUFrQjtJQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNyRixDQUFDO0FBRUQsU0FBUyxtQkFBbUI7SUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3pELEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFXRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVO0lBQzdDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixPQUFPO1FBQ0wsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSztRQUN2QyxXQUFXLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLO1FBQ2pELFlBQVksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7UUFDbkQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSztLQUM3QyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsY0FBOEIsRUFBRSxRQUFnRDtJQUNyRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsY0FBc0Isa0JBQWtCLEVBQUUsRUFBRSxlQUF1QixtQkFBbUIsRUFBRTtJQUM1SCxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLElBQUksT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBRXBGLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLElBQUksT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBRW5GLFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQWlCc0QsV0FBVyxRQUFRLE9BQU8sU0FBUyxPQUFPOzs7OzJEQUl6QyxZQUFZLFFBQVEsT0FBTyxTQUFTLE9BQU87Ozs7Ozs7Ozs7OztLQVlqRyxDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW5kZXJCbG9ja30gZnJvbSAnLi9saWIuanMnXG5cbmZ1bmN0aW9uIGRlZmF1bHRDaGVja0luRGF0ZSgpOiBzdHJpbmcge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHsodG9kYXkuZ2V0TW9udGgoKSArIDEpfS0keyh0b2RheS5nZXREYXRlKCkgKyAxKX1gO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q2hlY2tPdXREYXRlKCk6IHN0cmluZyB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0keyh0b2RheS5nZXRNb250aCgpICsgMSl9LSR7KFxuICAgIHRvZGF5LmdldERhdGUoKSArIDMpfWA7XG59XG5cbmludGVyZmFjZSBTZWFyY2hGb3JtRGF0YSB7XG4gIGNpdHk6IHN0cmluZyxcbiAgY2hlY2tJbkRhdGU6IHN0cmluZyxcbiAgY2hlY2tPdXREYXRlOiBzdHJpbmcsXG4gIG1heFByaWNlOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFBsYWNlIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWFyY2hEYXRhKGV2ZW50LCBzZWFyY2hGb3JtKTogU2VhcmNoRm9ybURhdGEge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXR1cm4ge1xuICAgIGNpdHk6IHNlYXJjaEZvcm0uZWxlbWVudHNbXCJjaXR5XCJdLnZhbHVlLFxuICAgIGNoZWNrSW5EYXRlOiBzZWFyY2hGb3JtLmVsZW1lbnRzW1wiY2hlY2tpblwiXS52YWx1ZSxcbiAgICBjaGVja091dERhdGU6IHNlYXJjaEZvcm0uZWxlbWVudHNbXCJjaGVja291dFwiXS52YWx1ZSxcbiAgICBtYXhQcmljZTogc2VhcmNoRm9ybS5lbGVtZW50c1tcInByaWNlXCJdLnZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2goU2VhcmNoRm9ybURhdGE6IFNlYXJjaEZvcm1EYXRhLCBjYWxsYmFjazogKGVycm9yPzogRXJyb3IsIFBsYWNlPzogUGxhY2UpID0+IHZvaWQpOiB2b2lkIHtcbiAgY29uc29sZS5sb2coU2VhcmNoRm9ybURhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGNoZWNrSW5EYXRlOiBzdHJpbmcgPSBkZWZhdWx0Q2hlY2tJbkRhdGUoKSwgY2hlY2tPdXREYXRlOiBzdHJpbmcgPSBkZWZhdWx0Q2hlY2tPdXREYXRlKCkpOiB2b2lkIHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgbGV0IG1pbkRhdGUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0keyh0b2RheS5nZXRNb250aCgpICsgMSl9LSR7dG9kYXkuZ2V0RGF0ZSgpfWA7XG5cbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpICsgMiwgMCk7XG4gIGxldCBtYXhEYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHsodG9kYXkuZ2V0TW9udGgoKSArIDIpfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0gY2xhc3M9XCJzZWFyY2hcIj5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNpdHlcIiBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9JHtjaGVja0luRGF0ZX0gbWluPSR7bWluRGF0ZX0gbWF4PVwiJHttYXhEYXRlfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2NoZWNrT3V0RGF0ZX0gbWluPSR7bWluRGF0ZX0gbWF4PVwiJHttYXhEYXRlfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuIl19