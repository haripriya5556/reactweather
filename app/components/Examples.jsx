var React=require('react');
var {Link}=require('react-router');
var Examples=(props)=>{

    return(
      <div>
      <h1 className="text-center page-title">Examples </h1>
      <p>Here are few  example locations try it</p>
      <ol>
        <li>
          <Link to='/?location=hyderabad'>hyderabad</Link>
        </li>
        <li>
          <Link to='/?location=ahmedabad'>ahmedabad</Link>
        </li>
      </ol>
      </div>

    );
  };


module.exports=Examples;
