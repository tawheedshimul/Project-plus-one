import React, { useEffect, useState } from 'react'

function useMenu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://rendertetsw.onrender.com/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });

    }, []);

    return [menu, loading]
}

export default useMenu;