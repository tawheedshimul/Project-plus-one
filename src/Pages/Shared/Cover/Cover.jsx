import React from 'react';
import { Parallax } from 'react-parallax';

function Cover({ img, title }) {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            bgImageStyle={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
        >
            <div className="hero my-20 container mx-auto">
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            {/* <div style={{ height: '200px' }} /> */}
        </Parallax>
    );
}

export default Cover;