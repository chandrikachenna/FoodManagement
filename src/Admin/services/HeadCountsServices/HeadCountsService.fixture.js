import getHeadCountsInfo from '../../fixtures/getHeadCountsInfo.json';

class HeadCountsService{
    getHeadCountsInfo(){
        return new Promise((resolve,reject)=>{
            resolve(getHeadCountsInfo);
        })
    }
}

export {HeadCountsService}