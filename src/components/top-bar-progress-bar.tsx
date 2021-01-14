import Router from 'next/router'
import NProgress from 'nprogress'
import { FC } from 'react'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const TopProgressBar: FC = () => {
  return <></>
}

export default TopProgressBar
