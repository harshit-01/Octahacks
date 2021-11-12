import './App.css';
import {Route, Link,Switch} from "react-router-dom";
import FixedNavbar from './Navbar/navbar.js'
import Tutor  from './Resources/Tutor';
import Home from './Home/Home.js';
import Pricing from './Pricing/Pricing.js'
import DiscussionForum from './DiscussionForum/DiscussionForum.js'
import PersonalInstructor from './PersonalInstructor/PersonalInstructor.js';
import AboutUs from "./AboutUs/AboutUs.js";

function App() {
  return (
    <div className="App">
      <FixedNavbar />
      <Switch>
        <Route path="/tutor" component={Tutor} />
        <Route path="/personal-instructor" component={PersonalInstructor} />
        <Route path="/discussion-forum" component={DiscussionForum} />
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/home"component={Home} />
        <Route path="/"component={Home} />
      </Switch>
    </div>
  );
}

export default App;
