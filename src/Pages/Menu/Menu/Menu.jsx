import React from 'react'
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

function Menu() {
    return (
        <div>
            <Helmet>
                <title>ProjectPlus | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={dessertImg} title="Desert"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={pizzaImg} title="Pizza"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={saladImg} title="Salad"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={soupImg} title="Soups"></Cover>
            <PopularMenu></PopularMenu>
            
        </div>
    )
}

export default Menu;