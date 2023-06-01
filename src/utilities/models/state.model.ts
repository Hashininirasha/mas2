import { StateObjectDto } from "./common.model";
import { RequestListDto } from "./request.model";

export interface RequestStateDto {
    addRequest: StateObjectDto<null>,
    editRequest: StateObjectDto<null>,
    requestList: StateObjectDto<RequestListDto[]>
}

export interface ApplicationStateDto {
    request: RequestStateDto
}