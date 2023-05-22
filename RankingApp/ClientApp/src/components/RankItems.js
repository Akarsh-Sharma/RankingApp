﻿import React, { useState, useEffect } from 'react';

const RankItems = () => {

    const [items, setItems] = useState([]); 

    const dataType = 1; // if dataType is 1 then it is a movie data collection

    useEffect(() => {
        fetch(`item/${dataType}`).then((results) => {
            return results.json();
        }).then(data => {
            setItems(data);
        })
    }, [])

    return (
        <main>
            {items != null ? (
                items.map((item) => <h3 key={item.id}>{item.title}</h3>)
            ) : (
                <div>Loading...</div>
            )}
        </main>
    )
}

export default RankItems;