import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Logo from '../../../Assets/logo.png';
import TopLogo from '../../../Assets/top-logo-white.png';
import BackgroundLogo from '../../../Assets/bg.jpg';

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className="login-bg"
            style={{
              background: `url(${BackgroundLogo}) no-repeat center center fixed`,
            }}
          >
            <div className="container">
              <div className="row justify-content-center pt-3">
                <div className="col-md-8 col-xl-4 col-lg-6 col-12">
                  <h3 className="text-center">
                    {' '}
                    <img src={TopLogo} alt="Digiclass" />
                  </h3>
                </div>
              </div>

              <div className="row justify-content-center pt-3">
                <div className="col-xl-4 col-lg-5 col-md-7 col-12 ">
                  <div className="outter-login">
                    <div className="row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-7">
                        <p className="f-20 pt-3 text-skyblue"> Sign in </p>
                      </div>
                      <div className="col-xl-4 col-lg-3 col-md-5 col-5">
                        <h3 className="text-center">
                          {' '}
                          <img src={Logo} alt="Digischeduler" />
                        </h3>{' '}
                      </div>
                    </div>

                    <React.Fragment>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                          <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </React.Fragment>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-2">
                <p className="text-center text-white ">
                  {' '}
                  &copy;{new Date().getFullYear()},{' '}
                  <a
                    href="https://www.digivalsolutions.com/"
                    target="blank"
                    className="text-white"
                  >
                    Digival Solutions Pvt Ltd{' '}
                  </a>
                  . All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
