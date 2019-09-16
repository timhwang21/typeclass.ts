import { Maybe } from "src/maybe";
import { Fn } from "src/types";

type F<T> = Maybe<T>;

export interface Functor {
  map: <A, B>(f: Fn<A, B>) => (fa: F<A>) => F<B>;
}
