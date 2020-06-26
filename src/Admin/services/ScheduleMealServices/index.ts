import { GetMealScheduleInfoResponse } from "../../stores/types";

export interface ScheduleMealInfoService{
   getScheduleMealInfo:()=>Promise<GetMealScheduleInfoResponse>
}