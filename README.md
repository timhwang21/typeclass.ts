# `typeclass.ts`

WIP

## Quickstart

```sh
yarn ts-node
```

```typescript
import { maybe } from 'src/maybe'
// go wild
```

## Design goals

- Emphasis on developer experience, as actual structures are well-defined
- Heavy leverage of Typescript features; as little magic as possible
- Code organization in a way that emphasizes category theory relationships while maintaining readability
- Usefulness as a learning tool
- Minimal dependencies

## Non-goals

- Production-readiness

## Enhancements

- Autocurry functions? (If it doesn't make types too difficult to read)

## Project structure

```
src
├── [type]
│   ├── data.ts
│   ├── functions.ts
│   ├── index.ts
│   └── types.ts
├── typeclass
│   ├── [typeclass].ts
│   ├── index.ts
└── types
    ├── [type].ts
    └── index.ts
```

With regards to type directories, the dependency graph should look like the following, with no layer importing from a deeper layer:

```
data.ts
└── types.ts
    └── functions.ts
```

- `data.ts`: Data constructors. Should be treated as private and not exported from `index.ts`. Functions for instantiation should exist in `functions.ts`.
- `functions.ts`: Standalone functions and typeclass instances.
- `types.ts` Type constructors.
