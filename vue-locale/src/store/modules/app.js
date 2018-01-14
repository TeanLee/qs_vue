import Cookie from 'js-cookie'
const app = {
    // 状态
    state: {
        language: Cookie.get('language') || 'en'
    },
    // 状态的改变   必须要执行mutation中的函数
    // mutations  是状态的改变   只有这里才能对中央仓库的改变
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
        }
    },
    // 通过actions  将数据拉到组件中去  触发actions 才能对数据进行修改
    // actions  向外暴露 setLanguage 方法
    actions: {
        // { commit }   是一个json对象  不用我们管
        setLanguage({ commit }, language) {
            // commit   会促使mutations 的发生
            commit('SET_LANGUAGE', language)
            Cookie.set('language', language)
        }
    }
}
export default app