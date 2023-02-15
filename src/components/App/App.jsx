import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import TrackList from '../TrackList/TrackList'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [
        { id: 1, name: 'sohag', artist: 'kyle', album: 'bass' },
        { id: 2, name: 'sohag2', artist: 'kyle2', album: 'bass2' },
        { id: 3, name: 'sohag3', artist: 'kyle3', album: 'bass3' }
      ],
      playListName: 'My Playlist',
      playlistTracks: [
        {
          id: 4,
          name: 'playlist1',
          artist: 'playlistArtist1',
          album: 'playlistAlbum1'
        },
        {
          id: 5,
          name: 'playlist2',
          artist: 'playlistArtist2',
          album: 'playlistAlbum2'
        },
        {
          id: 6,
          name: 'playlist3',
          artist: 'playlistArtist3',
          album: 'playlistAlbum3'
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return
    }
    tracks = [...tracks, track]
    this.setState({ playlistTracks: tracks })
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id)
    this.setState({ playlistTracks: tracks })
  }
  updatePlaylistName(name) {
    this.setState({ playListName: name })
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playListName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
