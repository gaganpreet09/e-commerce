import "./home-styles/body.scss";


function Body() {


    return (
        <div className="main">
            <div className="text-div">
                <h1 className="main-text">Simplify Everything.</h1>
            </div>
            <div className="figures-parent">
                <div className="figures">
                    <div className="capsule" >
                        <div className="capsule-button">
                            <p>#simplifyFashion</p>
                        </div>
                    </div>
                    <div className="semi-circle">
                        <div className="capsule-button">
                            <p>#simplifyToys</p>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="capsule-button">
                            <p>#simplifyElectronics</p>
                        </div>
                    </div>
                    <div className="shape">
                        <div className="capsule-button">
                            <p>#simplifyAppliances</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Body;
