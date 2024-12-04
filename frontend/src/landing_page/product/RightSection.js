import React from 'react';
function RightSection({ productName, productDescription, imageURL, learnMore }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1 style={{marginTop:"5em"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{ textDecoration: "none" }}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;