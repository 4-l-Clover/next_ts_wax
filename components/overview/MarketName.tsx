import React from 'react'

type Props = {
  className: string,
  data:any
}

export default function MarketName (props: Props) {
  const { className, data } = props

  function getMarketName (name) {
    let marketName = null
    if (name.indexOf('|') !== -1) {
      if (name.indexOf('Sticker') === -1) {
        marketName = name.substring(
          name.indexOf('|') + 2,
          name.indexOf('(') - 1
        )
      } else marketName = name.substring(name.indexOf('|') + 2, name.length)
    }
    return marketName
  }

  return (
    <div className={className}>
      {(data.steam_price && data.steam_price.ch_name) ? getMarketName(data.steam_price.ch_name) : (data.market_name || data.name)}
    </div>
  )
}
