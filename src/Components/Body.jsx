import React, {Component} from 'react';
import SearchSongs from "./SearchSongs";
import {Col, Row} from "react-bootstrap";
import {ajax} from "rxjs/internal-compatibility";
import {Spinner} from 'reactstrap'
import AlbumComponent from "./AlbumComponent";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: null,
            search: "Pop"
        };
    }

    updateData() {
        this.setState({albums: null});
        ajax({
            url: "https://deezerdevs-deezer.p.rapidapi.com/search?limit=24&q=" + this.state.search,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "cb753e0d56mshbfbe5c88f5791aap1c862fjsn7d6969ec9764"
            }
        })
            .toPromise()
            .then(songs => {
                this.setState({
                    albums: songs.response.data
                });
            });
    }

    componentDidMount = () => {
        this.updateData();
    };

    // this function will be called when the album data need to be rendered again
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.search !== this.state.search) {
            this.updateData();
        }
    }

    // this function will be called to bridge the search input with the state
    searchFn = (input) => {
        this.setState({search: input});
    }

    render() {
        let albums = this.state.albums;
        return (
            <>

                <div className="mt-2 search-container">
                    <SearchSongs searchFn={this.searchFn}/>
                </div>

                <Row>
                    {!albums && <Col className="mt-7"><Spinner color="success"/></Col>}
                    {albums && albums.map(album =>
                        <Col className="col-3 align-content-center justify-content-center" key={albums.id}>
                            <AlbumComponent playSong={this.props.playSong} details={true} album={album}/>
                        </Col>
                    )}
                </Row>

            </>
        );
    }
}

export default Body;
