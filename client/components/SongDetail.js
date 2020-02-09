import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import fetchSongById from '../queries/fetchSongById';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';


class SongDetail extends Component {

  render() {
    const { song } = this.props.data;
    if (!song) { return <div>Loading...</div> }

    return (
      <div>
        <Link to="/">Back</Link>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id} />

      </div>
    )
  }
}

export default graphql(fetchSongById, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);