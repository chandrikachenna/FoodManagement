import getHeadCountsInfo from '../../fixtures/getHeadCountsInfo.json'
import { resolveWithTimeout } from "../../../Common/utils/TestUtils"

class HeadCountsService {
   getHeadCountsInfo() {
      return resolveWithTimeout(getHeadCountsInfo)
   }
}

export { HeadCountsService }
