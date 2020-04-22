import React, {Component} from 'react';
import {Card, Col, Row } from "react-bootstrap";


class AlbumComponent extends Component {
    state = {paused: true};

    togglePlay  = () => {
        this.props.playSong(this.props.album);
    };
    render() {
        const album = this.props.album;
        return (
            <Row>
                <Col className={'col album-col'}>
                    <Card style={{ 'margin': '10px'}}>
                        <a href={'/album/'+ album.album.id}><Card.Img variant="top" src={album.album.cover_big} /></a>
                        <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            {this.props.details && <Card.Text>
                                <div className="artist-box">
                                    <a href={'/artist/'+ album.artist.id}><img className="artist-picture" src={album.artist.picture} alt={'#'}/></a>
                                    <div className="artist-name">{album.artist.name}</div>
                                    <div className={'play-arrow'} onClick={this.togglePlay}><i
                                        className="material-icons cursor-pointer">play_arrow</i></div>
                                </div>

                            </Card.Text>}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        );
    }
}

export default AlbumComponent;
