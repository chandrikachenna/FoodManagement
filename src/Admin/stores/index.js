import {ScheduleMealService} from '../services/ScheduleMealServices/ScheduleMealServices.fixture';
import {ScheduleMealStore} from './ScheduleMealStore';

const scheduleMealService=new ScheduleMealService();
const scheduleMealStore=new ScheduleMealStore(scheduleMealService);

export default {scheduleMealStore}