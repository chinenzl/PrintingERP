import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function Nav() {
  const [isAuth, setAuthState] = useState(false);
  const auth = getAuth();
  const [username, setUserName] = useState(null);
  // const signout = signOut();
  const handleLogout = () => {
    signOut(auth);
    setAuthState(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.email);
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    });
  }, [auth]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="jobList">
                Job List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="jobDone">
                Job Done
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="expense">
                Expense Claim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="time">
                Time Sheets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="price">
                Price Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="vehicle">
                Vehicle Info
              </a>
            </li>
          </ul>
          {!isAuth && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="signup">
                  SignUp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">
                  LogIn
                </a>
              </li>
            </ul>
          )}
          {isAuth && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Nav;
