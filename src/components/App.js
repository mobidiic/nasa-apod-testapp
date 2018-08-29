import React, { Component } from 'react'
import ViewerTemplate from './ui/ViewerTemplate'
import SpaceNavigator from './ui/SpaceNavigator'

class App extends Component{
  render(){
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}/>
    )
  }
}

export default App
