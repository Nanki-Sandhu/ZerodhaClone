import React from 'react';
function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3">
                    <img src="/media/smallcaseLogo.png"  style={{width:"40%"}}/>
                    <p className="text-small mt-2 text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/streakLogo.png" style={{width:"40%"}} />
                    <p className="text-small mt-2 text-muted">Alogo & strategy platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/sensibullLogo.svg" style={{width:"40%"}} />
                    <p className="text-small mt-2 text-muted">Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/zerodhaFundhouse.png" style={{width:"40%"}}/>
                    <p className="text-small mt-2 text-muted">Asset Management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/goldenPiLogo.png" style={{width:"40%"}} />
                    <p className="text-small mt-2 text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/dittoLogo.png" style={{width:"40%"}}/>
                    <p className="text-small mt-2 text-muted">Insurance</p>
                </div>

                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Sign up For Free</button>
            </div>
        </div>
    );
}

export default Universe;