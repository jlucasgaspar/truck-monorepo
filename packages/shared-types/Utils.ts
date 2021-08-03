export namespace Utils {
  export type WithoutId<T> = Omit<T, 'id'>;
  export type WithoutDates<T> = Omit<T, 'createdAt' | 'updatedAt' | 'deletedAt'>;
  export type WithoutDatesAndId<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;
}