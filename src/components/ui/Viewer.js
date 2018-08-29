import React, { Component } from 'react'
import styles from '../../../stylesheets/Viewer.scss'
import classNames from 'classnames/bind'
import { ChasingDots } from 'better-react-spinkit'

const cx = classNames.bind(styles)

const Viewer = ({url, mediaType, loading}) => {
  if(loading){
    return(
      <div className={cx('viewer')}>
        <ChasingDots color="white" size={40} />
      </div>
    )
  }
  if(!url) return null
  else return (
    <div className={cx('viewer')}>
      {
        mediaType ==='image' ?
          <img onClick={()=> window.open(url)} src={url} alt="space" /> :
          <iframe title="space-video" src={url} frameborder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
      }
    </div>
  )
}

export default Viewer
