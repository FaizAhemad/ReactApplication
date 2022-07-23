import { useEffect, useRef, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import './login.css';
import { days, months, years, getAllCountriesUrl, formVariables, defaultScrollPosition, regexForValidation, nameRangeValidatorRegex } from '../constants/constants';
import { login } from '../actions/login-actions';
import { changeProductView } from '../actions/products-action';
import { setLoginComponent } from '../actions/general-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import noImage from '../images/noImage.png';

function Login({ user, isAdmin, isLoggedIn, funcLogin, setLoginComponent, ...props }) {
  const Location = useLocation();
  let [pathname, setPathname] = useState(Location.pathname);
  let [useremail, setUserEmail] = useState('');
  let [password, setPassword] = useState('');
  let [unameValidationError, setuNameValidationError] = useState('');
  let [loginPasswordValidationError, setLoginPasswordValidationError] = useState('');
  let [fname, setFname] = useState('');
  let [mname, setMname] = useState('');
  let [lname, setLname] = useState('');
  let [regEmail, setregEmail] = useState('');
  let [regPassword, setregPassword] = useState('');
  let [passwordValidationError, setpasswordValidationError] = useState('');
  let [regCPassword, setregCPassword] = useState('');
  let [day, setDay] = useState(1);
  let [month, setMonth] = useState('January');
  let [year, setYear] = useState(1970);
  let [gender, setGender] = useState('Male');
  let [city, setCity] = useState('Solapur');
  let [state, setState] = useState('Maharashtra');
  let [country, setCountry] = useState('India');
  let [countriesInfo, setCountriesInfo] = useState([{ name: { common: 'Loading Countries...' } }]);
  let [address, setAddress] = useState();
  let [loginErrorMessage, setLoginErrorMessage] = useState('');
  let [registerationErrorMessage, setRegisterationErrorMessage] = useState('');
  let [fnameValidationError, setFnameValidationError] = useState('');
  let [mnameValidationError, setMnameValidationError] = useState('');
  let [lnameValidationError, setLnameValidationError] = useState('');
  let [passwordValidatorError, setPasswordValidatorError] = useState('');
  let [cPasswordValidatorError, setCPasswordValidatorError] = useState('');
  let [dayValidatorError, setDayValidatorError] = useState('');
  let [monthValidatorError, setMonthValidatorError] = useState('');
  let [yearValidatorError, setYearValidatorError] = useState('');
  let [countryValidatorError, setCountryValidatorError] = useState('');
  let [stateValidatorError, setStateValidatorError] = useState('');
  let [cityValidatorError, setCityValidatorError] = useState('');
  let [addressValidatorError, setAddressValidatorError] = useState('');
  let [genderValidatorError, setGenderValidatorError] = useState('');
  let [regImageFile, setFile] = useState(null);
  let [regImageFileValidatorError, setRegImageFileValidatorError] = useState('');
  let [chosenImage, setchosenImage] = useState();
  let imageRef = useRef(null);
  let loginEmailRef = useRef(null);
  let regFirstNameRef = useRef(null);
  let genderRef = useRef(null);
  let dys = days;
  let mths = months;
  let yrs = years;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/login') {
      loginEmailRef.current.focus();
    };
    setLoginComponent(true);
    if (isLoggedIn) {
      navigate('/home');
    };
    defaultScrollPosition(0, 80);
    return () => {
      setLoginComponent(false);
    };
  }, []);

  useEffect(() => {
    if (pathname === '/register') {
      defaultScrollPosition(0, 80)
      axios.get(getAllCountriesUrl).then(res => {
        const data = res.data;
        setCountriesInfo(data);
      });
    }
  }, [pathname]);

  const submitLogin = (e) => {
    e.preventDefault();
    if (!useremail) {
      setuNameValidationError('Please enter your email');
    }
    else if (!password) {
      setLoginPasswordValidationError('Please enter your password');
    }
    else if (unameValidationError || loginPasswordValidationError) {
      return
    }
    else {
      axios.post('http://localhost:5000/api/login', { useremail, password })
        .then(res => {
          const { success, id, email, name, gender, message } = res.data;
          if (success) {
            funcLogin({
              isLoggedIn: true,
              id,
              email,
              name,
              gender
            });
            toastr.success('Login Successful', 'Successfully logged in to your account.')
            navigate('/home');
          }
          else {
            setLoginErrorMessage(message);
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
    let formData = new FormData();
    if (!fname) {
      setFnameValidationError('Please enter your first name');
      defaultScrollPosition(0, 80);
    }
    else if (!mname) {
      defaultScrollPosition(0, 80);
      setMnameValidationError('Please enter your middle name');
    }
    else if (!lname) {
      defaultScrollPosition(0, 80);
      setLnameValidationError('Please enter your last name');
    }
    else if (!regEmail) {
      defaultScrollPosition(0, 80);
      setuNameValidationError('Please enter your email');
    }
    else if (!regPassword) {
      setPasswordValidatorError('Please enter your password');
      defaultScrollPosition(0, 280);
    }
    else if (!regCPassword) {
      defaultScrollPosition(0, 280);
      setCPasswordValidatorError('Please confirm your password');
    }
    else if (!address) {
      defaultScrollPosition(0, 640);
      setAddressValidatorError('Please enter you address');
    }
    else if (!regImageFile) {
      defaultScrollPosition(0, 580);
      setRegImageFileValidatorError("Please add your image for profile picture. It's required!");
    }
    else {
      formData.append('firstname', fname);
      formData.append('middlename', mname);
      formData.append('lastname', lname);
      formData.append('email', regEmail);
      formData.append('password', regPassword);
      formData.append('cpassword', regCPassword);
      formData.append('day', day);
      formData.append('month', month);
      formData.append('year', year);
      formData.append('gender', gender);
      formData.append('country', country);
      formData.append('state', state);
      formData.append('city', city);
      formData.append('address', address);
      formData.append('userImage', regImageFile);
      axios.post('http://localhost:5000/api/register', formData)
        .then(res => {
          const { success, message } = res.data;
          if (message) {
            setRegisterationErrorMessage(message);
          }
          else if (success) {
            toastr.success('Registeration Successful', 'Now you can login with your registered email and password.');
            window.location = '/login';
          }
        })
        .catch(err => console.log(err));
    };
  };

  if (Location.pathname === '/login') {
    return (
      <div className='loginRegComponentContainer' style={{ margin: '200px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form autoComplete="off" style={{ width: '350px' }}>
          <h3>Login</h3>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' ref={loginEmailRef} placeholder={formVariables.ENTER_YOUR_EMAIL} onChange={(e) => {
              setLoginErrorMessage('');
              if (e.target.value === '') {
                setuNameValidationError('');
              }
              else if (!regexForValidation.EMAIL.test(e.target.value)) {
                setuNameValidationError('Email is not valid.');
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
              setLoginErrorMessage('');
              setLoginPasswordValidationError('');
              setPassword(e.target.value);
            }} value={password} />
            <Form.Text className='text-muted textError'>{loginPasswordValidationError}</Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label={formVariables.REMEMBER_ME} />
          </Form.Group>
          <Form.Group>
            <Form.Text className='text-muted'><Link to='/resetpassword' style={{ color: 'red' }}>{loginErrorMessage && formVariables.FORGOT_PASSWORD}</Link> </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Text className='text-muted'>{formVariables.NOT_REGISTERED_YET} <br /> {formVariables.CLICK.toLocaleLowerCase()} <Link to='/register' onClick={() => { defaultScrollPosition(0, 70); setPathname('/register') }}>{formVariables.HERE.toLocaleLowerCase()}</Link> {formVariables.TO.toLocaleLowerCase()} {formVariables.CREATE_A_NEW_ACCOUNT.toLocaleLowerCase()}.</Form.Text>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Text className='text-muted textError'>{loginErrorMessage ? loginErrorMessage : ''}</Form.Text>
          </Form.Group>
          <Button variant='primary' id='submitLoginButton' type='submit' title={(unameValidationError || loginPasswordValidationError || loginErrorMessage) && 'Form is invalid'} disabled={unameValidationError || loginPasswordValidationError || loginErrorMessage} onClick={submitLogin}>
            {formVariables.LOGIN}
          </Button>
        </Form>
      </div>
    )
  } else if (Location.pathname === '/register') {
    return (
      <div className='loginRegComponentContainer' style={{ margin: '200px 0 300px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form autoComplete='off' style={{ width: '700px' }} onSubmit={submitRegisterationForm}>
          <h1>{formVariables.CREATE_A_NEW_ACCOUNT}</h1>
          <Form.Group className='mb-3'>
            <Form.Text className='text-muted'>{formVariables.ITS_QUICK_AND_EASY}</Form.Text>
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group className='mb-3'>
              <Form.Label>{formVariables.FIRST_NAME}</Form.Label>
              <Form.Control ref={regFirstNameRef} onChange={(e) => {
                setRegisterationErrorMessage('');
                if (e.target.value === '') {
                  setFnameValidationError('');
                }
                else if (!regexForValidation.NAME.test(e.target.value)) {
                  setFnameValidationError('Only alphabates are allowed.');
                }
                else if (!nameRangeValidatorRegex().test(e.target.value)) {
                  setFnameValidationError('Only 4-20 characters are allowed.');
                }
                else {
                  setFnameValidationError('');
                };
                setFname(e.target.value.replace(regexForValidation.REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE, ' '));
              }} value={fname} />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{fnameValidationError && fnameValidationError}</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>{formVariables.MIDDLE_NAME}</Form.Label>
              <Form.Control
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setMnameValidationError('');
                  }
                  else if (!regexForValidation.NAME.test(e.target.value)) {
                    setMnameValidationError('Only alphabates are allowed.');
                  }
                  else if (!nameRangeValidatorRegex().test(e.target.value)) {
                    setMnameValidationError('Only 4-20 characters are allowed.');
                  }
                  else {
                    setMnameValidationError('');
                  }
                  setMname(e.target.value.replace(regexForValidation.REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE, ' '));
                }} value={mname} />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{mnameValidationError && mnameValidationError}</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' >
              <Form.Label>{formVariables.LAST_NAME}</Form.Label>
              <Form.Control onChange={(e) => {
                setRegisterationErrorMessage('');
                if (e.target.value === '') {
                  setLnameValidationError('');
                }
                else if (!regexForValidation.NAME.test(e.target.value)) {
                  setLnameValidationError('Only alphabates are allowed.');
                }
                else if (!nameRangeValidatorRegex().test(e.target.value)) {
                  setLnameValidationError('Only 4-20 characters are allowed.');
                }
                else {
                  setLnameValidationError('');
                }
                setLname(e.target.value.replace(regexForValidation.REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE, ' '));
              }} value={lname} />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{lnameValidationError && lnameValidationError}</Form.Text>
            </Form.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group>
              <Form.Label>{formVariables.EMAIL}</Form.Label>
              <Form.Control type='email' placeholder={formVariables.ENTER_EMAIL} onChange={(e) => {
                setRegisterationErrorMessage('');
                if (e.target.value === '') {
                  setuNameValidationError('');
                }
                else if (!regexForValidation.EMAIL.test(e.target.value)) {
                  setuNameValidationError('Email is not valid.');
                }
                else {
                  setuNameValidationError('');
                }
                setregEmail(e.target.value);
              }} value={regEmail} />
              <Form.Text className='text-muted textError' style={{ height: '12px', padding: '2px 5px' }}>{unameValidationError && unameValidationError}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>{formVariables.PASSWORD}</Form.Label>
              <Form.Control type='password' placeholder={formVariables.PASSWORD} onChange={(e) => {
                setRegisterationErrorMessage('');
                if (e.target.value === '') {
                  setpasswordValidationError('');
                }
                else if (!regexForValidation.PASSWORD.test(e.target.value)) {
                  setpasswordValidationError('Password is not valid.');
                }
                else {
                  setCPasswordValidatorError('');
                  setpasswordValidationError('');
                }
                if (regCPassword && (regCPassword != e.target.value)) {
                  setCPasswordValidatorError('Password mismatch.');
                }
                setregPassword(e.target.value);
              }} value={regPassword} />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{passwordValidationError && passwordValidationError}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>{formVariables.CONFIRM_PASSWORD}</Form.Label>
              <Form.Control type='password' placeholder={formVariables.CONFIRM_PASSWORD} onChange={(e) => {
                setRegisterationErrorMessage('');
                if (e.target.value === '') {
                  setCPasswordValidatorError('');
                }
                else if (regPassword != e.target.value) {
                  setCPasswordValidatorError('Password mismatch.');
                }
                else {
                  setCPasswordValidatorError('');
                }
                console.log(regPassword)
                setregCPassword(e.target.value);
              }} value={regCPassword} />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{cPasswordValidatorError && cPasswordValidatorError}</Form.Text>
            </Form.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group className='mt-3' >
              <Form.Label>{formVariables.GENDER}</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className='mb-3' onChange={e => setGender(e.target.value)} ref={genderRef}>
                  <Form.Check ref={genderRef}
                    inline
                    label={formVariables.MALE}
                    name='gender'
                    value={formVariables.MALE}
                    type={type}
                    id={`inline-${type}-1`}
                    defaultChecked
                  />
                  <Form.Check ref={genderRef}
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
              <Form.Select onChange={e => setDay(e.target.value)} value={day} >
                {dys.map(day => {
                  return <option key={day}>{day}</option>
                })}
              </Form.Select>
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{dayValidatorError && dayValidatorError}</Form.Text>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.MONTH}</Form.Label>
              <Form.Select onChange={(e) => { setMonth(e.target.value) }} value={month}>
                {mths.map(month => {
                  return <option key={month}>{month}</option>
                })}
              </Form.Select>
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{monthValidatorError && monthValidatorError}</Form.Text>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.YEAR}</Form.Label>
              <Form.Select onChange={(e) => { setYear(e.target.value) }} value={year}>
                {yrs.map(year => {
                  return <option key={year}>{year}</option>
                })}
              </Form.Select>
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{yearValidatorError && yearValidatorError}</Form.Text>
            </Form.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Group >
              <Form.Label>{formVariables.COUNTRY}</Form.Label>
              <Form.Select onChange={e => setCountry(e.target.value)} value={country} >
                {countriesInfo.map(countries => {
                  return <option key={countries.name.common}>{countries.name.common}</option>
                })}
              </Form.Select>
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{countryValidatorError && countryValidatorError}</Form.Text>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.STATE}</Form.Label>
              <Form.Select onChange={(e) => { setState(e.target.value) }} value={state}>
                {['Maharashtra'].map(state => {
                  return <option key={state}>{state}</option>
                })}
              </Form.Select>
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{stateValidatorError && stateValidatorError}</Form.Text>
            </Form.Group>
            <Form.Group >
              <Form.Label>{formVariables.CITY}</Form.Label>
              <Form.Select onChange={(e) => { setCity(e.target.value) }} value={city}>
                {['Pune', 'Solapur'].map(city => {
                  return <option key={city}>{city}</option>
                })}
              </Form.Select>
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{cityValidatorError && cityValidatorError}</Form.Text>
            </Form.Group>
          </div>
          <div>
            <Form.Group >
              <Form.Label>{formVariables.IMAGE}</Form.Label>
              <Form.Control type="file" name="image" ref={imageRef} accept='image/*' onChange={(e) => {
                const file = e.target.files[0];
                setRegImageFileValidatorError('');
                setRegisterationErrorMessage('');
                setchosenImage(URL.createObjectURL(e.target.files[0]));
                setFile(file);
              }} />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{regImageFileValidatorError && regImageFileValidatorError}</Form.Text>
            </Form.Group>
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', padding: '5px' }}>
                <FontAwesomeIcon icon={faXmark} style={{ position: 'absolute', top: '2px', right: '-20px' }} onClick={() => { setRegisterationErrorMessage(''); setchosenImage(noImage); imageRef.current.value = null; setFile(null) }} />
                <img src={chosenImage ? chosenImage : ''} width={200} height={200} />
              </div>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='mt-3' >
              <Form.Control
                as='textarea'
                placeholder={formVariables.ENTER_YOUR_ADDRESS}
                onChange={e => setAddress(e.target.value)}
                value={address}
                style={{ height: '100px', minWidth: '100%', maxWidth: '100%' }}
              />
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{addressValidatorError && addressValidatorError}</Form.Text>
            </Form.Group>
          </div>
          <div>
            <Form.Group className='mt-3' >
              <Form.Text className={'text-muted textError'} style={{ height: '12px', padding: '2px 5px' }}>{registerationErrorMessage && registerationErrorMessage}</Form.Text>
            </Form.Group>
          </div>
          <Form.Group className='mt-2' >
            <Form.Group className='mb-3'>
              <Form.Text className='text-muted'>{formVariables.ALREADY_HAVE_AN_ACCOUNT} {formVariables.CLICK.toLocaleLowerCase()} <Link to='/login' onClick={() => defaultScrollPosition(0, 70)}>{formVariables.HERE.toLocaleLowerCase()}</Link> {formVariables.TO} {formVariables.LOGIN.toLocaleLowerCase()}.</Form.Text>
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant='success' type='submit'>
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
    isLoggedIn: !!store.loginReducer.user.isLoggedIn
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
    setLoginComponent: (value) => {
      dispatch(setLoginComponent(value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);