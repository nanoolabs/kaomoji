import data from "./kaomoji.json" with { type: "json" }

const store = data as Record<string, string>

const fallback = "[ ?_? ]"

export const log = new Proxy(store, {
  get(target, key: string) {
    return target[key] ?? fallback
  },
})

export default store
