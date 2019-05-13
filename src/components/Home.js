import React from 'react'
// import { Jumbotron, Grid } from 'react-bootstrap';
import './Home.css';
import home from './home.jpg';

const Home = () => {
    return (
<div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1>Welcome to e-Skarbnik application!</h1>
        <p className="lead">e-Skarbnik is an application made for menagement of class or group foundrising.</p>
        <p>If You are a student propably you often chip in to a lot of stuff, like a going out to cinema whole class, teachers day, or for example small gift for educator, or lady with the Dean's Office. For Those actions you have to choose an treasurer wich will take care of foundrasing. But from an experience we know that usualy nobody want this role. This is due to the fact that treasurer is an responsible, painstaking and often hard job.</p>
        <p>Fortunately, with the help comes e-Skarbnik!</p>

        <p>Why raising founds with an e-Skarbnik is better than traditional raising money?</p>
        <ul class="fa-ul">
          <li><span class="fa-li" ><i class="fas fa-check-square"></i></span>We do not have to involve a specific person.</li>
          <li><span class="fa-li" ><i class="fas fa-check-square"></i></span>Notice board for your school.</li>
          <li><span class="fa-li" ><i class="fas fa-check-square"></i></span>Information about the collection will go to everyone.</li>
          <li><span class="fa-li" ><i class="fas fa-check-square"></i></span>There is no possibility that the physical treasurer will be robbed, he will take money or (at worst) he will spend the collected money on alcohol or other drugs (especially dangerous in the case of student collections).</li>
          <li><span class="fa-li"><i class="far fa-square"></i></span>We can pay via the Internet, using several platforms.</li>
          <li><span class="fa-li"><i class="far fa-square"></i></span>We have the option of including the viewer who paid and who did not.</li>
          <li><span class="fa-li"><i class="far fa-square"></i></span>NavItem "payments" where every student will be able to see only events created by member of student's class.</li>
        </ul>
      </div>
      <div className="col-md-6">
        <img src={home} alt="e-Skarbnik" className="img-responsive img-circle" width="100%" />
      </div>
    </div>
</div>
    )
}

export default Home;