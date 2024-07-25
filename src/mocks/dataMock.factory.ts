type DataMockFactoryInput<T> = {
  quantity: number;
  factory: (_data?: Partial<T>) => T;
  data?: Partial<T>;
};

export const dataMockFactory = <T>({
  quantity = 1,
  factory,
  data,
}: DataMockFactoryInput<T>): T | T[] => {
  if (quantity === 0) {
    return [];
  }

  if (quantity === 1) {
    return factory(data);
  }

  return new Array(quantity).fill(null).map(() => factory(data));
};
