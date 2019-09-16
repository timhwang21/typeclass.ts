import { Fn } from "src/types";
import { Functor, Monad } from "src/typeclass";

import { Just, Nothing } from "./data";
import { Maybe } from "./types";
import { Eq } from "src/typeclass/eq";

export const eq: Eq = {
  isEqual: <A>(e1: Maybe<A>) => (e2: Maybe<A>) =>
    (isNothing(e1) && isNothing(e2)) ||
    (isJust(e1) && isJust(e2) && fromJust(e1) == fromJust(e2))
};

export const functor: Functor = {
  map: <A, B>(f: Fn<A, B>) => (fa: Maybe<A>): Maybe<B> =>
    isNothing(fa) ? new Nothing() : new Just(f(fromJust(fa)))
};

export const monad: Monad = {
  flatMap: <A, B>(f: Fn<A, Maybe<B>>) => (ma: Maybe<A>): Maybe<B> =>
    flatten(functor.map(f)(ma)),
  unit: <A>(a: A): Maybe<A> => new Just(a)
};

/**
 * just :: a -> Maybe a
 */
export const just = <A>(a: A): Maybe<A> => new Just(a);

/**
 * nothing :: Maybe a
 */
export const nothing = (): Maybe<null> => new Nothing();

/**
 * maybe :: b -> (a -> b) -> Maybe a -> b
 */
export const maybe = <A, B>(b: B) => (f: Fn<A, B>) => (ma: Maybe<A>): B =>
  isJust(ma) ? f(fromJust(ma)) : b;

/**
 * isNothing :: Maybe a -> boolean
 */
export const isNothing = <A>(ma: Maybe<A>): ma is Nothing =>
  ma.type === Nothing.type;

/**
 * isJust :: Maybe a -> boolean
 */
export const isJust = <A>(ma: Maybe<A>): ma is Just<A> => !isNothing(ma);

/**
 * fromJust :: Maybe a -> a
 */
export const fromJust = <A>(ma: Maybe<A>): A => {
  if (isJust(ma)) {
    return Just.getValue(ma);
  } else {
    throw new Error("Cannot call `fromJust()` on Maybe");
  }
};

/**
 * fromMaybe :: a -> Maybe a -> a
 */
export const fromMaybe = <A>(a: A) => (ma: Maybe<A>): A =>
  isJust(ma) ? fromJust(ma) : a;

/**
 * flatten :: Maybe (Maybe a) -> Maybe a
 */
export const flatten = <A>(mma: Maybe<Maybe<A>>): Maybe<A> =>
  isJust(mma) ? fromJust(mma) : nothing();

/**
 * listToMaybe :: a -> Maybe a -> a
 */
export const listToMaybe = <A>(la: A[]): Maybe<A> =>
  la.length === 0 ? nothing() : just(la[0]);

/**
 * catMaybes :: [Maybe a] -> [a]
 */
export const catMaybes = <A>(lma: Array<Maybe<A>>): A[] =>
  lma.filter(isJust).map(fromJust);

/**
 * mapMaybes :: (a -> Maybe b) -> [a] -> [b]
 */
export const mapMaybes = <A, B>(f: Fn<A, Maybe<B>>) => (la: A[]): B[] =>
  catMaybes(la.map(f));
