const MATH_ADD = "add";
export default {
    [MATH_ADD](state) {
        console.log(state.count);
        return state.count++;
    },
    changeToggle(state) {
        state.isCollapse = state.isCollapse ? false : true;
    },
    changeLogin(state, flag) {
        state.isLogin = flag;
        console.log(flag);
    }
}