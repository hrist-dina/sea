import $ from "jquery"
import { Ajax, baseFeedbackUrl } from "%classes%/Ajax"
import { selectorModal, BaseModal } from "%classes%/BaseModal"

export const selectorSubscribe = ".js-form-subscribe"

export class Subscribe extends Ajax {
    constructor(selector = selectorSubscribe) {
        super(selector)
    }

    get url() {
        return baseFeedbackUrl
    }

    done(data) {
        console.log(data)
        if (data) {
            BaseModal.closeCurrent($(this.element).closest(selectorModal))
            BaseModal.openByType("success-subscribe")
        }
        this.hideLoader()
    }
}
