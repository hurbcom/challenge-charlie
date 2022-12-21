import { ChangeEvent } from "react"

export type QuoteComponentProps = {
    currency: string
    amount: string
    currencies: any[]
    selectOtherCurrency: (event: ChangeEvent<HTMLSelectElement>) => void
    amountChanged: (event: ChangeEvent<HTMLInputElement>) => void
}

export function QuoteComponent({ amount, amountChanged, currencies, currency, selectOtherCurrency }: QuoteComponentProps) {
    return <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2">
    <div className="grid grid-cols-[40px_100px] gap-2">
      <div className="self-center">{currency}</div>
      <input
        type="number"
        placeholder="quantidade"
        value={amount}
        className="p-2 rounded-lg"
        onChange={amountChanged}
      />
    </div>
    <div className="grid grid-cols-1">
      <select onChange={selectOtherCurrency} value={currency} className="p-2 rounded-lg">
        {currencies.map((c: any) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  </div>
}