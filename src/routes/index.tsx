import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APP_ROUTES } from '../utilities/constants'
import { LmDashboard, Login, RequestCreation} from '../pages'
import LMRequestCreation from "../pages/LMRequestCreation/LMRequestCreation"
import NewRequest from "../pages/TrasportRequest/NewRequest"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_ROUTES.ROOT}
          element={<Login />}
        >
        </Route>
        <Route
          path={APP_ROUTES.REQUEST_CREATION}
          element={<RequestCreation />}
        >
        </Route>

        {/* LINE MANAGER */}
        <Route
          path={APP_ROUTES.LM_DASHBOARD}
          element={<LmDashboard />}
        >
        </Route>

        <Route
          path={APP_ROUTES.LM_REQUEST_CREATION}
          element={<LMRequestCreation/>}
        >
        </Route>

        
        <Route
          path={APP_ROUTES.NEW_REQUEST}
          element={<NewRequest/>}
        >
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
