import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { editTeacher } from '../../../store/TeacherContext/TeacherSlice';

function TeacherEdit() {
  const dispatch = useDispatch();

  const arr = useSelector(state => state.teachers);

  let location = useLocation();

  let [id, setId] = useState()
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  let [status, setStatus] = useState();
  let [payment, setPayment] = useState();

  useEffect(() => {
    arr.map(element => {
      if(+element.id === +location.pathname.split('/').at(-1)){
        setId(element.id)
        setName(element.name);
        setNumber(element.number);
        setStatus(element.status);
        setPayment(element.payment);
      }
    });
  }, []);

  const editHandler = () => {
    dispatch(
      editTeacher({
        elId : id,
        elName : name,
        elNumber : number,
        elStatus : status,
        elPayment : payment
      })
    )
  }

  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <div className='student__intro-box d-flex align-items-center justify-content-between'>
            <div className='student__title-box d-flex align-items-center'>
              <h2 className='student__title'>
                O'qituvchini tahrirlash
              </h2>
            </div>
          </div>
          <div className='student-edit'>
            {
              arr.map(element => {
                if(+element.id === +location.pathname.split("/").at(-1)){
                  return (
                    <div key={"c" + element.id} className='student-edit__header d-flex justify-content-between'>
                      <div className='student-edit__left d-flex'>
                        <div className='student-edit__img-box'>
                          <img src={`https://picsum.photos/id/${+element.id}/80/80`} alt="user" />
                        </div>
                        <div className='student-edit__name-box'>
                          <div className='student-edit__name'>
                            {element.name}
                          </div>
                          <div className='student-edit__number'>
                            {element.number}
                          </div>
                        </div>
                      </div>
                      <div className='student-edit__info'>
                        <div className='student-edit__stats'>
                          Guruhlar:
                          <span className='student-edit__stats-num'>
                            {element.groupNum} ta 
                          </span> 
                        </div>
                        <div className='student-edit__stats'>
                          Jami qoldirilgan darslar: 
                          <span className='student-edit__stats-num'>
                            0 ta
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
            <ul className='student-edit__list'>
              <li className="student-edit__item">
                <div className='student-edit__input-box'>
                  <input 
                    type="text" 
                    name='name' 
                    className='student-edit__input' 
                    required
                    id='name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className='student-edit__label'>
                    O'qituvchining ismini kiriting
                  </label>
                </div>
              </li>
              <li className="student-edit__item">
                <div className='student-edit__input-box'>
                  <input 
                    type="date" 
                    name='birth' 
                    className='student-edit__input'
                    id='birth'
                  />
                  <label htmlFor="birth" className='student-edit__label'>
                    O'qituvchining tug'ulgan sanasini kiriting
                  </label>
                </div>
              </li>
              <li className="student-add__item">
                <div className='student-add__input-box'>
                  <select 
                    name="stat" 
                    id="stat" 
                    className='student-add__input student-edit__input'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
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
                <div className='student-edit__input-box'>
                  <input 
                    type="tel" 
                    name='tel' 
                    className='student-edit__input' 
                    required
                    id='tel' 
                    pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <label htmlFor="tel" className='student-edit__label'>
                    O'qituvchining telefon raqamini kiriting
                  </label>
                </div>
              </li> 
              <li className="student-edit__item">
                <div className='student-edit__input-box'>
                  <input 
                    type="text" 
                    name='payment' 
                    className='student-edit__input' 
                    required
                    id='payment'
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  <label htmlFor="tel" className='student-edit__label'>
                    O'qituvchining hisob holatini kiriting
                  </label>
                </div>
              </li>  
            </ul>
            <div className='student-edit__btns d-flex justify-content-end'>
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
                  onClick={editHandler}
                >
                  Saqlash
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherEdit
