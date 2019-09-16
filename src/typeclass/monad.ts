import { Maybe } from "src/maybe";
import { Fn } from "src/types";

type M<T> = Maybe<T>;

/**
 * flatMap :: a -> Maybe b -> Maybe a -> Maybe b
 * unit :: a -> Maybe a
 */
export interface Monad {
  flatMap: <A, B>(f: Fn<A, M<B>>) => (ma: M<A>) => M<B>;
  unit: <A>(a: A) => M<A>;
}
