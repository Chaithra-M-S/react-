import { LOGO_URL } from "../utils/constants.js";

const Headers = () => {
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} />

      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

      </div>

    </div>
  )
}
export default Headers;