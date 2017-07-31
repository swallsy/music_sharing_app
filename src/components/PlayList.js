import React, { Component } from 'react';
export default class PlayList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then (response => response.json())
    .then (response => {
      console.log(response);
      let increment = 1;
      let playlistCards = response.map(card => {
        return (
          <div key={"card" + (increment++)}  className="col-sm-6">
            <div className="card">
              <div className="card-block col-md-6">
                <p className="username">User: {card.userName}</p>
                <p className="artist">Artist/Band: {card.songArtist}</p>
                <p className="title">Title: {card.songTitle}</p>
                <p className="notes">Notes: {card.songNotes}</p>
              </div>
            </div>
          </div>
        )
    })
      this.setState({cards: playlistCards})
  })
      .catch(function (error) {
        console.log(error);
      });
}
  //
  // handleSubmit () {
  //   let fetchData = (e) => {
  //       e.preventDefault();
  //       fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
  //         return results.json();
  //       }).then(data => {
  //         this.setState({songs: data});
  //       })
  //   }
  // }

  render () {
    return (
      <div className="col-sm-5 cards">
        <div>{this.state.cards}</div>
      </div>
    )
  }
}
