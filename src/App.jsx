import './App.scss';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import Students from './components/Students/Students';
import Teachers from './components/Teachers/Teachers';
import Groups from './components/Groups/Groups';
import StudentEdit from './components/Students/StudentEdit/StudentEdit';
import StudentAdd from './components/Students/StudentAdd/StudentAdd';
import TeacherAdd from './components/Teachers/TeacherAdd/TeacherAdd';
import TeacherEdit from './components/Teachers/TeacherEdit/TeacherEdit';
import GroupAdd from './components/Groups/GroupAdd/GroupAdd';
import GroupEdit from './components/Groups/GroupEdit/GroupEdit';
import Report from './components/Report/Report';
import Curriculum from './components/Curriculum/Curriculum';
import Reports from './components/Reports/Reports';
import Setting from './components/Setting/Setting';
import LogOut from './components/LogOut/LogOut';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='students' element={<Students />} />
      <Route path='teachers' element={<Teachers />} />
      <Route path='groups' element={<Groups />} />
      <Route path='students/edit/:id' element={<StudentEdit />} />
      <Route path='students/add' element={<StudentAdd />} />
      <Route path='teachers/add' element={<TeacherAdd />} />
      <Route path='teachers/edit/:id' element={<TeacherEdit />} />
      <Route path='groups/add' element={<GroupAdd />} />
      <Route path='groups/edit/:id' element={<GroupEdit />} />
      <Route path='report' element={<Report />} />
      <Route path='curriculum' element={<Curriculum />} />
      <Route path='reports' element={<Reports />} />
      <Route path='setting' element={<Setting />} />
      <Route path='logout' element={<LogOut />} />
    </Routes>
  );
}

export default App;
