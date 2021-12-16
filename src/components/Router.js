import Home from './Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Employee from './Employee';
import AddEmployee from './AddEmployees';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/myfirstreact" element={<Home/>}/>
                    <Route exact path="/myfirstreact/employee" element={<Employee/>}/>
                    <Route exact path="/myfirstreact/add" element={<AddEmployee/>}/>
                    <Route exact path="/myreact/edit/:employeeId" element={<AddEmployee/>}/>
                    <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;