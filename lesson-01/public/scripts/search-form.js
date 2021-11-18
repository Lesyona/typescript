import { renderBlock } from './lib.js';
import dayjs from 'dayjs';
console.log(dayjs());
export function renderSearchFormBlock(checkInDate, checkOutDate) {
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
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
            <input id="check-in-date" type="date" value=${checkInDate} min="2021-05-11" max="2021-06-30" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${checkOutDate} min="2021-05-11" max="2021-06-30" name="checkout" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRXJCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBRSxXQUFtQixFQUFFLFlBQW9CO0lBQzlFLFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQWlCc0QsV0FBVzs7OzsyREFJVixZQUFZOzs7Ozs7Ozs7Ozs7S0FZbEUsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbmNvbnNvbGUubG9nKGRheWpzKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrIChjaGVja0luRGF0ZTogc3RyaW5nLCBjaGVja091dERhdGU6IHN0cmluZykge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPSR7Y2hlY2tJbkRhdGV9IG1pbj1cIjIwMjEtMDUtMTFcIiBtYXg9XCIyMDIxLTA2LTMwXCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPSR7Y2hlY2tPdXREYXRlfSBtaW49XCIyMDIxLTA1LTExXCIgbWF4PVwiMjAyMS0wNi0zMFwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuIl19