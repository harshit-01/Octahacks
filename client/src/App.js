import './App.css';
import {Route, Link,Switch} from "react-router-dom";
import FixedNavbar from './Navbar/navbar.js'
import Tutor  from './Resources/Tutor';
import Home from './Home/Home.js';
import Pricing from './Pricing/Pricing.js'
import DiscussionBoard from './DiscussionBoard/DiscussionBoard.js'

function App() {
  return (
    <div className="App">
      <FixedNavbar />
      <Switch>
        <Route path="/tutor" component={Tutor} />
        <Route path="/personal-instructor" />
        <Route path="/discussion-forum" component={DiscussionBoard} />
        <Route path="/aboutus" />
        <Route path="/pricing" component={Pricing}/>
        <Route path="/home"component={Home} />
        <Route path="/"component={Home} />
      </Switch>
    </div>
  );
}

export default App;
