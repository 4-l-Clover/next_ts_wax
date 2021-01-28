import React from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'

const TopBar = dynamic(() =>
  import('..').then((mod) => mod.TopBar, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const BottomBar = dynamic(() =>
  import('..').then((mod) => mod.BottomBar, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type Props = {
  children: any;
}

export default function Page (props: Props) {
  const { children } = props
  return (
    <div className='flex flex-col h-screen'>
      <TopBar />
      {children}
      <BottomBar />
    </div>
  )
}
