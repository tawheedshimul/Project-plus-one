import React from 'react';
import { Parallax } from 'react-parallax';

function Cover({ img, title }) {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
        >
            <div className="hero sm:w-full md:h-[500px] my-24 container mx-auto">
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold uppercase">{title}</h1>
                        <p className="mb-1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default Cover;
