import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import ViewSummeryLM from "../../components/Line_Manager_RequestCreation/ViewRequests/ViewSummeryLM"
import ViewRequestsLM from "../../components/Line_Manager_RequestCreation/ViewRequests/ViewRequestsLM"
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStateDto, RequestListDto } from '../../utilities/models'
import { requestActions } from '../../redux/actions'

const LMRequestCreation = () => {

  const dispatch = useDispatch()
  const [requestList, setRequestList] = useState<RequestListDto[]>([])

  const allRequests: RequestListDto[] = useSelector((state: ApplicationStateDto) => state.request.requestList.data)

  useEffect(() => {
    getRequestList()
  })

  useEffect(() => {
    setRequestList(allRequests)
    console.log("allRequests", allRequests)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allRequests])

  const getRequestList = async () => {
    console.log("A")
    dispatch(requestActions.getRequestsList())
  }

  return (
    <React.Fragment>
      <AppLayout componentTitle="LMRequestCreation">
        {/* <ViewSummeryLM /> */}
        <ViewRequestsLM />
      </AppLayout>
    </React.Fragment>
  )
}

export default LMRequestCreation
