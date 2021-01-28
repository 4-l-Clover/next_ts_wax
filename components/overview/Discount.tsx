import React from 'react'

type Props = {
  className: string,
  data:any
}

export default function Discount (props: Props) {
  const { className, data } = props

  function getDiscount (item) {
    if (item.steam_price && item.steam_price.average) {
      item.discount =
        item.game === 'csgo' || item.game === 'dota2'
          ? ((item.steam_price.average - item.price) /
            item.steam_price.average) *
          100
          : ((item.express_price.average - item.price) /
            item.express_price.average) *
          100
    } else {
      item.discount = null
    }
    return Math.floor(item.discount)
  }

  return (
    <div className={className}>
      {getDiscount(data)}%
    </div>
  )
}
