import getMealPreferenceInfo from '../../fixtures/getMealPreferenceInfo.json';

class MealPreferenceFixture{
    
    getMealPreferenceAPI(){
        return new Promise((resolve,reject)=>{
            resolve(getMealPreferenceInfo)
        })
    }
}

export {MealPreferenceFixture};