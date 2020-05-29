import getMealInfo from '../../../fixtures/getMealInfo.json';

class MealsFixture{
    
    getMealsAPI(){
        return new Promise((resolve,reject)=>{
            resolve(getMealInfo)
        })
    }
}

export {MealsFixture};