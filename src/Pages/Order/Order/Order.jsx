import React, { useState } from 'react'
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === "dessert");
  const pizza = menu.filter(item => item.category === "pizza");
  const salad = menu.filter(item => item.category === "salad");
  const soup = menu.filter(item => item.category === "soup");
  const drinks = menu.filter(item => item.category === "drinks");

  return (
    <div>
      <Cover title="Order Food" img={orderCover}></Cover>

      <div className="container mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex flex-wrap justify-center my-5">
            <Tab className="px-4 py-2 mx-2 mb-2 border border-gray-300 rounded cursor-pointer">
              Salad
            </Tab>
            <Tab className="px-4 py-2 mx-2 mb-2 border border-gray-300 rounded cursor-pointer">
              Pizza
            </Tab>
            <Tab className="px-4 py-2 mx-2 mb-2 border border-gray-300 rounded cursor-pointer">
              Dessert
            </Tab>
            <Tab className="px-4 py-2 mx-2 mb-2 border border-gray-300 rounded cursor-pointer">
              Soup
            </Tab>
            <Tab className="px-4 py-2 mx-2 mb-2 border border-gray-300 rounded cursor-pointer">
              Drink
            </Tab>
          </TabList>

          
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
