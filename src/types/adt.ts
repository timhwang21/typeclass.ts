/**
 * Abstract class to build ADTs on top of.
 *
 * @param {symbol} type the unique symbol from the ADT; used as runtime type info
 */
export abstract class ADT<T> {
  abstract readonly value: T;
  readonly type: symbol;
  static readonly type: symbol;

  constructor(type: symbol) {
    this.type = type;
  }
}

