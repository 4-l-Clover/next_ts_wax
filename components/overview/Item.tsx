import React from 'react';
import { Progress, Skeleton } from 'antd';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';

type Props = {
  data: any;
};

const Rocket = dynamic(
  () =>
    import('../../components').then(
      (mod) => mod.Rocket,
      (e) => null as never
    ),
  {
    loading: function loadSkeleton() {
      return <Skeleton />;
    }
  }
);

const MarketName = dynamic(
  () =>
    import('../../components').then(
      (mod) => mod.MarketName,
      (e) => null as never
    ),
  {
    loading: function loadSkeleton() {
      return <Skeleton />;
    }
  }
);

const Discount = dynamic(
  () =>
    import('../../components').then(
      (mod) => mod.Discount,
      (e) => null as never
    ),
  {
    loading: function loadSkeleton() {
      return <Skeleton />;
    }
  }
);

const Suggested = dynamic(
  () =>
    import('../../components').then(
      (mod) => mod.Suggested,
      (e) => null as never
    ),
  {
    loading: function loadSkeleton() {
      return <Skeleton />;
    }
  }
);

const Item = (props: Props) => {
  const { data } = props;

  function getLink() {
    let name = data.name.replace(/[^a-z\d]+/gi, '-');
    if (name.charAt(name.length - 1) === '-') {
      name = name.substr(0, name.length - 1);
    }
    if (name.charAt(0) === '-') name = name.substr(1, name.length - 1);
    name = name.toLowerCase();
    return name;
  }

  return (
    <Link href='/[...itemDetail]' as={getLink() + '/item/' + data.item_id}>
      <div className='w-full p-4 rounded-lg bg-gray700 cursor-pointer'>
        <div className='flex items-center w-full mb-1'>
          <div className='flex-1'>
            <Rocket auto={data.auto} by={data.by} />
          </div>
          <Suggested data={data} />
        </div>
        <div className='flex justify-center w-full'>
          {/* <img src={data.image} className='h-20 w-32' loading="lazy" /> */}
          <LazyLoadImage src={data.image} width={80} height={113} effect='blur' alt='image' />
          {/* <div className='h-20 w-32 relative'>
            <Image src={data.image} layout='fill' />
          </div> */}
        </div>
        <div className='text-gray500 font-poppins font-light text-xs mt-1 h-4.5'>{data.type}</div>
        <MarketName
          className='text-almost_white font-poppins font-medium text-xs mt-1 h-4.5 text-ellipsis'
          data={data}
        />
        <div className='flex items-center w-full my-1 h-4.5'>
          {data.full_ex && data.exterior && (
            <div className='flex-1 text-gray500 font-poppins font-light text-xs'>
              {data.full_ex}
            </div>
          )}
          {(data.float || (data.inspect_item && data.inspect_item.floatvalue)) && (
            <div className='text-gray300 font-poppins font-medium text-xs'>
              {data.float
                ? parseFloat(data.float).toFixed(4)
                : data.inspect_item
                ? parseFloat(data.inspect_item.floatvalue).toFixed(4)
                : ''}
            </div>
          )}
        </div>
        {data.float ? (
          <Progress percent={parseFloat(data.float) * 100} />
        ) : data.inspect_item && data.inspect_item.floatvalue ? (
          <Progress percent={data.inspect_item.floatvalue * 100} />
        ) : (
          <div className='h-5.5'></div>
        )}
        <div className='flex items-center w-full mt-4'>
          <div className='flex-1 text-almost_white font-poppins font-medium text-xs'>
            $ {data.price / 1000}
          </div>
          <Discount
            className='h-6 w-10 rounded-lg bg-dark_green flex items-center justify-center text-green font-poppins font-medium text-xs'
            data={data}
          />
        </div>
        <div className='flex items-center w-full mt-4'>
          <button className='flex-1 h-10 rounded-lg bg-almost_black flex items-center justify-center text-almost_white font-poppins font-medium text-xs'>
            Buy now
          </button>
          <button className='w-10 h-10 flex items-center justify-center rounded-lg border-2 border-solid border-gray800 ml-2'>
            <Image alt='image' src='/icons/shopping-add.svg' width={19} height={14} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
