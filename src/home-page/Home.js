import Nav from './home-components/Nav'
import Body from './home-components/Body'
import './main.scss';

function Home() {
    return (<div className="body">
        {/* <div className="hh"> */}
        <Nav />
        <Body />
        {/* </div> */}
    </div>
    );
}




export default Home;