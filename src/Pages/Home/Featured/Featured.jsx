import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

function Featured() {
    return (
        <div className='container bg-fixed mx-auto text-white featured-item py-12'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            >
            </SectionTitle>
            <div className='md:flex justify-center  items-center space-x-5 px-12 bg-green-900 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 py-10 space-y-2'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus, illum, dolor in repellat aliquid fugit animi exercitationem possimus quae facere sunt pariatur, odit iusto assumenda ex consequuntur alias reiciendis voluptatibus. Doloremque aut necessitatibus excepturi id iusto incidunt accusamus repellendus sed ex praesentium, quaerat quisquam. Labore fugit, voluptatibus vel culpa blanditiis quod fugiat, voluptates ipsam ullam eligendi possimus soluta?</p>
                    <button className='btn btn-outline border-0 border-b-2 text-green-800'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;