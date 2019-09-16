import { ADT } from "src/types";

export class Just<T> extends ADT<T> {
  readonly value: T;
  static readonly type: unique symbol = Symbol();

  static getValue = <T>(mt: Just<T>): T => {
    return mt.value;
  };

  constructor(value: T) {
    super(Just.type);
    this.value = value;
  }
}

export class Nothing extends ADT<null> {
  readonly value: null = null;
  static readonly type: unique symbol = Symbol();

  constructor() {
    super(Nothing.type);
  }
}
