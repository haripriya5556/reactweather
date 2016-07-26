var React=require('react');
var {Link}=require('react-router');
var Nav=(props)=>{

  return (
    <div>
    <h1>nav component</h1>
    <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>GetWeather</Link>
    <Link to="/About"activeClassName="active"activeStyle={{fontWeight:'bold'}}>About</Link>
    <Link to="/Examples"activeClassName="active"activeStyle={{fontWeight:'bold'}}>Examples</Link>
    <a href="#/about">Go To About</a>
    </div>
  );
};

module.exports=Nav;
