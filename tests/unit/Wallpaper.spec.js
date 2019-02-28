import Vue from "vue";
import { expect } from "chai";
import Wallpaper from "@/components/Wallpaper.vue";

describe("Wallpaper.vue", () => {
    it("should get the wallpaper right", () => {
        const Constructor = Vue.extend(Wallpaper);
        const vm = new Constructor().$mount();
        vm.getWallpaper();
        expect(vm.$data.errorWallpaper).to.equal(false);
    });
});