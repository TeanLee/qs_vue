// 用来向外暴露状态的   供外界得到   但是不能修改 
// 是数据的提供者
const getters = {
    language: state => state.app.language
}
export default getters