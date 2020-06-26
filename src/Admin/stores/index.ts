import { ScheduleMealService } from '../services/ScheduleMealServices/ScheduleMealService.fixture'
import { HeadCountsService } from '../services/HeadCountsServices/HeadCountsService.fixture'
import { ScheduleMealStore } from './ScheduleMealStore'
import { HeadCountsStore } from './HeadCountsStore'

const scheduleMealStore = new ScheduleMealStore(new ScheduleMealService())
const headCountsStore = new HeadCountsStore(new HeadCountsService())

export default { scheduleMealStore, headCountsStore }
