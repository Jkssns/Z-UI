
import { default as Button } from "@/components/button/index"
import { default as Input } from "@/components/input/index"
import { default as Select } from "@/components/select/index"
import { default as Dialog } from "@/components/dialog/index"


const components = [
    Button,
    Input,
    Select,
    Dialog,
]

components.forEach(item => {
    item.install = function(Vue){
        Vue.component(item.name,item)
    }
});

export {
    Button,
    Input,
    Select,
    Dialog,
}
