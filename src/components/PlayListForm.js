import React, { Component } from 'react';
class PlayListForm extends Component {


  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  } // ends constructor props and state

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  // handleNameChange () {
  //   let userName = (e) => {
  //     this.setState({userName: e.target.value})
  //   }
  // }

  // handleArtistUpdate () {
  //   let songArtist = (e) => {
  //     this.setState({songArtist: e.target.value})
  //   }
  // }

  handleSubmit (e) {

    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    }).then(response => {
        console.log(response, "yay");
      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}



  render () {
    return (
      <div id="playlistform-wrapper" className="col-md-5">
        <form onSubmit={this.handleSubmit} action={this.handleSubmit}>
            <label htmlFor="userName">User Name</label>
            <input name="userName" id="userName" onChange={this.handleChange} type="text" value={this.state.userName} />
            <label htmlFor="songArtist">Artist/Band</label>
            <input name="songArtist" onChange={this.handleChange} type="text" value={this.state.songArtist} />
            <label htmlFor="songTitle">Song Title</label>
            <input name="songTitle" onChange={this.handleChange} type="text" value={this.state.songTitle} />
            <label htmlFor="songNotes">Notes About Song</label>
            <input name="songNotes"  onChange={this.handleChange} type="text" value={this.state.songNotes} />
            <input type="submit" value="Submit" />
        </form>
      </div>

    )
  }
}



export default PlayListForm;
