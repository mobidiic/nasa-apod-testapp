import React, { Component } from 'react'
import ViewerTemplate from './ui/ViewerTemplate'
import SpaceNavigator from './ui/SpaceNavigator'
import Viewer from './ui/Viewer'
import * as api from '../lib/api'
import moment from 'moment'

class App extends Component{

  state ={
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async(date) => {
    if(this.state.loading){
      return
    }
    this.setState({
      loading: true
    })
   try{
     const response = await api.getAPOD(date)
     const { date: retrievedDate, url, media_type: mediaType} =response.data
     if(!this.state.maxDate){
       this.setState({
         maxDate: retrievedDate
       })

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      })
     }
   }catch(e){
     console.log(e)
     this.setState({
       loading: false
     })
   }
 }

 handlePrev = () => {
   const { date } = this.state
   const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD')
   console.log(prevDate)
   this.getAPOD(prevDate)
 }

 handleNext = () => {
   const { date } = this.state
   const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD')
   console.log(nextDate)
   this.getAPOD(nextDate)
 }

  componentDidMount(){
    this.getAPOD()
  }

  render(){
    const { url, mediaType, loading } =this.state
    const { handlePrev, handleNext } = this

    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext}/>}
        viewer={<Viewer url={url}
                        mediaType={mediaType}
                        loading={loading}/>}
        />
    )
  }
}

export default App
