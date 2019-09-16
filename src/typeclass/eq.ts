import { Maybe } from "src/maybe";

type E<T> = Maybe<T>;

export interface Eq {
  isEqual: <T>(e1: E<T>) => (e2: E<T>) => boolean;
}
