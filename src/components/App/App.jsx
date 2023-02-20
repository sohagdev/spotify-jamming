import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [],
      playListName: 'My Playlist',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
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
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri)
    Spotify.savePlayList(this.state.playListName, trackURIs).then(() => {
      this.setState({
        playListName: 'New Playlist',
        playlistTracks: []
      })
    })
  }
  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults })
    })
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar onSearch={this.search} />
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
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}
// I will finish this project tomorrow
export default App
// this is the test commit
