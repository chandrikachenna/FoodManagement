import getMealReviewInfo from '../../fixtures/getMealReviewInfo.json'

class MockService {
    getMockInfo() {
      return new Promise((resolve, reject) => {
         resolve(getMealReviewInfo)
      })
   }
}

export { MockService }
