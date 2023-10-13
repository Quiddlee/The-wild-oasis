import { DiscountFilterValues, SortValues } from './enums.ts';

export type Guests = Readonly<{
  id: number;
  countryFlag: string;
  created_at: string;
  email: string;
  fullName: string;
  nationalID: string;
  nationality: string;
  country: string;
}>;

export type CabinType = Readonly<{
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}>;

export type Booking = Readonly<{
  id: number;
  createdAt: Date;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  observations: boolean;
  cabinId: number;
  guestId: number;
  isPaid: boolean;
}>;

export type Settings = Readonly<{
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}>;

export type ExtractValues<TObj extends object> = TObj[keyof TObj];

export type CreateCabinFormData = Omit<CabinType, 'image' | 'id'> &
  Readonly<{
    image: FileList | string;
  }>;

export type DiscountFilterValueTypes = ExtractValues<
  typeof DiscountFilterValues
>;

export type SortValueTypes = ExtractValues<typeof SortValues>;

export type VoidFn = () => void;
