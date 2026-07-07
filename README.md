# kaomoji `[ ■_■ ]`

Minimalist kaomoji for Nanoo Labs documentation.

## Usage

```ts
import { log } from "@nlbs/kaomoji"

console.log(`${log.fatal} Database connection lost!`)
// → [ ✖_✖ ] Database connection lost!

console.log(`${log.success} Deploy complete`)
// → [ ^■^ ] Deploy complete

console.log(`${log.idle} Waiting for task`)
// → [ □_□ ] Waiting for task
```

Or consume the raw JSON in any language:

```ts
import kaomoji from "@nlbs/kaomoji/kaomoji.json" with { type: "json" }
```

```python
import json, urllib.request
data = json.load(open("kaomoji.json"))
print(data["fatal"])  # [ ✖_✖ ]
```

### Default fallback

Unknown keys return `[ ?_? ]`.

```ts
log.unknown // → "[ ?_? ]"
```

## Reference

### Systems

| Status        | Kaomoji   | Description         |
| :------------ | :-------- | :------------------ |
| **Architect** | `[⌐■_■]`  | System architecture |
| **Full Load** | `[ █_█ ]` | Max performance     |
| **Active**    | `[ ▣_▣ ]` | Data processing     |
| **Busy**      | `[ ▓_▓ ]` | High workload       |
| **Idle**      | `[ □_□ ]` | Task waiting        |
| **Hybrid**    | `[ ■_█ ]` | Multi-core mode     |
| **Secure**    | `[ ▨_▨ ]` | Security operations |
| **Grid**      | `[ ▦_▦ ]` | Matrix operations   |

### Programming

| Mode          | Kaomoji     | Description       |
| :------------ | :---------- | :---------------- |
| **Success**   | `[ ^■^ ]`   | Build completed   |
| **Grind**     | `[ >■< ]`   | Logic execution   |
| **Skeptical** | `[ ¬■_■ ]`  | Validation mode   |
| **Debug**     | `[ ;■_■ ]`  | Troubleshooting   |
| **Scanning**  | `[ █_▀ ]`   | Resource scanning |
| **Fatal**     | `[ ✖_✖ ]`   | Kernel panic      |
| **Void**      | `[ ∅_∅ ]`   | Null reference    |
| **Glitch**    | `[ ░_░ ]`   | System glitch     |
| **Recursion** | `[ ▞▚_▚▞ ]` | Logic recursion   |
| **Branch**    | `[ ▐▌_█ ]`  | Logic branching   |

### Connectivity

| Type          | Kaomoji     | Description       |
| :------------ | :---------- | :---------------- |
| **Low Power** | `[ ▱_▱ ]`   | Low energy        |
| **Syncing**   | `[ ☁_■ ]`   | Cloud sync        |
| **Online**    | `[ ▄▆█_■ ]` | Connected         |
| **Offline**   | `[ ⊘_■ ]`   | Disconnected      |
| **Shield**    | `[ ▓_█ ]`   | System protection |

### Operations

| Type       | Kaomoji     | Description           |
| :--------- | :---------- | :-------------------- |
| **Init**   | `[ ▄_█ ]`   | Booting sequence      |
| **Kernel** | `[ ▟_▙ ]`   | Kernel monitoring     |
| **Ship**   | `\ [■_■] /` | Production deployment |
| **Break**  | `[ ▘_▘ ]~`  | System cooldown       |

## Raw data

Consume `kaomoji.json` from any language — it's the single source of truth. The `index.ts` wrapper is optional.

## Maintained

[@aadnanmt](https://github.com/aadnanmt) | Nanoo Labs Ecosystems.
