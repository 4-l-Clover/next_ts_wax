import React from 'react'
import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getItemDetail } from '@services/itemDetail/itemDetailActions'

type Props = {
  itemDetailActions: {
    getItemDetail: Function
  },
  currentItem: any,
  loading: boolean
}

function ItemDetail (props: Props) {
  const Page = dynamic(() =>
    import('../components').then((mod) => mod.Page, e => null as never),
  { loading: function loadSkeleton () { return <Skeleton /> } }
  )
  const Breadcrumb = dynamic(() =>
    import('../components').then((mod) => mod.Breadcrumb, e => null as never),
  { loading: function loadSkeleton () { return <Skeleton /> } }
  )
  const LeftBlock = dynamic(() =>
    import('../components').then((mod) => mod.leftBlock, e => null as never),
  { loading: function loadSkeleton () { return <Skeleton /> } }
  )

  const RightBlock = dynamic(() =>
    import('../components').then((mod) => mod.rightBlock, e => null as never),
  { loading: function loadSkeleton () { return <Skeleton /> } }
  )

  const router = useRouter()
  const itemDetail = router.query.itemDetail || []
  const name = itemDetail[0]
  const id = itemDetail[2]
  const params = {
    id: id, item: name, time: '12h'
  }

  React.useEffect(() => {
    if (!name || !id) return
    props.itemDetailActions.getItemDetail(params)
  }, [name, id])
  return (
    <div>
      {props.currentItem && props.currentItem.success
        ? <Page>
          <div className='flex-1 h-full flex overflow-auto bg-gray900'>
            <div className="flex-1 overflow-auto bg-background h-full flex justify-center items-start">
              <div className="py-4">
                <Breadcrumb />
                <div className="flex justify-center">
                  <LeftBlock />
                  <RightBlock />
                </div>
              </div>
            </div>
          </div>
        </Page>
        : <div className="bg-gray900 h-300">loading...</div>}
    </div>

  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem
  }),
  dispatch => ({
    itemDetailActions: bindActionCreators({ getItemDetail }, dispatch)
  })
)(ItemDetail)
