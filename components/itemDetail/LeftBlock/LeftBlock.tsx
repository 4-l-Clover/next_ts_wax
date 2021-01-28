import React from 'react'
import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'

const ItemPicture = dynamic(() =>
  import('../../../components').then((mod) => mod.ItemPicture, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const SaleOrders = dynamic(() =>
  import('../../../components').then((mod) => mod.SaleOrders, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Socials = dynamic(() =>
  import('../../../components').then((mod) => mod.Socials, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

export default function LeftBlock () {
  return (
    <div className="w-160 mr-2">
      <ItemPicture />
      <SaleOrders />
      <Socials />
    </div>
  )
}
