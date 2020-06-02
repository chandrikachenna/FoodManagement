import {ScheduleMealService} from '../services/ScheduleMealServices/ScheduleMealService.fixture';
import {HeadCountsService} from '../services/HeadCountsServices/HeadCountsService.fixture';
import {ScheduleMealStore} from './ScheduleMealStore';
import {HeadCountsStore} from './HeadCountsStore';

const scheduleMealService=new ScheduleMealService();
const scheduleMealStore=new ScheduleMealStore(scheduleMealService);

const headCountsService=new HeadCountsService();
const headCountsStore=new HeadCountsStore(headCountsService)

export default {scheduleMealStore,headCountsStore}