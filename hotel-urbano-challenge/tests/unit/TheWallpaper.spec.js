import Vue from "vue";
import { expect } from "chai";
import TheWallpaper from "@/components/TheWallpaper.vue";

describe("TheWallpaper.vue", () => {
    it("should get the wallpaper right", () => {
        const Constructor = Vue.extend(TheWallpaper);
        const vm = new Constructor().$mount();
        vm.getWallpaper();
        expect(vm.$data.errorWallpaper).to.equal(false);
    });
});
