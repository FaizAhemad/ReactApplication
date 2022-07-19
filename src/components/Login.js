import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'
import { days, months, years, getAllCountriesUrl, formVariables, defaultScrollPosition, validEmail, validPassword } from '../constants/constants';
import { login } from '../actions/login-actions';
import { changeProductView } from '../actions/products-action';
import { setPageNotFoundComponent } from '../actions/general-actions';

function Login({ user, isAdmin, isLoggedIn, funcLogin, setPageNotFound, ...props }) {
  const Location = useLocation();
  let [pathname, setPathname] = useState(Location.pathname);
  let [useremail, setUserEmail] = useState('');
  let [password, setPassword] = useState('');
  let [unameValidationError, setuNameValidationError] = useState('');
  let [passwordValidationError, setpasswordValidationError] = useState('');
  let [fname, setFname] = useState('');
  let [mname, setMname] = useState('');
  let [lname, setLname] = useState('');
  let [regEmail, setregEmail] = useState('');
  let [regPassword, setregPassword] = useState('');
  let [regCPassword, setregCPassword] = useState('');
  let [day, setDay] = useState();
  let [month, setMonth] = useState();
  let [year, setYear] = useState();
  let [gender, setGender] = useState('Male');
  let [city, setCity] = useState();
  let [state, setState] = useState();
  let [country, setCountry] = useState();
  let [countriesInfo, setCountriesInfo] = useState([{ name: { common: 'Loading Countries...' } }]);
  let [address, setAddress] = useState();
  let dys = days;
  let mths = months;
  let yrs = years;
  const navigate = useNavigate();

  useEffect(() => {
    setPageNotFound(false);
    defaultScrollPosition(0, 70);
  }, []);

  useEffect(() => {
    if (pathname === '/register') {
      axios.get(getAllCountriesUrl).then(res => {
        const data = res.data;
        setCountriesInfo(data);
      });
    }
  }, [pathname]);


  const submitLogin = (e) => {
    e.preventDefault();
    if (!useremail) {
      setuNameValidationError('Please enter your email or username');
    }
    else if (!password) {
      setpasswordValidationError('Please enter your password');
    }
    else {
      axios.post('http://localhost:5000/api/login', { useremail, password })
        .then(res => {
          const { success, id, email, name, gender } = res.data;
          if (success) {
            funcLogin({
              isLoggedIn: true,
              id,
              email,
              name,
              gender
            });
            navigate('/home');
          }
          else {
            funcLogin({
              isLoggedIn: false,
              id: null,
              email: '',
              name: '',
              gender: ''
            });
          }
        })
        .catch(err => console.log(err));
    }

  };

  const submitRegisterationForm = (e) => {
    e.preventDefault();
  };

  if (Location.pathname === '/login') {
    return (
      <div className='loginRegComponentContainer' style={{ margin: '200px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form autoComplete="off" style={{ width: '350px' }}>
          <h3>Login</h3>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder={formVariables.ENTER_YOUR_EMAIL} onChange={(e) => {
              if (e.target.value === '') {
                setuNameValidationError('');
              }
              else if (!validEmail.test(e.target.value)) {
                setuNameValidationError('Email is not valid');
              }
              else {
                setuNameValidationError('');
              }
              setUserEmail(e.target.value);

            }} value={useremail} />
            <Form.Text className={unameValidationError ? 'text-muted textError' : 'text-muted'} >
              {unameValidationError ? unameValidationError : formVariables.WE_WILL_NEVER_SHARE_YOUR_EMAIL_WITH_ANYONE_ELSE}
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>{formVariables.PASSWORD}</Form.Label>
            <Form.Control type='password' placeholder={formVariables.ENTER_YOUR_PASSWORD} onChange={(e) => {
              if (e.target.value === '') {
                setpasswordValidationError('');
              }
              else if (!validPassword.test(e.target.value)) {
                setpasswordValidationError('Password is not valid');
              }
              else {
                setpasswordValidationError('');
              }
              setPassword(e.target.value);
            }} value={password} />
            <Form.Text className='text-muted textError'>{passwordValidationError}</Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label={formVariables.REMEMBER_ME} />
          </Form.Group>
          <Form.Group>
            <Form.Text className='text-muted'><Link to='/resetpassword' style={{ color: 'red' }}>{formVariables.FORGOT_PASSWORD}</Link> </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Text className='text-muted'>{formVariables.NOT_REGISTERED_YET} <br /> {formVariables.CLICK.toLocaleLowerCase()} <Link to='/register' onClick={() => { defaultScrollPosition(0, 70); setPathname('/register') }}>{formVariables.HERE.toLocaleLowerCase()}</Link> {formVariables.TO.toLocaleLowerCase()} {formVariables.CREATE_A_NEW_ACCOUNT.toLocaleLowerCase()}.</Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit' onClick={submitLogin}>
            {formVariables.LOGIN}
          </Button>
        </Form>
      </div>
    )
  } else if (Location.pathname === '/register') {
    return (
      <div className='loginRegComponentContainer' style={{ margin: '200px 0 300px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form autoComplete='off' style={{ width: '700px' }}>
          <h1>{formVariables.CREATE_A_NEW_ACCOUNT}</h1>
          <Form.Group className='mb-3'>
            <Form.Text className='text-muted'>{formVariables.ITS_QUICK_AND_EASY}</Form.Text>
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group className='mb-3'>
              <Form.Label>{formVariables.FIRST_NAME}</Form.Label>
              <Form.Control onChange={(e) => {
                setFname(e.target.value);
              }} value={fname} />
              <Form.Text className={'text-muted textError'}>{ }</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>{formVariables.MIDDLE_NAME}</Form.Label>
              <Form.Control onChange={(e) => {
                setMname(e.target.value);
              }} value={mname} />
              <Form.Text className='text-muted textError'>{ }</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' >
              <Form.Label>{formVariables.LAST_NAME}</Form.Label>
              <Form.Control onChange={(e) => {
                setLname(e.target.value);
              }} value={lname} />
              <Form.Text className='text-muted textError'>{ }</Form.Text>
            </Form.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group>
              <Form.Label>{formVariables.EMAIL}</Form.Label>
              <Form.Control type='email' placeholder={formVariables.ENTER_EMAIL} onChange={(e) => {
                setregEmail(e.target.value);
              }} value={regEmail} />
              <Form.Text className={unameValidationError ? 'text-muted textError' : 'text-muted'} >
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>{formVariables.PASSWORD}</Form.Label>
              <Form.Control type='password' placeholder={formVariables.PASSWORD} onChange={(e) => {
                setregPassword(e.target.value);
              }} value={regPassword} />
              <Form.Text className='text-muted textError'>{passwordValidationError}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>{formVariables.CONFIRM_PASSWORD}</Form.Label>
              <Form.Control type='password' placeholder={formVariables.CONFIRM_PASSWORD} onChange={(e) => {
                setregCPassword(e.target.value);
              }} value={regCPassword} />
              <Form.Text className='text-muted textError'>{ }</Form.Text>
            </Form.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group className='mt-3' >
              <Form.Label>{formVariables.GENDER}</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className='mb-3' onChange={e => setGender(e.target.value)}>
                  <Form.Check
                    inline
                    label={formVariables.MALE}
                    name='gender'
                    value={formVariables.MALE}
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label={formVariables.FEMALE}
                    name='gender'
                    value={formVariables.FEMALE}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.DAY}</Form.Label>
              <Form.Select onSelect={(e) => { setDay(e.target.value) }} value={day} >
                {dys.map(day => {
                  return <option key={day}>{day}</option>
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.MONTH}</Form.Label>
              <Form.Select onSelect={(e) => { setMonth(e.target.value) }} value={month}>
                {mths.map(month => {
                  return <option key={month}>{month}</option>
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.YEAR}</Form.Label>
              <Form.Select onSelect={(e) => { setYear(e.target.value) }} value={year}>
                {yrs.map(year => {
                  return <option key={year}>{year}</option>
                })}
              </Form.Select>
            </Form.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group >
              <Form.Label>{formVariables.COUNTRY}</Form.Label>
              <Form.Select onSelect={e => setCountry(e.target.value)} value={country} >
                {countriesInfo.map(countries => {
                  return <option key={countries.name.common}>{countries.name.common}</option>
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.STATE}</Form.Label>
              <Form.Select onSelect={(e) => { setState(e.target.value) }} value={state}>
                {['Maharashtra'].map(state => {
                  return <option key={state}>{state}</option>
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.CITY}</Form.Label>
              <Form.Select onSelect={(e) => { setCity(e.target.value) }} value={city}>
                {['Pune', 'Solapur'].map(city => {
                  return <option key={city}>{city}</option>
                })}
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='mt-3' >
              <Form.Control
                as='textarea'
                placeholder={formVariables.LEAVE_A_COMMENT_HERE}
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                style={{ height: '100px', minWidth: '100%', maxWidth: '100%' }}
              />
            </Form.Group>
          </div>
          <Form.Group className='mt-2' >
            <Form.Group className='mb-3'>
              <Form.Text className='text-muted'>{formVariables.ALREADY_HAVE_AN_ACCOUNT} {formVariables.CLICK.toLocaleLowerCase()} <Link to='/login' onClick={() => defaultScrollPosition(0, 70)}>{formVariables.HERE.toLocaleLowerCase()}</Link> {formVariables.TO} {formVariables.LOGIN.toLocaleLowerCase()}.</Form.Text>
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant='success' type='submit' onClick={submitRegisterationForm}>
                {formVariables.CREATE_YOUR_ACCOUNT}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    user: store.loginReducer.user,
    isAdmin: store.loginReducer.user.isAdmin,
    isLoggedIn: store.loginReducer.user.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProductViewDispatch: (view) => {
      dispatch(changeProductView(view));
    },
    funcLogin: (obj) => {
      dispatch(login(obj));
    },
    setPageNotFound: (value) => {
      dispatch(setPageNotFoundComponent(value));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);