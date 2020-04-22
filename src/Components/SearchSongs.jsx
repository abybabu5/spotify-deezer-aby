import React, {Component} from 'react';
import {InputGroup, FormControl} from "react-bootstrap";
import {fromEvent} from "rxjs";
import {debounceTime, map} from "rxjs/operators";

class SearchSongs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // rxjs fromEvent will subscribe the keyup event chained with the debounce
        // to avoid API calls while the user is typing
        // then the searchFn from the parent component will called to fire the search
        fromEvent(document.getElementById("searchText"), "keyup")
            .pipe(
                debounceTime(1000),
            ).subscribe((input) => {
            this.props.searchFn(document.getElementById("searchText").value);
            console.log(input);
        })
    }

    render() {
        return (
            <div className={'search-bar'}>
                <InputGroup className="search-songs">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">🎧</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="🔍 Eg: Madonna"
                        aria-label="Search"
                        aria-describedby="basic-addon1" id="searchText"
                    />
                </InputGroup>
            </div>

        );
    }
}

export default SearchSongs;
