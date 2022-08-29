import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount () {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
               <h2>{this.props.detail.Title}</h2> 
               <img src={this.props.detail.Poster} alt="Poster not found" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detail: state.movieDetail
    }
}

export default connect(mapStateToProps, {getMovieDetail})(Movie);