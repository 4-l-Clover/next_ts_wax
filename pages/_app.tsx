
import React, { Fragment } from 'react'
import store from '../services/store'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import '../styles/index.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

interface Props {
  Component: any,
  pageProps: any,
};

function MyApp ({ Component, pageProps }: Props) {
  const router = useRouter()
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} router={router}/>
        <ReduxToastr position="top-right" />
      </Provider>
    </Fragment>
  )
}

export default MyApp
