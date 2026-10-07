import raw from './kaomoji.json' with { type: 'json' }

export interface Kaomoji {
  value: string
  category: string
  description: string
}

const store = raw as unknown as Record<string, Kaomoji>

const fallback = '[ ?_? ]'

export const log = new Proxy({} as Record<string, string>, {
  get(_, key) {
    return store[key as string]?.value ?? fallback
  },
})

export default store
