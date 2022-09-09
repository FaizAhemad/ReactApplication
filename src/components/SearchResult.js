import React from 'react'
function SearchResult({searchResult,width}) {
    return (
        <div style={{  border: '2px solid red', background: 'white',position:'absolute',width:width?width:'' }}>
            {
                searchResult.length ?
                    searchResult.map(res => {
                        return (<p key={res.id}>
                            {res.email}
                        </p>)
                    }) : (<p>
                        Your search not found
                    </p>)
            }
        </div>
    )
}

export default SearchResult