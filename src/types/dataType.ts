import { Typeclass } from "src/types/typeclass";

/**
 * This type isn't perfect because it allows the assignment of functions to
 * typeclasses. We can't get better due to limitations of Typescript
 * intersection types. However, we can guard against ever exporting
 * non-functions.
 */
export type DataType = Record<
  Partial<keyof Typeclass> | string,
  Function | Typeclass[keyof Typeclass]
>;
