import { Just, Nothing } from "./data";

/**
 * data Maybe a => Just a | Nothing
 */
export type Maybe<A> = Just<A> | Nothing;
