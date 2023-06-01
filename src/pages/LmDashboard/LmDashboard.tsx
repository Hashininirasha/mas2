import React from 'react'
import { AppLayout } from '../../templates'
import TemplateCreation from "./TemplateCreation"


const LmDashboard = () => {
  return (
    <React.Fragment>
      <AppLayout componentTitle="Request Creation">
     <TemplateCreation/>
      </AppLayout>
    </React.Fragment>
  )
}

export default LmDashboard
