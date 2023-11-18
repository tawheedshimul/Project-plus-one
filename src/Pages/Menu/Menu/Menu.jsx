import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

function Menu() {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>ProjectPlus | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>

            {/* offered menu  */}
            <MenuCategory items={offered}></MenuCategory>
            <div>
                {/* dessert menu items  */}
                <MenuCategory
                    items={dessert}
                    title="dessert"
                    img={dessertImg}
                ></MenuCategory>
                {/* pizza  */}
                <MenuCategory
                    items={pizza}
                    title="pizza"
                    img={pizzaImg}
                ></MenuCategory>

                {/* salad  */}
                <MenuCategory
                    items={salad}
                    title="salad"
                    img={saladImg}
                ></MenuCategory>

                {/* soup */}

                <MenuCategory
                    items={soup}
                    title="soup"
                    img={soupImg}
                ></MenuCategory>
            </div>
        </div>
    )
}

export default Menu;