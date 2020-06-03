import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'

import { ScheduleMealService } from '../../services/ScheduleMealServices/ScheduleMealService.fixture'
import getScheduleMealInfo from '../../fixtures/getScheduleMealInfo.json'

import { ScheduleMealStore } from '../../stores/ScheduleMealStore'

describe('ScheduleMealStore', () => {
   let scheduleMealService
   let scheduleMealStore

   beforeEach(() => {
      scheduleMealService = new ScheduleMealService()
      scheduleMealStore = new ScheduleMealStore(scheduleMealService)
   })
})
