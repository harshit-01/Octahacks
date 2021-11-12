import './App.css';
import {Route, Link,Switch} from "react-router-dom";
import FixedNavbar from './Navbar/navbar.js'
import Tutor  from './Resources/Tutor';
import Home from './Home/Home.js';
import Pricing from './Pricing/Pricing.js'
import DiscussionForum from './DiscussionForum/DiscussionForum'
import PersonalInstructor from './PersonalInstructor/PersonalInstructor.js';
import AboutUs from "./AboutUs/AboutUs.js";

function App() {
  return (
    <div className="App">
      <FixedNavbar />
      <Switch>
        <Route exact path="/tutor" component={Tutor} />
        <Route exact path="/personal-instructor" component={PersonalInstructor} />
        <Route exact path="/personal-instructor/chat/:ID" component={DiscussionForum} />
        <Route exact path="/discussion-forum" component={DiscussionForum} />
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/pricing" component={Pricing}/>
        <Route exact path="/home"component={Home} />
        <Route exact path="/"component={Home} />
      </Switch>
    </div>
  );
}

export default App;
