import React, { Component } from 'react'
import ViewerTemplate from './ui/ViewerTemplate'
import SpaceNavigator from './ui/SpaceNavigator'
import Viewer from './ui/Viewer'
import * as api from '../lib/api'

class App extends Component{

  getAPOD = async(date) => {
   try{
     const response = await api.getAPOD(date)
     console.log(response)
   }catch(e){
     console.log(e)
   }
 }

  componentDidMount(){
    this.getAPOD()
  }

  render(){
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
        viewer={<Viewer
                    url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
                    mediaType="video" />}
        />
    )
  }
}

export default App
