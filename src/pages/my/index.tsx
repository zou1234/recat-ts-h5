
import {useSelector} from "react-redux";
// import {useState} from "react";

function My() {
    const data = useSelector<any>(state => state.userInfo);

    const handleClick = () => {
        console.log(data);
        // setList(100)
    }

  return (
      <div>
        <button onClick={handleClick}>点击</button>
      </div>
  );
}

export default My;
