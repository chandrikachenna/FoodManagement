import getScheduleMealInfo from '../../fixtures/getScheduleMealInfo.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"

class ScheduleMealService {
   getScheduleMealInfo() {
      return resolveWithTimeout(getScheduleMealInfo)
   }
}

export { ScheduleMealService }
