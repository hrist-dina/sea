import $ from "jquery"
import Inputmask from "inputmask"

export default class Mask {
    constructor(selector) {
        this.selector = selector
        this.elem = $(document).find(this.selector)
    }

    init() {
        new Mask(".js-mask-phone").phone()
        new Mask(".js-mask-date").date()
        new Mask(".js-mask-passport-series").passportSeries()
        new Mask(".js-mask-passport-number").passportNumber()
    }

    phone() {
        new Inputmask({
            mask: "+7 999 999-99-99",
            showMaskOnHover: false,
        }).mask(this.elem)
    }

    date() {
        new Inputmask({
            alias: "datetime",
            inputFormat: "dd.mm.yyyy",
            placeholder: "__.__.____",
            showMaskOnHover: false,
        }).mask(this.elem)
    }

    passportSeries() {
        new Inputmask({
            mask: "9999",
            showMaskOnHover: false,
        }).mask(this.elem)
    }

    passportNumber() {
        new Inputmask({
            mask: "999999",
            showMaskOnHover: false,
        }).mask(this.elem)
    }
}
