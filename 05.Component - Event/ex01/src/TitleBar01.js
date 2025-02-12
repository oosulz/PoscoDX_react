import React from 'react';

function TitleBar01(){
  const onClick = function(){
    console.log("TitleBar01 clicked");
  };
  return (
    <div>
      <h4 onClick={onClick}>
        Function Handler in Function Component(Click Here!)
      </h4>
    </div>
  )
}

export default TitleBar01;

render(){
  return {
      <div>
      <h4>
      Function Handler in Function Component(Click Here!)
      </h4>


  </div>    }
}
