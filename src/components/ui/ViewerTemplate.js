import React from 'react'
import classNames from 'classnames/bind'
import '../../../stylesheets/ViewerTemplate.scss'


const ViewerTemplate = ({ viewer, spaceNavigator}) => (
  <div className='viewer-template'>
    <header>Astronomy Picture of the Day</header>
    <div className='viewer-wrapper'>
      {viewer}
      <div className='spaceNavigator-wrapper'>
      {spaceNavigator}
      </div>
    </div>
  </div>
)

export default ViewerTemplate
