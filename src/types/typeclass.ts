import { Functor, Monad } from "src/typeclass";
import { Eq } from "src/typeclass/eq";

export interface Typeclass {
  eq: Eq;
  functor: Functor;
  monad: Monad;
}
