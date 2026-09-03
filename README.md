# @nlbs/kaomoji `[ ■_■ ]`

Minimalist kaomoji for Nanoo Labs documentation.

## Usage

```ts
import { log } from "@nlbs/kaomoji";

console.log(`${log.fatal} Database connection lost!`);
// → [ ✖_✖ ] Database connection lost!

console.log(`${log.success} Deploy complete`);
// → [ ^■^ ] Deploy complete

console.log(`${log.idle} Waiting for task`);
// → [ □_□ ] Waiting for task
```

Or consume the raw JSON in any language:

```ts
import kaomoji from "@nlbs/kaomoji/kaomoji.json" with { type: "json" };
```

```python
import json, urllib.request
data = json.load(open("kaomoji.json"))
print(data["fatal"])  # [ ✖_✖ ]
```

### Default fallback

Unknown keys return `[ ?_? ]`.

```ts
log.unknown; // → "[ ?_? ]"
```

## Reference

See [KAOMOJI.md](./KAOMOJI.md) for the full kaomoji reference tables.

## Raw data

Consume `kaomoji.json` from any language — it's the single source of truth. The `index.ts` wrapper is optional.

## Maintained

[@aadnanmt](https://github.com/aadnanmt) | Nanoo Labs Ecosystems.
