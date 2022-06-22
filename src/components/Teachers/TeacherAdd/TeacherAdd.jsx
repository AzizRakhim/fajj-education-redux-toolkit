import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addTeacher } from '../../../store/TeacherContext/TeacherSlice'
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';

function TeacherAdd() {
  const dispatch = useDispatch();

  const arr = useSelector(state => state.teachers);

  let [tempObj, setTempObj] = useState({
    id : arr.length + 1,
    name : "",
    group : [],
    number : "",
    groupNum : 1,
    status : "",
    payment : ""
  });

  const addHandler = () => {
    dispatch(
      addTeacher({obj : tempObj})
    )
  }

  const nameHandler = (e) => {
    setTempObj({...tempObj, name : e.target.value})
  }

  const phoneHandler = (e) => {
    setTempObj({...tempObj, number : e.target.value});
  }

  const statHandler = (e) => {
    setTempObj({...tempObj, status : e.target.value});
  }

  const paymentHandler = (e) => {
    setTempObj({...tempObj, payment : e.target.value});
  }

  const groupHandler = (e) => {
    setTempObj({...tempObj, group : [+e.target.value]})
  }

  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            O'qituvchi qo'shish
          </h2>
          <div className='student-add'>
            <div className='d-flex'>
              <div className='student-add__img-box col-6'>
                <h3 className='student-add__title'>
                  O'qituvchining rasmi
                </h3>
                <div className='student-add__inner-img-box'>
                  <div className='student-add__borders'>
                    <i className='bx bxs-up-arrow-circle'></i>
                  </div>
                  <div className='student-add__inner-text'>
                    Rasmni tanlang
                  </div>
                </div>
              </div>
              <ul className='student-add__lists'>
                <li className="student-add__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="text" 
                      name='name' 
                      className='student-edit__input student-add__input' 
                      required
                      id='name'
                      placeholder='Ismi'
                      onChange={nameHandler}
                    />
                    <label htmlFor="name" className='student-edit__label'>
                      O'qituvchining ismini kiriting
                    </label>
                  </div>
                </li>
                <li className="student-edit__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="tel" 
                      name='tel' 
                      className='student-edit__input student-add__input' 
                      required
                      id='tel'
                      placeholder='Telefon raqam'
                      pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                      onChange={phoneHandler}
                    />
                    <label htmlFor="tel" className='student-edit__label'>
                      O'qituvchining telefon raqamini kiriting
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
                      O'qituvchi holatini tanlang
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
                      placeholder='Hisob holati'
                      onChange={paymentHandler}
                    />
                    <label htmlFor="payment" className='student-edit__label'>
                      O'qituvchining hisob holatini kiriting
                    </label>
                  </div>
                </li>
                <li className="student-add__item">
                  <div className='student-add__input-box'>
                    <input 
                      type="number" 
                      name='group' 
                      className='student-edit__input student-add__input' 
                      required
                      id='group'
                      placeholder='Guruhi'
                      onChange={groupHandler}
                    />
                    <label htmlFor="group" className='student-edit__label'>
                      O'qituvchining guruhini kiriting
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className='student-edit__btns d-flex justify-content-center'>
              <Link to={"/teachers"}>
                <button 
                  type="button" 
                  className="btn btn-outline-primary me-3"
                >
                  Bekor qilish
                </button>
              </Link>
              <Link to={"/teachers"}>
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

export default TeacherAdd
