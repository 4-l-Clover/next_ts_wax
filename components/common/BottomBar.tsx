import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'

const SelectBox = dynamic(() =>
  import('../../components').then((mod) => mod.SelectBox, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

export default function BottomBar () {
  return (
    <div className="w-full bg-gray600">
      <div className='flex items-center w-full h-11 px-6 max-sm:hidden sm:inline-block'>
        <div className="flex-1 flex items-center">
          <button className="flex items-center mr-10">
            <Image alt='image' src='/icons/group.svg' width={16} height={16} />
            <span className="ml-3 text-almost_white font-poppins font-medium text-xs">App</span>
          </button>
          <button className="flex items-center mr-10">
            <Image alt='image' src='/icons/union.svg' width={16} height={16} />
            <span className="ml-3 text-almost_white font-poppins font-medium text-xs">Support</span>
          </button>
          <button className="text-gray500 font-poppins font-medium text-xs mr-10">FAQ</button>
          <button className="text-gray500 font-poppins font-medium text-xs mr-10">About</button>
          <button className="text-gray500 font-poppins font-medium text-xs mr-10">Extension</button>
          <button className="text-gray500 font-poppins font-medium text-xs mr-10">API</button>
          <button className="text-gray500 font-poppins font-medium text-xs mr-10">Developers</button>
        </div>
        <div className="flex items-center">
          <SelectBox className="" placeholder="" value='P,RUB' size={'middle'} options={[{ name: 'P,RUB' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')} />
          <SelectBox className="ml-4" placeholder="" value='ENG' size={'middle'} options={[{ name: 'ENG' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')} />
          <button className="flex items-center justify-center ml-4 min-w-8 border border-solid py-2 rounded border-gray800"><Image alt='image' src='/icons/paypal.svg' width={10} height={12} /></button>
          <button className="flex items-center justify-center ml-4 min-w-8 border border-solid py-2 rounded border-gray800"><Image alt='image' src='/icons/card1.svg' width={16.5} height={11} /></button>
          <button className="flex items-center justify-center ml-4 min-w-8 border border-solid py-2 rounded border-gray800"><Image alt='image' src='/icons/card2.svg' width={7.5} height={11} /></button>
          <button className="flex items-center justify-center ml-4 min-w-8 border border-solid py-2 rounded border-gray800"><Image alt='image' src='/icons/visa.svg' width={18} height={6} /></button>
        </div>
      </div>
    </div>
  )
}
