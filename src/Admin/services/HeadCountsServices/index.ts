import { GetHeadCountInfoResponse } from "../../stores/types";

export interface HeadCountsInfoService{
    getHeadCountsInfo:()=>Promise<GetHeadCountInfoResponse>
}