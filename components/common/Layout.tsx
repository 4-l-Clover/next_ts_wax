import React from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'

const Page = dynamic(() =>
  import('../../components').then((mod) => mod.Page, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const SideMenu = dynamic(() =>
  import('../../components').then((mod) => mod.SideMenu, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type LayoutProps = {
  children: any;
}

export default function Layout (props: LayoutProps) {
  const { children } = props
  return (
    <Page>
      <div className='flex-1 h-full flex overflow-auto bg-gray900'>
        <SideMenu />
        {children}
      </div>
    </Page>
  )
}
