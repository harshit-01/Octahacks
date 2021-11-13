import './App.css';
import {Route, Link,Switch} from "react-router-dom";
import FixedNavbar from './Navbar/navbar.js'
import Tutor  from './Resources/Tutor';
import Home from './Home/Home.js';
import Pricing from './Pricing/Pricing.js'
import DiscussionForum from './DiscussionForum/DiscussionForum'
import PersonalInstructor from './PersonalInstructor/PersonalInstructor.js';
import AboutUs from "./AboutUs/AboutUs.js";
import Payment from "./Payment/Payment.js";
import { useSelector, useDispatch } from 'react-redux'
import {setUserData} from './Redux/actions/UserAction.js'
function App() {
  const dispatch = useDispatch();
  const User = useSelector((state) => { console.log(state) });
  return (
    <div className="App">
      <FixedNavbar />
      <Switch>
        <Route path="/tutor" component={Tutor} />
        <Route exact path="/personal-instructor" component={PersonalInstructor} />
        <Route path="/personal-instructor/chat/:ID" component={DiscussionForum} />
        <Route path="/discussion-forum" component={DiscussionForum} />
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/home" component={Home} />
        <Route path="/payment" component={Payment} />
        <Route path="/"component={Home} />
      </Switch>
    </div>
  );
}

export default App;
