import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import { constants } from '../constants/constants';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import SearchResult from './SearchResult';

function MainHeaderSearchBox() {
    let [searchQuery, setSearchquery] = useState('');
    let [isSearchBoxFocused, setSearchBoxFocus] = useState(false);
    let [dataToSearch, setDataTosearch] = useState([]);
    let [searchResult, setSearchResult] = useState([]);
    let mainRef = useRef();

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get('https://reqres.in/api/users');
            setDataTosearch(response.data.data);
        }
        loadData();
    }, []);

    useEffect(() => {
        let matches = [];
        if (searchQuery) {
            matches = dataToSearch.filter(searchedData => {
                const regex = new RegExp(`${searchQuery}`, 'gi');
                return searchedData.email.match(regex);
            })
            setSearchResult(matches)
        }
        else {
            setSearchResult([])
        }
    }, [searchQuery]);
    return (
        <>
        <div style={{padding:0,margin:0}} ref={mainRef}>
        <Form className="d-flex" style={{ padding: '0', boxShadow: 'none', position: 'relative' }}>
                <Form.Control
                    id='header-search-box'
                    type="search"
                    placeholder={constants.SEARCH}
                    aria-label="Search"
                    value={searchQuery}
                    onChange={e => setSearchquery(e.target.value)}
                    style={{ borderRadius: '0px' }}
                    onFocus={() => setSearchBoxFocus(true)}
                    onBlur={() => {setSearchBoxFocus(false);  setSearchquery('')}}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                <div className='header-search-box-close-btn' style={{ color: '#03A9F4', position: 'absolute', right: '0', top: '0', padding: '10px 10px 15px 10px' }}><FontAwesomeIcon style={{ visibility: searchQuery ? 'visible' : 'hidden', cursor: 'pointer' }} icon={faXmark} onClick={() => setSearchquery('')} /></div>
            </Form>
            {searchQuery && <SearchResult setSearchBoxFocus={setSearchBoxFocus} width={mainRef.current.clientWidth}  searchResult={searchResult}/>}
        </div>
        </>
    )
}

export default MainHeaderSearchBox;