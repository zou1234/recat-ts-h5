import {useNavigate} from "react-router-dom";
import {useDispatch, } from "react-redux";
import {getUserInfo} from "../../store/modules/userInfo.ts";
import {useRef} from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const inputRef = useRef(null)

  const handleClickLogin = async () => {
    await dispatch(getUserInfo());
    if(sessionStorage.getItem("token")) navigate('/')
  }

  return (
      <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClickLogin}>点击登录</button>
      </>
  );
}
export default Login;
