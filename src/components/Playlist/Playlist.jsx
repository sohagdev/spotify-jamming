import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export class Playlist extends Component {
  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={this.props.playlistName} />
        <TrackList tracks={this.props.playlistTracks} />
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist
