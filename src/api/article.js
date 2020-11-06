import request from '@/utils/request'
const baseURL = 'http://localhost:3000'
  // 推荐歌曲
export function hotSongRecommend(limit){
  return request({
    // url: baseURL + '/personalized',
    url: baseURL +`/personalized?limit=${limit}`, // 加上限制条数
    method:'GET',
  })
}

// 热门歌曲分类
export function hotSongClass(){
  return request({
    url: baseURL+ '/playlist/hot',
    method: "GET"
  })
}

// 榜单
export function listTOP3(){
  return request({
    url: baseURL+ '/toplist/detail',
    method: "GET"
  })
}
