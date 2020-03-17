import zjButton from "./components/button/index"


zjButton.install = function(Vue){
    Vue.component(zjButton.name,zjButton)
}

export default zjButton