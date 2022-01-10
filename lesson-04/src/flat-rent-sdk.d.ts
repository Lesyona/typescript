export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number) : Date

export const backendPort: number
export const localStorageKey: string

export interface Flat {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: Date[],
  price: number
}

export class FlatRentSdk {
  get(id: string): Promise<Flat>

  search(parameters: {
    checkInDate: Date,
    checkOutDate: Date,
    city: string,
    priceLimit?: number
  })

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void

  _resetTime(date: Date): void

  _calculateDifferenceInDays(startDate: Date, endDate: Date): number

  _generateDateRange(from: Date, to: Date): Date[]

  _generateTransactionId(): number

  _areAllDatesAvailable(flat: Flat, dateRange: Date[]): boolean

  _formatFlatObject(flat: Flat, nightNumber: number): Flat

  _readDatabase(): Flat[]

  _writeDatabase(database: Flat[]): void

  _syncDatabase(database: Flat[]): void
}

