import React from 'react'
import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'

const ItemMain = dynamic(() =>
  import('../..').then((mod) => mod.ItemMain, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Offers = dynamic(() =>
  import('../..').then((mod) => mod.Offers, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const LikeItems = dynamic(() =>
  import('../..').then((mod) => mod.LikeItems, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const SalesGraph = dynamic(() =>
  import('../..').then((mod) => mod.SalesGraph, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

export default function RightBlock () {
  return (
    <div className="w-110">
      <ItemMain />
      <SalesGraph />
      <Offers />
      <LikeItems />
    </div>
  )
}
