import React, { Component } from 'react';


export default class PlayList extends Component {

  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.state = {
      songs: []
    }
  }

  createCards (response) {
    let playlistCards = response.map(card => {
      return (
        <div className="card">
            <div className="card-block">
              <p className="username">User: {card.userName}</p>
              <p className="artist">Artist/Band: {card.songArtist}</p>
              <p className="title">Title: {card.songTitle}</p>
              <p className="notes">Notes: {card.songNotes}</p>
            </div>
        </div>
      )
    })
    this.setState({songs: playlistCards})
  }


  render () {
    return (
      <div id="playlist-wrapper" className="col-md-5">
        <button id="update-form" onClick={this.handleUpdate}>Update</button>
        <div>{this.state.songs}</div>
      </div>
    )
  }

  handleUpdate () {
    let songRecommendations = "https://tiny-lasagna-server.herokuapp.com/collections/playlisting";
    fetch(songRecommendations)
      .then(response => response.json())
      .then(response => {
        this.createCards(response);
    })
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then (response => response.json())
    .then (response => {
      this.createCards(response);
    })
  }

}
