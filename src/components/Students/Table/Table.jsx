import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Table.scss";
import { cancelStudent } from '../../../store/StudentContext/StudentSlice';

function Table() {
  const dispatch = useDispatch();

  const cancelHandler = (elId) => {
    dispatch(
      cancelStudent({id : elId})
    )
  }

  const arr = useSelector(state => state.students);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ISM</th>
            <th scope="col">GURUH</th>
            <th scope="col">TELEFON RAQAMI</th>
            <th scope="col">GURUHLAR</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((item, idx) => {
              return (
                <tr key={`as` + idx}>
                  <th>
                    {idx + 1}
                  </th>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    <span>Guruh #</span>
                    {item.group.map((el, index) => {
                      return (
                        <span key={"ad"+index}>
                          {index > 0 ? <span> / #</span> : ""}
                           {el} 
                        </span>
                      );
                    })}
                  </td>
                  <td>
                    {item.number}
                  </td>
                  <td>
                    {item.groupNum} <span>ta</span>
                  </td>
                  <td className='d-flex align-items-center table-td'>
                    <Link to={`/students/edit/${item.id}`} className="student__tdn">
                      <button className='table-btn'>
                        <i className='bx bxs-pencil'></i>
                      </button>
                    </Link>
                    <button className="table-btn" onClick={() => cancelHandler(item.id)}>
                      <i className='bx bx-x'></i>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
