import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

function PopularMenu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setMenu(popularItems);
            })
    }, []);

    return (
        <div className='mb-12 space-x-2 container mx-auto'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    )
}

export default PopularMenu;
