import { expect } from "chai";
import api from "@/services/api.js";

describe('Api check', () => {
    it('Check getWallpaper', () => {
        expect(typeof api.getWallpaper).to.equal('function');
    });

    it('Check getClimate', () => {
        expect(typeof api.getClimate).to.equal('function');
    });

})