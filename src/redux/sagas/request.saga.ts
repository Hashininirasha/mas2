import { AxiosResponse } from 'axios';
import { RequestListDto } from '../../utilities/models';
import { requestService } from '../../services/request.service';
import { call, put, takeEvery } from 'redux-saga/effects'
import { COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE, REQUEST_DATA_LIST } from '../../utilities/constants';

function * getRequestList (action: {type: string}) {
    try {
        // const requestList: AxiosResponse<RequestListDto[]> = yield call(requestService.getRequestList)
        const requestList: RequestListDto[] = yield setTimeout(() => {
            console.log("C")
            return REQUEST_DATA_LIST;
        }, 2000)
        yield put({
            type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.SUCCESS,
            data: requestList
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.ERROR,
            error: error
        })
    }
}

function* requestSaga() {
    yield takeEvery(REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST, getRequestList)
}

export default requestSaga