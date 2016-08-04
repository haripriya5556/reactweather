var React=require('react');
var About= (props)=>{

    return(
      <div>
      <h1 className="text-center page-title"> About </h1>
      <p>This is a weather application</p>
      <p>tools we used</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">openweathermap</a>
        </li>
      </ul>
      </div>

    );
  };

module.exports=About;
