export type RateItem = [label: string, price: string, badge?: string]

export type KitContent = {
  kind: "partnership" | "content"
  sections: { title: string; items: RateItem[] }[]
}
