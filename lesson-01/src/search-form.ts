import {renderBlock} from './lib.js'

function defaultCheckInDate(): string {
  let today = new Date();
  return `${today.getFullYear()}-${(today.getMonth() + 1)}-${(today.getDate() + 1)}`;
}

function defaultCheckOutDate(): string {
  let today = new Date();
  return `${today.getFullYear()}-${(today.getMonth() + 1)}-${(
    today.getDate() + 3)}`;
}

interface SearchFormData {
  city: string,
  checkInDate: string,
  checkOutDate: string,
  maxPrice: number
}

interface Place {}

export function getSearchData(event, searchForm): SearchFormData {
  event.preventDefault();
  return {
    city: searchForm.elements["city"].value,
    checkInDate: searchForm.elements["checkin"].value,
    checkOutDate: searchForm.elements["checkout"].value,
    maxPrice: searchForm.elements["price"].value
  };
}

export function search(SearchFormData: SearchFormData): void {
  console.log(SearchFormData);
}

export function renderSearchFormBlock(checkInDate: string = defaultCheckInDate(), checkOutDate: string = defaultCheckOutDate()): void {
  let today = new Date();
  let minDate = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;

  let date = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  let maxDate = `${today.getFullYear()}-${(today.getMonth() + 2)}-${date.getDate()}`;

  renderBlock(
    'search-form-block',
    `
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
    `
  )
}
