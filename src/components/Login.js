import {useEffect, useRef, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {Form, Button, FloatingLabel} from 'react-bootstrap';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {toastr} from 'react-redux-toastr';
import axios from 'axios';
import './login.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {
  days,
  months,
  years,
  getAllCountriesUrl,
  formVariables,
  defaultScrollPosition,
  regexForValidation,
  nameRangeValidatorRegex,
  constants,
  title,
} from '../constants/constants';
import {login} from '../actions/login-actions';
import {changeProductView} from '../actions/products-action';
import {
  openImagePreviewModal,
  setLoginComponent,
} from '../actions/general-actions';
import noImage from '../images/noImage.png';

function Login({
  user,
  isAdmin,
  isLoggedIn,
  funcLogin,
  setLoginComponent,
  checkAdminRegeristeredAlready,
  setImagePreviewModal,
  imgSrc,
  openModal,
  selectedImageFileFromStore,
  ...props
}) {
  const Location = useLocation();
  const [pathname, setPathname] = useState(Location.pathname);
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [unameValidationError, setuNameValidationError] = useState('');
  const [loginPasswordValidationError, setLoginPasswordValidationError] =
    useState('');
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [regEmail, setregEmail] = useState('');
  const [regPassword, setregPassword] = useState('');
  const [passwordValidationError, setpasswordValidationError] = useState('');
  const [regCPassword, setregCPassword] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState(1970);
  const [gender, setGender] = useState('Male');
  const [city, setCity] = useState('Solapur');
  const [state, setState] = useState('Maharashtra');
  const [country, setCountry] = useState('India');
  const [countriesInfo, setCountriesInfo] = useState([
    {name: {common: 'Loading Countries...'}},
  ]);
  const [regMobile, setregMobile] = useState('');
  const [address, setAddress] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [registerationErrorMessage, setRegisterationErrorMessage] =
    useState('');
  const [fnameValidationError, setFnameValidationError] = useState('');
  const [mnameValidationError, setMnameValidationError] = useState('');
  const [lnameValidationError, setLnameValidationError] = useState('');
  const [passwordValidatorError, setPasswordValidatorError] = useState('');
  const [cPasswordValidatorError, setCPasswordValidatorError] = useState('');
  const [dayValidatorError, setDayValidatorError] = useState('');
  const [monthValidatorError, setMonthValidatorError] = useState('');
  const [yearValidatorError, setYearValidatorError] = useState('');
  const [countryValidatorError, setCountryValidatorError] = useState('');
  const [stateValidatorError, setStateValidatorError] = useState('');
  const [cityValidatorError, setCityValidatorError] = useState('');
  const [addressValidatorError, setAddressValidatorError] = useState('');
  const [genderValidatorError, setGenderValidatorError] = useState('');
  const [regImageFile, setFile] = useState(null);

  const [mobileValidatorError, setMobileValidatorError] = useState(null);
  const [regImageFileValidatorError, setRegImageFileValidatorError] =
    useState('');
  const [chosenImage, setchosenImage] = useState(noImage);
  const imageRef = useRef(null);
  const loginEmailRef = useRef(null);
  const regFirstNameRef = useRef(null);
  const genderRef = useRef(null);
  const dys = days;
  const mths = months;
  const yrs = years;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/login') {
      loginEmailRef.current.focus();
    }
    setLoginComponent(true);
    defaultScrollPosition(0, 80);
    return () => {
      setLoginComponent(false);
    };
  }, []);

  useEffect(() => {
    if (pathname === '/register') {
      defaultScrollPosition(0, 80);
      axios.get(getAllCountriesUrl).then(res => {
        const {data} = res;
        setCountriesInfo(data);
      });
    }
  }, [pathname]);

  const submitLogin = e => {
    e.preventDefault();
    if (!useremail) {
      setuNameValidationError('Please enter your username/email');
    } else if (!password) {
      setLoginPasswordValidationError('Please enter your password');
    } else if (unameValidationError || loginPasswordValidationError) {
    } else {
      axios
        .post('http://localhost:5000/api/login', {useremail, password})
        .then(res => {
          const {
            success,
            id,
            email,
            firstname,
            lastname,
            gender,
            message,
            isAdmin,
          } = res.data;
          if (success) {
            funcLogin({
              isLoggedIn: true,
              id,
              email,
              name: `${firstname} ${lastname}`,
              gender,
              isAdmin: !!isAdmin,
            });
            if (isAdmin) {
              toastr.success(
                'Welcome Admin',
                'You Successfully logged in to your account.',
              );
            } else {
              toastr.success(
                'Login Successful',
                'Successfully logged in to your account.',
              );
            }

            if (useremail === 'IAmAdmin') {
              navigate('/admin/home');
            } else {
              navigate('/home');
            }
          } else {
            setLoginErrorMessage(message);
            funcLogin({
              isLoggedIn: false,
              id: null,
              email: '',
              name: '',
              gender: '',
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  const submitRegisterationForm = e => {
    e.preventDefault();
    const formData = new FormData();
    if (!fname) {
      setFnameValidationError('Please enter your first name');
      defaultScrollPosition(0, 80);
    } else if (!mname) {
      defaultScrollPosition(0, 80);
      setMnameValidationError('Please enter your middle name');
    } else if (!lname) {
      defaultScrollPosition(0, 80);
      setLnameValidationError('Please enter your last name');
    } else if (!regEmail) {
      defaultScrollPosition(0, 80);
      setuNameValidationError('Please enter your email');
    } else if (!regPassword) {
      setPasswordValidatorError('Please enter your password');
      defaultScrollPosition(0, 280);
    } else if (!regCPassword) {
      defaultScrollPosition(0, 280);
      setCPasswordValidatorError('Please confirm your password');
    } else if (!address) {
      defaultScrollPosition(0, 640);
      setAddressValidatorError('Please enter you address');
    } else if (!regMobile) {
      defaultScrollPosition(0, 580);
      setMobileValidatorError('Please enter your mobile number.');
    } else if (!regImageFile) {
      defaultScrollPosition(0, 580);
      setRegImageFileValidatorError(
        "Please add your image for profile picture. It's required!",
      );
    } else if (
      fnameValidationError ||
      mnameValidationError ||
      lnameValidationError ||
      unameValidationError ||
      passwordValidationError ||
      cPasswordValidatorError ||
      addressValidatorError ||
      regImageFileValidatorError ||
      registerationErrorMessage ||
      mobileValidatorError
    ) {
      setRegisterationErrorMessage('Form is invalid. Please check the form.');
    } else {
      formData.append('firstname', fname.trim());
      formData.append('middlename', mname.trim());
      formData.append('lastname', lname.trim());
      formData.append('email', regEmail.trim());
      formData.append('password', regPassword);
      formData.append('cpassword', regCPassword);
      formData.append('day', day);
      formData.append('month', month);
      formData.append('year', year);
      formData.append('gender', gender);
      formData.append('country', country);
      formData.append('state', state);
      formData.append('city', city);
      formData.append('mobile', regMobile);
      formData.append('address', address.trim());
      formData.append('userImage', regImageFile);
      axios
        .post('http://localhost:5000/api/register', formData)
        .then(res => {
          const {success, message} = res.data;
          if (message) {
            setRegisterationErrorMessage(message);
          } else if (success) {
            toastr.success(
              'Registeration Successful',
              'Now you can login with your registered email and password.',
            );
            window.location = '/login';
          }
        })
        .catch(err => console.log(err));
    }
  };
  if (Location.pathname === '/login') {
    return (
      <div
        className="loginComponentContainer"
        style={{
          margin: '200px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form autoComplete="off" style={{width: '350px'}}>
          <h3 className="form-heading pb-2">Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              ref={loginEmailRef}
              placeholder={formVariables.ENTER_YOUR_EMAIL}
              onChange={e => {
                setLoginErrorMessage('');
                if (e.target.value === '') {
                  setuNameValidationError('');
                } else if (!regexForValidation.EMAIL.test(e.target.value)) {
                  setuNameValidationError('Email is not valid.');
                } else {
                  setuNameValidationError('');
                }
                setUserEmail(e.target.value);
              }}
              onKeyUp={e => {
                if (useremail === 'IAmAdmin') {
                  setuNameValidationError('');
                }
              }}
              value={useremail}
            />
            <Form.Text
              className={
                unameValidationError ? 'text-muted textError' : 'text-muted'
              }
            >
              {unameValidationError ||
                formVariables.WE_WILL_NEVER_SHARE_YOUR_EMAIL_WITH_ANYONE_ELSE}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{formVariables.PASSWORD}</Form.Label>
            <Form.Control
              type="password"
              placeholder={formVariables.ENTER_YOUR_PASSWORD}
              onChange={e => {
                setLoginErrorMessage('');
                setLoginPasswordValidationError('');
                setPassword(e.target.value);
              }}
              value={password}
            />
            <Form.Text className="text-muted textError">
              {loginPasswordValidationError}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={formVariables.REMEMBER_ME} />
          </Form.Group>
          <Form.Group>
            <Form.Text className="text-muted">
              <Link to="/resetpassword" style={{color: 'red'}}>
                {loginErrorMessage && formVariables.FORGOT_PASSWORD}
              </Link>{' '}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              {formVariables.NOT_REGISTERED_YET} <br />{' '}
              {formVariables.CLICK.toLocaleLowerCase()}{' '}
              <Link
                to="/register"
                onClick={() => {
                  defaultScrollPosition(0, 70);
                  setPathname('/register');
                }}
              >
                {formVariables.HERE.toLocaleLowerCase()}
              </Link>{' '}
              {formVariables.TO.toLocaleLowerCase()}{' '}
              {formVariables.CREATE_A_NEW_ACCOUNT.toLocaleLowerCase()}.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-muted textError">
              {loginErrorMessage || ''}
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            id="submitLoginButton"
            type="submit"
            title={
              (unameValidationError ||
                loginPasswordValidationError ||
                loginErrorMessage) &&
              'Form is invalid'
            }
            disabled={
              unameValidationError ||
              loginPasswordValidationError ||
              loginErrorMessage
            }
            onClick={submitLogin}
          >
            {formVariables.LOGIN}
          </Button>
        </Form>
      </div>
    );
  }
  if (Location.pathname === '/register') {
    return (
      <div
        className="RegComponentContainer"
        style={{
          margin: '200px 0 300px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form
          autoComplete="off"
          style={{width: '500px'}}
          onSubmit={submitRegisterationForm}
        >
          <h1 className="form-heading">{formVariables.CREATE_A_NEW_ACCOUNT}</h1>
          <Form.Group className="mb-3" style={{position: 'relative'}}>
            <Form.Text className="animated-text-inner">
              {formVariables.ITS_QUICK_AND_EASY}
            </Form.Text>
            <Form.Text className="animated-text-outer" />
          </Form.Group>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>{formVariables.FIRST_NAME}</Form.Label>
              <Form.Control
                ref={regFirstNameRef}
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setFnameValidationError('');
                  } else if (!regexForValidation.NAME.test(e.target.value)) {
                    setFnameValidationError('Only alphabates are allowed.');
                  } else if (!nameRangeValidatorRegex().test(e.target.value)) {
                    setFnameValidationError(
                      'Only 4-20 characters are allowed.',
                    );
                  } else {
                    setFnameValidationError('');
                  }
                  setFname(
                    e.target.value.replace(
                      regexForValidation.REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE,
                      ' ',
                    ),
                  );
                }}
                value={fname}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {fnameValidationError && fnameValidationError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{formVariables.MIDDLE_NAME}</Form.Label>
              <Form.Control
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setMnameValidationError('');
                  } else if (!regexForValidation.NAME.test(e.target.value)) {
                    setMnameValidationError('Only alphabates are allowed.');
                  } else if (!nameRangeValidatorRegex().test(e.target.value)) {
                    setMnameValidationError(
                      'Only 4-20 characters are allowed.',
                    );
                  } else {
                    setMnameValidationError('');
                  }
                  setMname(
                    e.target.value.replace(
                      regexForValidation.REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE,
                      ' ',
                    ),
                  );
                }}
                value={mname}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {mnameValidationError && mnameValidationError}
              </Form.Text>
            </Form.Group>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>{formVariables.LAST_NAME}</Form.Label>
              <Form.Control
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setLnameValidationError('');
                  } else if (!regexForValidation.NAME.test(e.target.value)) {
                    setLnameValidationError('Only alphabates are allowed.');
                  } else if (!nameRangeValidatorRegex().test(e.target.value)) {
                    setLnameValidationError(
                      'Only 4-20 characters are allowed.',
                    );
                  } else {
                    setLnameValidationError('');
                  }
                  setLname(
                    e.target.value.replace(
                      regexForValidation.REPLACE_EXTRA_SPACES_WITH_SINGLE_SPACE,
                      ' ',
                    ),
                  );
                }}
                value={lname}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {lnameValidationError && lnameValidationError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{formVariables.EMAIL}</Form.Label>
              <Form.Control
                type="email"
                placeholder={formVariables.ENTER_EMAIL}
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setuNameValidationError('');
                  } else if (!regexForValidation.EMAIL.test(e.target.value)) {
                    setuNameValidationError('Email is not valid.');
                  } else {
                    setuNameValidationError('');
                  }
                  setregEmail(e.target.value);
                }}
                value={regEmail}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {unameValidationError && unameValidationError}
              </Form.Text>
            </Form.Group>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>{formVariables.PASSWORD}</Form.Label>
              <Form.Control
                type="password"
                placeholder={formVariables.PASSWORD}
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setpasswordValidationError('');
                  } else if (
                    !regexForValidation.PASSWORD.test(e.target.value)
                  ) {
                    setpasswordValidationError('Password is not valid.');
                  } else {
                    setCPasswordValidatorError('');
                    setpasswordValidationError('');
                  }
                  if (regCPassword && regCPassword != e.target.value) {
                    setCPasswordValidatorError('Password mismatch.');
                  }
                  setregPassword(e.target.value);
                }}
                value={regPassword}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {passwordValidationError && passwordValidationError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{formVariables.CONFIRM_PASSWORD}</Form.Label>
              <Form.Control
                type="password"
                placeholder={formVariables.CONFIRM_PASSWORD}
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setCPasswordValidatorError('');
                  } else if (regPassword != e.target.value) {
                    setCPasswordValidatorError('Password mismatch.');
                  } else {
                    setCPasswordValidatorError('');
                  }
                  console.log(regPassword);
                  setregCPassword(e.target.value);
                }}
                value={regCPassword}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {cPasswordValidatorError && cPasswordValidatorError}
              </Form.Text>
            </Form.Group>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Form.Group
              className="mb-3"
              style={{flexBasis: '226.133px', flexShrink: 2}}
            >
              <Form.Label>{formVariables.GENDER}</Form.Label>
              {['radio'].map(type => (
                <div
                  key={`inline-${type}`}
                  className="mb-3"
                  onChange={e => setGender(e.target.value)}
                  ref={genderRef}
                >
                  <Form.Check
                    ref={genderRef}
                    inline
                    label={formVariables.MALE}
                    name="gender"
                    value={formVariables.MALE}
                    type={type}
                    id={`inline-${type}-1`}
                    defaultChecked
                  />
                  <Form.Check
                    ref={genderRef}
                    inline
                    label={formVariables.FEMALE}
                    name="gender"
                    value={formVariables.FEMALE}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{formVariables.MOBILE_NUMBER}</Form.Label>
              <Form.Control
                placeholder={formVariables.MOBILE_NUMBER}
                onChange={e => {
                  setRegisterationErrorMessage('');
                  if (e.target.value === '') {
                    setMobileValidatorError('');
                  } else if (
                    !regexForValidation.IND_MOBILE.test(e.target.value)
                  ) {
                    setMobileValidatorError(
                      'Please enter valid Indian mobile number.',
                    );
                  } else {
                    setMobileValidatorError('');
                  }
                  setregMobile(e.target.value);
                }}
                value={regMobile}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {mobileValidatorError && mobileValidatorError}
              </Form.Text>
            </Form.Group>
          </div>

          <div style={{alignItems: 'center'}}>
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Group
              className="mb-3"
              style={{display: 'flex', justifyContent: 'space-between'}}
            >
              <Form.Select onChange={e => setDay(e.target.value)} value={day}>
                {dys.map(day => {
                  return <option key={day}>{day}</option>;
                })}
              </Form.Select>
              <Form.Select
                onChange={e => {
                  setMonth(e.target.value);
                }}
                value={month}
                style={{marginLeft: '5px', width: '98%'}}
              >
                {mths.map(month => {
                  return <option key={month}>{month}</option>;
                })}
              </Form.Select>
              <Form.Select
                onChange={e => {
                  setYear(e.target.value);
                }}
                value={year}
                style={{marginLeft: '5px', width: '98%'}}
              >
                {yrs.map(year => {
                  return <option key={year}>{year}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </div>

          <div>
            <Form.Label>Country/State/City</Form.Label>
            <Form.Group
              className="mb-3"
              style={{display: 'flex', justifyContent: 'space-between'}}
            >
              <Form.Select
                title={country}
                onChange={e => setCountry(e.target.value)}
                value={country}
              >
                {countriesInfo.map(countries => {
                  return (
                    <option key={countries.name.common}>
                      {countries.name.common}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select
                title={state}
                onChange={e => {
                  setState(e.target.value);
                }}
                value={state}
                style={{marginLeft: '5px', width: '98%'}}
              >
                {['Maharashtra'].map(state => {
                  return <option key={state}>{state}</option>;
                })}
              </Form.Select>
              <Form.Select
                title={city}
                onChange={e => {
                  setCity(e.target.value);
                }}
                value={city}
                style={{marginLeft: '5px', width: '98%'}}
              >
                {['Pune', 'Solapur'].map(city => {
                  return <option key={city}>{city}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>{formVariables.IMAGE}</Form.Label>
              <Form.Control
                type="file"
                name="image"
                ref={imageRef}
                accept="image/*"
                onChange={e => {
                  const file = e.target.files[0];
                  setRegImageFileValidatorError('');
                  setRegisterationErrorMessage('');
                  setchosenImage(URL.createObjectURL(e.target.files[0]));
                  setFile(file);
                }}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {regImageFileValidatorError && regImageFileValidatorError}
              </Form.Text>
            </Form.Group>
            <Form.Group style={{display: 'flex', justifyContent: 'center'}}>
              <div style={{position: 'relative', padding: '5px'}}>
                {regImageFile && (
                  <FontAwesomeIcon
                    icon={faXmark}
                    title={title.CLOSE}
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '-30px',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setRegisterationErrorMessage('');
                      setchosenImage(noImage);
                      imageRef.current.value = null;
                      setFile(null);
                    }}
                  />
                )}
                <img
                  src={chosenImage || ''}
                  style={{
                    padding: '5px',
                    border: '1px solid transparent',
                    borderRadius: '50%',
                    width: '220px',
                    height: '220px',
                    boxShadow: '0px 0px 5px burlywood',
                  }}
                  title={
                    !regImageFile ? 'Please choose an image' : 'preview image'
                  }
                  onClick={() =>
                    regImageFile
                      ? regexForValidation.IMAGE.test(
                          regImageFile.name.slice(
                            File.name.lastIndexOf('.') + 1,
                          ),
                        )
                        ? setImagePreviewModal(chosenImage, true, regImageFile)
                        : (defaultScrollPosition(0, 580),
                          setRegImageFileValidatorError(
                            `Only image file is allowed`,
                          ))
                      : (defaultScrollPosition(0, 580),
                        setRegImageFileValidatorError(
                          `Please uplaod image file to preview`,
                        ))
                  }
                />
              </div>
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mt-3">
              <Form.Control
                as="textarea"
                placeholder={formVariables.ENTER_YOUR_ADDRESS}
                onChange={e => {
                  setAddress(e.target.value);
                  setRegisterationErrorMessage('');
                  setAddressValidatorError('');
                }}
                value={address}
                style={{height: '100px', minWidth: '100%', maxWidth: '100%'}}
              />
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {addressValidatorError && addressValidatorError}
              </Form.Text>
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mt-3">
              <Form.Text
                className="text-muted textError"
                style={{height: '12px', padding: '2px 5px'}}
              >
                {registerationErrorMessage && registerationErrorMessage}
              </Form.Text>
            </Form.Group>
          </div>
          <Form.Group className="mt-2">
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                {formVariables.ALREADY_HAVE_AN_ACCOUNT}{' '}
                {formVariables.CLICK.toLocaleLowerCase()}{' '}
                <Link to="/login" onClick={() => defaultScrollPosition(0, 70)}>
                  {formVariables.HERE.toLocaleLowerCase()}
                </Link>{' '}
                {formVariables.TO} {formVariables.LOGIN.toLocaleLowerCase()}.
              </Form.Text>
            </Form.Group>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button variant="success" type="submit">
                {formVariables.CREATE_YOUR_ACCOUNT}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    store,
    user: store.loginReducer.user,
    isAdmin: store.loginReducer.user.isAdmin,
    isLoggedIn: !!store.loginReducer.user.isLoggedIn,
    checkAdminRegeristeredAlready: store.generalReducer.isAdminRegistered,
    imgSrc: store.generalReducer.imageSrcForPreview,
    openModal: store.generalReducer.isImagePreviewModalOpen,
    selectedImageFileFromStore: store.generalReducer.File,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProductViewDispatch: view => {
      dispatch(changeProductView(view));
    },
    funcLogin: obj => {
      dispatch(login(obj));
    },
    setLoginComponent: value => {
      dispatch(setLoginComponent(value));
    },
    setImagePreviewModal: (src, modalState, File) => {
      dispatch(openImagePreviewModal(src, modalState, File));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
