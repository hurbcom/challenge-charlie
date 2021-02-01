import Vue from "vue";
import VueI18n from "vue-i18n";
import {languages} from "@/lang";
import {APP_LANGUAGE} from "@/providers/EnvironmentProvider"

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: APP_LANGUAGE,
    messages: languages
})

export default i18n;