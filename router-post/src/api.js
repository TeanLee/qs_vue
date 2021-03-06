// api 就是一个数据战场  里面放置了对某个模块增删改查的提供   可以理解为前端的control层
// 通过这一层可以获得数据
// vue  可以看作是view层
const posts = {
    '1': {
        id: 1,
        title: 'sunt aut facere',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      },
      '2': {
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
      }    
}

// cb 是回调函数
export function getPost (id, cb) {
    setTimeout(() => {
        if(posts[id]) {
            cb(null, posts[id])
        } else {
            cb(new Error("Post not found"))
        }
    }, 1500)
}