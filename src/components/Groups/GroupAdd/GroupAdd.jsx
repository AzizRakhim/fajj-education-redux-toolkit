import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addGroup } from '../../../store/GroupContext/GroupSlice';
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import "./GroupAdd.scss";
import { useDispatch, useSelector } from 'react-redux';

function GroupAdd() {
  const dispatch = useDispatch();

  const arr = useSelector(state => state.groups);

  let [tempObj, setTempObj] = useState({
    id : arr.length + 1,
    gId : arr.length + 24,
    name : `Guruh #${arr.length + 24}`,
    status : "",
    educationType : "",
    payment : "",
    teacher : "",
  });

  const addHandler = () => {
    dispatch(
      addGroup({obj : tempObj})
    )
  }

  const subjectHandler = (e) => {
    setTempObj({...tempObj, subject : e.target.value})
  }

  const educationHandler = (e) => {
    setTempObj({...tempObj, educationType : e.target.value})
  }

  const statHandler = (e) => {
    setTempObj({...tempObj, status : e.target.value})
  }

  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            Guruh qo'shish
          </h2>
          <div className='student-add'>
            <ul className='student-add__list'>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="subject" 
                    id="subject" 
                    className='student-add__input student-edit__input'
                    onChange={subjectHandler}
                  >
                    <option value="Fan">
                      Fan
                    </option>
                    <option value="Matematika">
                      Matematika
                    </option>
                    <option value="Ingliz Tili">
                      Ingliz Tili
                    </option>
                  </select>
                  <label htmlFor="subject" className='student-edit__label'>
                    Guruhda o'rgatiladigan fanni tanlang
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="education" 
                    id="education" 
                    className='student-add__input student-edit__input'
                    onChange={educationHandler}
                  >
                    <option value="Ta'lim shakli">
                      Ta'lim shakli
                    </option>
                    <option value="Sanoqli">
                      Sanoqli
                    </option>
                    <option value="Oylik">
                      Oylik
                    </option>
                  </select>
                  <label htmlFor="education" className='student-edit__label'>
                    Guruhning ta'lim shaklini tanlang
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="stat" 
                    id="stat" 
                    className='student-add__input student-edit__input'
                    onChange={statHandler}
                  >
                    <option value="holat">
                      Holat
                    </option>
                    <option value="Aktiv">
                      Aktiv
                    </option>
                    <option value="Muzlatilgan">
                      Muzlatilgan
                    </option>
                  </select>
                  <label htmlFor="stat" className='student-edit__label'>
                    Guruh holatini tanlang
                  </label>
                </div>
              </li>
              <li className="student-edit__item">
                <div className='student-add__input-box'>
                  <input 
                    type="number" 
                    name='payment' 
                    className='student-edit__input student-add__input' 
                    required
                    id='payment'
                    placeholder="To'lov miqdori"
                    onChange={(e) => setTempObj({...tempObj, payment : e.target.value})}
                  />
                  <label htmlFor="payment" className='student-edit__label'>
                    Har bir o'quvchi uchun to'lov miqdorini kiriting
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="teacher" 
                    id="teacher" 
                    className='student-add__input student-edit__input'
                    onChange={(e) => setTempObj({...tempObj, teacher : e.target.value})}
                  >
                    <option value="O'qituvchi">
                      O'qituvchi
                    </option>
                    <option value="Javohir Berdiyev">
                      Javohir Berdiyev
                    </option>
                    <option value="Aziz Rakhim">
                      Aziz Rakhim
                    </option>
                  </select>
                  <label htmlFor="teacher" className='student-edit__label'>
                    Guruhda ta'lim beruvchi o'qituvchini tanlang
                  </label>
                </div>
              </li>
            </ul>
            <div className='student-edit__btns d-flex justify-content-end'>
              <Link to={"/groups"}>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-3"
                >
                  Ortga
                </button>
              </Link>
              <Link to={"/groups"}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={addHandler}
                >
                  Qo'shish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupAdd
