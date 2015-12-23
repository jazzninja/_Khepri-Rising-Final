function MaterialButton(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialCheckbox(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialIconToggle(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialMenu(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialProgress(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialRadio(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialSlider(e) {
    "use strict";
    this.element_ = e, this.isIE_ = window.navigator.msPointerEnabled, this.init()
}

function MaterialSpinner(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialSwitch(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialTabs(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialTab(e, t) {
    "use strict";
    if (e) {
        if (t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
            var s = document.createElement("span");
            s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER), s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);
            var i = document.createElement("span");
            i.classList.add(t.CssClasses_.MDL_RIPPLE), s.appendChild(i), e.appendChild(s)
        }
        e.addEventListener("click", function(s) {
            s.preventDefault();
            var i = e.href.split("#")[1],
                n = t.element_.querySelector("#" + i);
            t.resetTabState_(), t.resetPanelState_(), e.classList.add(t.CssClasses_.ACTIVE_CLASS), n.classList.add(t.CssClasses_.ACTIVE_CLASS)
        })
    }
}

function MaterialTextfield(e) {
    "use strict";
    this.element_ = e, this.maxRows = this.Constant_.NO_MAX_ROWS, this.init()
}

function MaterialTooltip(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialLayout(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialLayoutTab(e, t, s, i) {
    "use strict";
    if (e) {
        if (i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)) {
            var n = document.createElement("span");
            n.classList.add(i.CssClasses_.RIPPLE_CONTAINER), n.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);
            var a = document.createElement("span");
            a.classList.add(i.CssClasses_.RIPPLE), n.appendChild(a), e.appendChild(n)
        }
        e.addEventListener("click", function(n) {
            n.preventDefault();
            var a = e.href.split("#")[1],
                l = i.content_.querySelector("#" + a);
            i.resetTabState_(t), i.resetPanelState_(s), e.classList.add(i.CssClasses_.IS_ACTIVE), l.classList.add(i.CssClasses_.IS_ACTIVE)
        })
    }
}

function MaterialDataTable(e) {
    "use strict";
    this.element_ = e, this.init()
}

function MaterialRipple(e) {
    "use strict";
    this.element_ = e, this.init()
}
var componentHandler = function() {
    "use strict";

    function e(e, t) {
        for (var s = 0; s < c.length; s++)
            if (c[s].className === e) return void 0 !== t && (c[s] = t), c[s];
        return !1
    }

    function t(e) {
        var t = e.getAttribute("data-upgraded");
        return null === t ? [""] : t.split(",")
    }

    function s(e, s) {
        var i = t(e);
        return -1 !== i.indexOf(s)
    }

    function i(t, s) {
        if (void 0 === t && void 0 === s)
            for (var a = 0; a < c.length; a++) i(c[a].className, c[a].cssClass);
        else {
            var l = t;
            if (void 0 === s) {
                var r = e(l);
                r && (s = r.cssClass)
            }
            for (var o = document.querySelectorAll("." + s), d = 0; d < o.length; d++) n(o[d], l)
        }
    }

    function n(i, n) {
        if (!("object" == typeof i && i instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
        var a = t(i),
            l = [];
        if (n) s(i, n) || l.push(e(n));
        else {
            var r = i.classList;
            c.forEach(function(e) {
                r.contains(e.cssClass) && -1 === l.indexOf(e) && !s(i, e.className) && l.push(e)
            })
        }
        for (var o, d = 0, _ = l.length; _ > d; d++) {
            if (o = l[d], !o) throw new Error("Unable to find a registered component for the given class.");
            a.push(o.className), i.setAttribute("data-upgraded", a.join(","));
            var h = new o.classConstructor(i);
            h[C] = o, u.push(h);
            for (var p = 0, E = o.callbacks.length; E > p; p++) o.callbacks[p](i);
            o.widget && (i[o.className] = h);
            var m = document.createEvent("Events");
            m.initEvent("mdl-componentupgraded", !0, !0), i.dispatchEvent(m)
        }
    }

    function a(e) {
        Array.isArray(e) || (e = "function" == typeof e.item ? Array.prototype.slice.call(e) : [e]);
        for (var t, s = 0, i = e.length; i > s; s++) t = e[s], t instanceof HTMLElement && (t.children.length > 0 && a(t.children), n(t))
    }

    function l(t) {
        var s = {
            classConstructor: t.constructor,
            className: t.classAsString,
            cssClass: t.cssClass,
            widget: void 0 === t.widget ? !0 : t.widget,
            callbacks: []
        };
        if (c.forEach(function(e) {
            if (e.cssClass === s.cssClass) throw new Error("The provided cssClass has already been registered.");
            if (e.className === s.className) throw new Error("The provided className has already been registered")
        }), t.constructor.prototype.hasOwnProperty(C)) throw new Error("MDL component classes must not have " + C + " defined as a property.");
        var i = e(t.classAsString, s);
        i || c.push(s)
    }

    function r(t, s) {
        var i = e(t);
        i && i.callbacks.push(s)
    }

    function o() {
        for (var e = 0; e < c.length; e++) i(c[e].className)
    }

    function d(e) {
        for (var t = 0; t < u.length; t++) {
            var s = u[t];
            if (s.element_ === e) return s
        }
    }

    function _(e) {
        if (e && e[C].classConstructor.prototype.hasOwnProperty(p)) {
            e[p]();
            var t = u.indexOf(e);
            u.splice(t, 1);
            var s = e.element_.getAttribute("data-upgraded").split(","),
                i = s.indexOf(e[C].classAsString);
            s.splice(i, 1), e.element_.setAttribute("data-upgraded", s.join(","));
            var n = document.createEvent("Events");
            n.initEvent("mdl-componentdowngraded", !0, !0), e.element_.dispatchEvent(n)
        }
    }

    function h(e) {
        var t = function(e) {
            _(d(e))
        };
        if (e instanceof Array || e instanceof NodeList)
            for (var s = 0; s < e.length; s++) t(e[s]);
        else {
            if (!(e instanceof Node)) throw new Error("Invalid argument provided to downgrade MDL nodes.");
            t(e)
        }
    }
    var c = [],
        u = [],
        p = "mdlDowngrade_",
        C = "mdlComponentConfigInternal_";
    return {
        upgradeDom: i,
        upgradeElement: n,
        upgradeElements: a,
        upgradeAllRegistered: o,
        registerUpgradedCallback: r,
        register: l,
        downgradeElements: h
    }
}();
window.addEventListener("load", function() {
    "use strict";
    "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), componentHandler.upgradeAllRegistered()) : componentHandler.upgradeElement = componentHandler.register = function() {}
}),
function() {
    "use strict";
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
        var s = e[t];
        window.requestAnimationFrame = window[s + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"]
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var i = 0;
        window.requestAnimationFrame = function(e) {
            var t = Date.now(),
                s = Math.max(i + 16, t);
            return setTimeout(function() {
                e(i = s)
            }, s - t)
        }, window.cancelAnimationFrame = clearTimeout
    }
}(), MaterialButton.prototype.Constant_ = {}, MaterialButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_CONTAINER: "mdl-button__ripple-container",
    RIPPLE: "mdl-ripple"
}, MaterialButton.prototype.blurHandler = function(e) {
    "use strict";
    e && this.element_.blur()
}, MaterialButton.prototype.disable = function() {
    "use strict";
    this.element_.disabled = !0
}, MaterialButton.prototype.enable = function() {
    "use strict";
    this.element_.disabled = !1
}, MaterialButton.prototype.init = function() {
    "use strict";
    if (this.element_) {
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleElement_ = document.createElement("span"), this.rippleElement_.classList.add(this.CssClasses_.RIPPLE), e.appendChild(this.rippleElement_), this.boundRippleBlurHandler = this.blurHandler.bind(this), this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler), this.element_.appendChild(e)
        }
        this.boundButtonBlurHandler = this.blurHandler.bind(this), this.element_.addEventListener("mouseup", this.boundButtonBlurHandler), this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler)
    }
}, MaterialButton.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.rippleElement_ && this.rippleElement_.removeEventListener("mouseup", this.boundRippleBlurHandler), this.element_.removeEventListener("mouseup", this.boundButtonBlurHandler), this.element_.removeEventListener("mouseleave", this.boundButtonBlurHandler)
}, componentHandler.register({
    constructor: MaterialButton,
    classAsString: "MaterialButton",
    cssClass: "mdl-js-button",
    widget: !0
}), MaterialCheckbox.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialCheckbox.prototype.CssClasses_ = {
    INPUT: "mdl-checkbox__input",
    BOX_OUTLINE: "mdl-checkbox__box-outline",
    FOCUS_HELPER: "mdl-checkbox__focus-helper",
    TICK_OUTLINE: "mdl-checkbox__tick-outline",
    RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "mdl-checkbox__ripple-container",
    RIPPLE_CENTER: "mdl-ripple--center",
    RIPPLE: "mdl-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked",
    IS_UPGRADED: "is-upgraded"
}, MaterialCheckbox.prototype.onChange_ = function(e) {
    "use strict";
    this.updateClasses_()
}, MaterialCheckbox.prototype.onFocus_ = function(e) {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialCheckbox.prototype.onBlur_ = function(e) {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialCheckbox.prototype.onMouseUp_ = function(e) {
    "use strict";
    this.blur_()
}, MaterialCheckbox.prototype.updateClasses_ = function() {
    "use strict";
    this.checkDisabled(), this.checkToggleState()
}, MaterialCheckbox.prototype.blur_ = function(e) {
    "use strict";
    window.setTimeout(function() {
        this.inputElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialCheckbox.prototype.checkToggleState = function() {
    "use strict";
    this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialCheckbox.prototype.checkDisabled = function() {
    "use strict";
    this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
}, MaterialCheckbox.prototype.disable = function() {
    "use strict";
    this.inputElement_.disabled = !0, this.updateClasses_()
}, MaterialCheckbox.prototype.enable = function() {
    "use strict";
    this.inputElement_.disabled = !1, this.updateClasses_()
}, MaterialCheckbox.prototype.check = function() {
    "use strict";
    this.inputElement_.checked = !0, this.updateClasses_()
}, MaterialCheckbox.prototype.uncheck = function() {
    "use strict";
    this.inputElement_.checked = !1, this.updateClasses_()
}, MaterialCheckbox.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.BOX_OUTLINE);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.FOCUS_HELPER);
        var s = document.createElement("span");
        if (s.classList.add(this.CssClasses_.TICK_OUTLINE), e.appendChild(s), this.element_.appendChild(t), this.element_.appendChild(e), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
            var i = document.createElement("span");
            i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
        }
        this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementMouseUp), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, MaterialCheckbox.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundRippleMouseUp), this.inputElement_.removeEventListener("change", this.boundInputOnChange), this.inputElement_.removeEventListener("focus", this.boundInputOnFocus), this.inputElement_.removeEventListener("blur", this.boundInputOnBlur), this.element_.removeEventListener("mouseup", this.boundElementMouseUp)
}, componentHandler.register({
    constructor: MaterialCheckbox,
    classAsString: "MaterialCheckbox",
    cssClass: "mdl-js-checkbox",
    widget: !0
}), MaterialIconToggle.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialIconToggle.prototype.CssClasses_ = {
    INPUT: "mdl-icon-toggle__input",
    JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "mdl-icon-toggle__ripple-container",
    RIPPLE_CENTER: "mdl-ripple--center",
    RIPPLE: "mdl-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked"
}, MaterialIconToggle.prototype.onChange_ = function(e) {
    "use strict";
    this.updateClasses_()
}, MaterialIconToggle.prototype.onFocus_ = function(e) {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialIconToggle.prototype.onBlur_ = function(e) {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialIconToggle.prototype.onMouseUp_ = function(e) {
    "use strict";
    this.blur_()
}, MaterialIconToggle.prototype.updateClasses_ = function() {
    "use strict";
    this.checkDisabled(), this.checkToggleState()
}, MaterialIconToggle.prototype.blur_ = function(e) {
    "use strict";
    window.setTimeout(function() {
        this.inputElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialIconToggle.prototype.checkToggleState = function() {
    "use strict";
    this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialIconToggle.prototype.checkDisabled = function() {
    "use strict";
    this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
}, MaterialIconToggle.prototype.disable = function() {
    "use strict";
    this.inputElement_.disabled = !0, this.updateClasses_()
}, MaterialIconToggle.prototype.enable = function() {
    "use strict";
    this.inputElement_.disabled = !1, this.updateClasses_()
}, MaterialIconToggle.prototype.check = function() {
    "use strict";
    this.inputElement_.checked = !0, this.updateClasses_()
}, MaterialIconToggle.prototype.uncheck = function() {
    "use strict";
    this.inputElement_.checked = !1, this.updateClasses_()
}, MaterialIconToggle.prototype.init = function() {
    "use strict";
    if (this.element_) {
        if (this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(e), this.element_.appendChild(this.rippleContainerElement_)
        }
        this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementOnMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementOnMouseUp), this.updateClasses_(), this.element_.classList.add("is-upgraded")
    }
}, MaterialIconToggle.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundRippleMouseUp), this.inputElement_.removeEventListener("change", this.boundInputOnChange), this.inputElement_.removeEventListener("focus", this.boundInputOnFocus), this.inputElement_.removeEventListener("blur", this.boundInputOnBlur), this.element_.removeEventListener("mouseup", this.boundElementOnMouseUp)
}, componentHandler.register({
    constructor: MaterialIconToggle,
    classAsString: "MaterialIconToggle",
    cssClass: "mdl-js-icon-toggle",
    widget: !0
}), MaterialMenu.prototype.Constant_ = {
    TRANSITION_DURATION_SECONDS: .3,
    TRANSITION_DURATION_FRACTION: .8,
    CLOSE_TIMEOUT: 150
}, MaterialMenu.prototype.Keycodes_ = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    UP_ARROW: 38,
    DOWN_ARROW: 40
}, MaterialMenu.prototype.CssClasses_ = {
    CONTAINER: "mdl-menu__container",
    OUTLINE: "mdl-menu__outline",
    ITEM: "mdl-menu__item",
    ITEM_RIPPLE_CONTAINER: "mdl-menu__item-ripple-container",
    RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    RIPPLE: "mdl-ripple",
    IS_UPGRADED: "is-upgraded",
    IS_VISIBLE: "is-visible",
    IS_ANIMATING: "is-animating",
    BOTTOM_LEFT: "mdl-menu--bottom-left",
    BOTTOM_RIGHT: "mdl-menu--bottom-right",
    TOP_LEFT: "mdl-menu--top-left",
    TOP_RIGHT: "mdl-menu--top-right",
    UNALIGNED: "mdl-menu--unaligned"
}, MaterialMenu.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_), this.container_ = e;
        var t = document.createElement("div");
        t.classList.add(this.CssClasses_.OUTLINE), this.outline_ = t, e.insertBefore(t, this.element_);
        var s = this.element_.getAttribute("for"),
            i = null;
        s && (i = document.getElementById(s), i && (this.forElement_ = i, i.addEventListener("click", this.handleForClick_.bind(this)), i.addEventListener("keydown", this.handleForKeyboardEvent_.bind(this))));
        for (var n = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), a = 0; a < n.length; a++) n[a].addEventListener("click", this.handleItemClick_.bind(this)), n[a].tabIndex = "-1", n[a].addEventListener("keydown", this.handleItemKeyboardEvent_.bind(this));
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))
            for (this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), a = 0; a < n.length; a++) {
                var l = n[a],
                    r = document.createElement("span");
                r.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
                var o = document.createElement("span");
                o.classList.add(this.CssClasses_.RIPPLE), r.appendChild(o), l.appendChild(r), l.classList.add(this.CssClasses_.RIPPLE_EFFECT)
            }
        this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT), this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT), this.element_.classList.contains(this.CssClasses_.TOP_LEFT) && this.outline_.classList.add(this.CssClasses_.TOP_LEFT), this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) && this.outline_.classList.add(this.CssClasses_.TOP_RIGHT), this.element_.classList.contains(this.CssClasses_.UNALIGNED) && this.outline_.classList.add(this.CssClasses_.UNALIGNED), e.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, MaterialMenu.prototype.handleForClick_ = function(e) {
    "use strict";
    if (this.element_ && this.forElement_) {
        var t = this.forElement_.getBoundingClientRect(),
            s = this.forElement_.parentElement.getBoundingClientRect();
        this.element_.classList.contains(this.CssClasses_.UNALIGNED) || (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? (this.container_.style.right = s.right - t.right + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px") : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.bottom = s.bottom - t.top + "px") : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (this.container_.style.right = s.right - t.right + "px", this.container_.style.bottom = s.bottom - t.top + "px") : (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px"))
    }
    this.toggle(e)
}, MaterialMenu.prototype.handleForKeyboardEvent_ = function(e) {
    "use strict";
    if (this.element_ && this.container_ && this.forElement_) {
        var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
        t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) && (e.keyCode === this.Keycodes_.UP_ARROW ? (e.preventDefault(), t[t.length - 1].focus()) : e.keyCode === this.Keycodes_.DOWN_ARROW && (e.preventDefault(), t[0].focus()))
    }
}, MaterialMenu.prototype.handleItemKeyboardEvent_ = function(e) {
    "use strict";
    if (this.element_ && this.container_) {
        var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
        if (t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
            var s = Array.prototype.slice.call(t).indexOf(e.target);
            if (e.keyCode === this.Keycodes_.UP_ARROW) e.preventDefault(), s > 0 ? t[s - 1].focus() : t[t.length - 1].focus();
            else if (e.keyCode === this.Keycodes_.DOWN_ARROW) e.preventDefault(), t.length > s + 1 ? t[s + 1].focus() : t[0].focus();
            else if (e.keyCode === this.Keycodes_.SPACE || e.keyCode === this.Keycodes_.ENTER) {
                e.preventDefault();
                var i = new MouseEvent("mousedown");
                e.target.dispatchEvent(i), i = new MouseEvent("mouseup"), e.target.dispatchEvent(i), e.target.click()
            } else e.keyCode === this.Keycodes_.ESCAPE && (e.preventDefault(), this.hide())
        }
    }
}, MaterialMenu.prototype.handleItemClick_ = function(e) {
    "use strict";
    null !== e.target.getAttribute("disabled") ? e.stopPropagation() : (this.closing_ = !0, window.setTimeout(function(e) {
        this.hide(), this.closing_ = !1
    }.bind(this), this.Constant_.CLOSE_TIMEOUT))
}, MaterialMenu.prototype.applyClip_ = function(e, t) {
    "use strict";
    this.element_.style.clip = this.element_.classList.contains(this.CssClasses_.UNALIGNED) ? null : this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? "rect(0 " + t + "px 0 " + t + "px)" : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? "rect(" + e + "px 0 " + e + "px 0)" : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? "rect(" + e + "px " + t + "px " + e + "px " + t + "px)" : null
}, MaterialMenu.prototype.addAnimationEndListener_ = function() {
    "use strict";
    var e = function() {
        this.element_.removeEventListener("transitionend", e), this.element_.removeEventListener("webkitTransitionEnd", e), this.element_.classList.remove(this.CssClasses_.IS_ANIMATING)
    }.bind(this);
    this.element_.addEventListener("transitionend", e), this.element_.addEventListener("webkitTransitionEnd", e)
}, MaterialMenu.prototype.show = function(e) {
    "use strict";
    if (this.element_ && this.container_ && this.outline_) {
        var t = this.element_.getBoundingClientRect().height,
            s = this.element_.getBoundingClientRect().width;
        this.container_.style.width = s + "px", this.container_.style.height = t + "px", this.outline_.style.width = s + "px", this.outline_.style.height = t + "px";
        for (var i = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION, n = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), a = 0; a < n.length; a++) {
            var l = null;
            l = this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (t - n[a].offsetTop - n[a].offsetHeight) / t * i + "s" : n[a].offsetTop / t * i + "s", n[a].style.transitionDelay = l
        }
        this.applyClip_(t, s), window.requestAnimationFrame(function() {
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.element_.style.clip = "rect(0 " + s + "px " + t + "px 0)", this.container_.classList.add(this.CssClasses_.IS_VISIBLE)
        }.bind(this)), this.addAnimationEndListener_();
        var r = function(t) {
            t === e || this.closing_ || (document.removeEventListener("click", r), this.hide())
        }.bind(this);
        document.addEventListener("click", r)
    }
}, MaterialMenu.prototype.hide = function() {
    "use strict";
    if (this.element_ && this.container_ && this.outline_) {
        for (var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), t = 0; t < e.length; t++) e[t].style.transitionDelay = null;
        var s = this.element_.getBoundingClientRect().height,
            i = this.element_.getBoundingClientRect().width;
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.applyClip_(s, i), this.container_.classList.remove(this.CssClasses_.IS_VISIBLE), this.addAnimationEndListener_()
    }
}, MaterialMenu.prototype.toggle = function(e) {
    "use strict";
    this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) ? this.hide() : this.show(e)
}, componentHandler.register({
    constructor: MaterialMenu,
    classAsString: "MaterialMenu",
    cssClass: "mdl-js-menu",
    widget: !0
}), MaterialProgress.prototype.Constant_ = {}, MaterialProgress.prototype.CssClasses_ = {
    INDETERMINATE_CLASS: "mdl-progress__indeterminate"
}, MaterialProgress.prototype.setProgress = function(e) {
    "use strict";
    this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS) || (this.progressbar_.style.width = e + "%")
}, MaterialProgress.prototype.setBuffer = function(e) {
    "use strict";
    this.bufferbar_.style.width = e + "%", this.auxbar_.style.width = 100 - e + "%"
}, MaterialProgress.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var e = document.createElement("div");
        e.className = "progressbar bar bar1", this.element_.appendChild(e), this.progressbar_ = e, e = document.createElement("div"), e.className = "bufferbar bar bar2", this.element_.appendChild(e), this.bufferbar_ = e, e = document.createElement("div"), e.className = "auxbar bar bar3", this.element_.appendChild(e), this.auxbar_ = e, this.progressbar_.style.width = "0%", this.bufferbar_.style.width = "100%", this.auxbar_.style.width = "0%", this.element_.classList.add("is-upgraded")
    }
}, MaterialProgress.prototype.mdlDowngrade_ = function() {
    "use strict";
    for (; this.element_.firstChild;) this.element_.removeChild(this.element_.firstChild)
}, componentHandler.register({
    constructor: MaterialProgress,
    classAsString: "MaterialProgress",
    cssClass: "mdl-js-progress",
    widget: !0
}), MaterialRadio.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialRadio.prototype.CssClasses_ = {
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked",
    IS_UPGRADED: "is-upgraded",
    JS_RADIO: "mdl-js-radio",
    RADIO_BTN: "mdl-radio__button",
    RADIO_OUTER_CIRCLE: "mdl-radio__outer-circle",
    RADIO_INNER_CIRCLE: "mdl-radio__inner-circle",
    RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "mdl-radio__ripple-container",
    RIPPLE_CENTER: "mdl-ripple--center",
    RIPPLE: "mdl-ripple"
}, MaterialRadio.prototype.onChange_ = function(e) {
    "use strict";
    for (var t = document.getElementsByClassName(this.CssClasses_.JS_RADIO), s = 0; s < t.length; s++) {
        var i = t[s].querySelector("." + this.CssClasses_.RADIO_BTN);
        i.getAttribute("name") === this.btnElement_.getAttribute("name") && t[s].MaterialRadio.updateClasses_()
    }
}, MaterialRadio.prototype.onFocus_ = function(e) {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialRadio.prototype.onBlur_ = function(e) {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialRadio.prototype.onMouseup_ = function(e) {
    "use strict";
    this.blur_()
}, MaterialRadio.prototype.updateClasses_ = function() {
    "use strict";
    this.checkDisabled(), this.checkToggleState()
}, MaterialRadio.prototype.blur_ = function(e) {
    "use strict";
    window.setTimeout(function() {
        this.btnElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialRadio.prototype.checkDisabled = function() {
    "use strict";
    this.btnElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
}, MaterialRadio.prototype.checkToggleState = function() {
    "use strict";
    this.btnElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialRadio.prototype.disable = function() {
    "use strict";
    this.btnElement_.disabled = !0, this.updateClasses_()
}, MaterialRadio.prototype.enable = function() {
    "use strict";
    this.btnElement_.disabled = !1, this.updateClasses_()
}, MaterialRadio.prototype.check = function() {
    "use strict";
    this.btnElement_.checked = !0, this.updateClasses_()
}, MaterialRadio.prototype.uncheck = function() {
    "use strict";
    this.btnElement_.checked = !1, this.updateClasses_()
}, MaterialRadio.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.RADIO_BTN);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE), this.element_.appendChild(e), this.element_.appendChild(t);
        var s;
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), s = document.createElement("span"), s.classList.add(this.CssClasses_.RIPPLE_CONTAINER), s.classList.add(this.CssClasses_.RIPPLE_EFFECT), s.classList.add(this.CssClasses_.RIPPLE_CENTER), s.addEventListener("mouseup", this.onMouseup_.bind(this));
            var i = document.createElement("span");
            i.classList.add(this.CssClasses_.RIPPLE), s.appendChild(i), this.element_.appendChild(s)
        }
        this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseup_.bind(this)), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialRadio,
    classAsString: "MaterialRadio",
    cssClass: "mdl-js-radio",
    widget: !0
}), MaterialSlider.prototype.Constant_ = {}, MaterialSlider.prototype.CssClasses_ = {
    IE_CONTAINER: "mdl-slider__ie-container",
    SLIDER_CONTAINER: "mdl-slider__container",
    BACKGROUND_FLEX: "mdl-slider__background-flex",
    BACKGROUND_LOWER: "mdl-slider__background-lower",
    BACKGROUND_UPPER: "mdl-slider__background-upper",
    IS_LOWEST_VALUE: "is-lowest-value",
    IS_UPGRADED: "is-upgraded"
}, MaterialSlider.prototype.onInput_ = function(e) {
    "use strict";
    this.updateValueStyles_()
}, MaterialSlider.prototype.onChange_ = function(e) {
    "use strict";
    this.updateValueStyles_()
}, MaterialSlider.prototype.onMouseUp_ = function(e) {
    "use strict";
    e.target.blur()
}, MaterialSlider.prototype.onContainerMouseDown_ = function(e) {
    "use strict";
    if (e.target === this.element_.parentElement) {
        e.preventDefault();
        var t = new MouseEvent("mousedown", {
            target: e.target,
            buttons: e.buttons,
            clientX: e.clientX,
            clientY: this.element_.getBoundingClientRect().y
        });
        this.element_.dispatchEvent(t)
    }
}, MaterialSlider.prototype.updateValueStyles_ = function(e) {
    "use strict";
    var t = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
    0 === t ? this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE) : this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE), this.isIE_ || (this.backgroundLower_.style.flex = t, this.backgroundLower_.style.webkitFlex = t, this.backgroundUpper_.style.flex = 1 - t, this.backgroundUpper_.style.webkitFlex = 1 - t)
}, MaterialSlider.prototype.disable = function() {
    "use strict";
    this.element_.disabled = !0
}, MaterialSlider.prototype.enable = function() {
    "use strict";
    this.element_.disabled = !1
}, MaterialSlider.prototype.change = function(e) {
    "use strict";
    e && (this.element_.value = e), this.updateValueStyles_()
}, MaterialSlider.prototype.init = function() {
    "use strict";
    if (this.element_) {
        if (this.isIE_) {
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.IE_CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_)
        } else {
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.SLIDER_CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_);
            var s = document.createElement("div");
            s.classList.add(this.CssClasses_.BACKGROUND_FLEX), t.appendChild(s), this.backgroundLower_ = document.createElement("div"), this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER), s.appendChild(this.backgroundLower_), this.backgroundUpper_ = document.createElement("div"), this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER), s.appendChild(this.backgroundUpper_)
        }
        this.boundInputHandler = this.onInput_.bind(this), this.boundChangeHandler = this.onChange_.bind(this), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this),
        this.element_.addEventListener("input", this.boundInputHandler), this.element_.addEventListener("change", this.boundChangeHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.addEventListener("mousedown", this.boundContainerMouseDownHandler), this.updateValueStyles_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, MaterialSlider.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.element_.removeEventListener("input", this.boundInputHandler), this.element_.removeEventListener("change", this.boundChangeHandler), this.element_.removeEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.removeEventListener("mousedown", this.boundContainerMouseDownHandler)
}, componentHandler.register({
    constructor: MaterialSlider,
    classAsString: "MaterialSlider",
    cssClass: "mdl-js-slider",
    widget: !0
}), MaterialSpinner.prototype.Constant_ = {
    MDL_SPINNER_LAYER_COUNT: 4
}, MaterialSpinner.prototype.CssClasses_ = {
    MDL_SPINNER_LAYER: "mdl-spinner__layer",
    MDL_SPINNER_CIRCLE_CLIPPER: "mdl-spinner__circle-clipper",
    MDL_SPINNER_CIRCLE: "mdl-spinner__circle",
    MDL_SPINNER_GAP_PATCH: "mdl-spinner__gap-patch",
    MDL_SPINNER_LEFT: "mdl-spinner__left",
    MDL_SPINNER_RIGHT: "mdl-spinner__right"
}, MaterialSpinner.prototype.createLayer = function(e) {
    "use strict";
    var t = document.createElement("div");
    t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER), t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + "-" + e);
    var s = document.createElement("div");
    s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
    var i = document.createElement("div");
    i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
    var n = document.createElement("div");
    n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
    for (var a = [s, i, n], l = 0; l < a.length; l++) {
        var r = document.createElement("div");
        r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE), a[l].appendChild(r)
    }
    t.appendChild(s), t.appendChild(i), t.appendChild(n), this.element_.appendChild(t)
}, MaterialSpinner.prototype.stop = function() {
    "use strict";
    this.element_.classList.remove("is-active")
}, MaterialSpinner.prototype.start = function() {
    "use strict";
    this.element_.classList.add("is-active")
}, MaterialSpinner.prototype.init = function() {
    "use strict";
    if (this.element_) {
        for (var e = 1; e <= this.Constant_.MDL_SPINNER_LAYER_COUNT; e++) this.createLayer(e);
        this.element_.classList.add("is-upgraded")
    }
}, componentHandler.register({
    constructor: MaterialSpinner,
    classAsString: "MaterialSpinner",
    cssClass: "mdl-js-spinner",
    widget: !0
}), MaterialSwitch.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialSwitch.prototype.CssClasses_ = {
    INPUT: "mdl-switch__input",
    TRACK: "mdl-switch__track",
    THUMB: "mdl-switch__thumb",
    FOCUS_HELPER: "mdl-switch__focus-helper",
    RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "mdl-switch__ripple-container",
    RIPPLE_CENTER: "mdl-ripple--center",
    RIPPLE: "mdl-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked"
}, MaterialSwitch.prototype.onChange_ = function(e) {
    "use strict";
    this.updateClasses_()
}, MaterialSwitch.prototype.onFocus_ = function(e) {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialSwitch.prototype.onBlur_ = function(e) {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialSwitch.prototype.onMouseUp_ = function(e) {
    "use strict";
    this.blur_()
}, MaterialSwitch.prototype.updateClasses_ = function() {
    "use strict";
    this.checkDisabled(), this.checkToggleState()
}, MaterialSwitch.prototype.blur_ = function(e) {
    "use strict";
    window.setTimeout(function() {
        this.inputElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialSwitch.prototype.checkDisabled = function() {
    "use strict";
    this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
}, MaterialSwitch.prototype.checkToggleState = function() {
    "use strict";
    this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialSwitch.prototype.disable = function() {
    "use strict";
    this.inputElement_.disabled = !0, this.updateClasses_()
}, MaterialSwitch.prototype.enable = function() {
    "use strict";
    this.inputElement_.disabled = !1, this.updateClasses_()
}, MaterialSwitch.prototype.on = function() {
    "use strict";
    this.inputElement_.checked = !0, this.updateClasses_()
}, MaterialSwitch.prototype.off = function() {
    "use strict";
    this.inputElement_.checked = !1, this.updateClasses_()
}, MaterialSwitch.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.TRACK);
        var t = document.createElement("div");
        t.classList.add(this.CssClasses_.THUMB);
        var s = document.createElement("span");
        if (s.classList.add(this.CssClasses_.FOCUS_HELPER), t.appendChild(s), this.element_.appendChild(e), this.element_.appendChild(t), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.rippleContainerElement_.addEventListener("mouseup", this.boundMouseUpHandler);
            var i = document.createElement("span");
            i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
        }
        this.boundChangeHandler = this.onChange_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.inputElement_.addEventListener("change", this.boundChangeHandler), this.inputElement_.addEventListener("focus", this.boundFocusHandler), this.inputElement_.addEventListener("blur", this.boundBlurHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.updateClasses_(), this.element_.classList.add("is-upgraded")
    }
}, MaterialSwitch.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundMouseUpHandler), this.inputElement_.removeEventListener("change", this.boundChangeHandler), this.inputElement_.removeEventListener("focus", this.boundFocusHandler), this.inputElement_.removeEventListener("blur", this.boundBlurHandler), this.element_.removeEventListener("mouseup", this.boundMouseUpHandler)
}, componentHandler.register({
    constructor: MaterialSwitch,
    classAsString: "MaterialSwitch",
    cssClass: "mdl-js-switch",
    widget: !0
}), MaterialTabs.prototype.Constant_ = {}, MaterialTabs.prototype.CssClasses_ = {
    TAB_CLASS: "mdl-tabs__tab",
    PANEL_CLASS: "mdl-tabs__panel",
    ACTIVE_CLASS: "is-active",
    UPGRADED_CLASS: "is-upgraded",
    MDL_JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
    MDL_RIPPLE_CONTAINER: "mdl-tabs__ripple-container",
    MDL_RIPPLE: "mdl-ripple",
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events"
}, MaterialTabs.prototype.initTabs_ = function(e) {
    "use strict";
    this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT) && this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS), this.tabs_ = this.element_.querySelectorAll("." + this.CssClasses_.TAB_CLASS), this.panels_ = this.element_.querySelectorAll("." + this.CssClasses_.PANEL_CLASS);
    for (var t = 0; t < this.tabs_.length; t++) new MaterialTab(this.tabs_[t], this);
    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)
}, MaterialTabs.prototype.resetTabState_ = function() {
    "use strict";
    for (var e = 0; e < this.tabs_.length; e++) this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
}, MaterialTabs.prototype.resetPanelState_ = function() {
    "use strict";
    for (var e = 0; e < this.panels_.length; e++) this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
}, MaterialTabs.prototype.init = function() {
    "use strict";
    this.element_ && this.initTabs_()
}, componentHandler.register({
    constructor: MaterialTabs,
    classAsString: "MaterialTabs",
    cssClass: "mdl-js-tabs"
}), MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1,
    MAX_ROWS_ATTRIBUTE: "maxrows"
}, MaterialTextfield.prototype.CssClasses_ = {
    LABEL: "mdl-textfield__label",
    INPUT: "mdl-textfield__input",
    IS_DIRTY: "is-dirty",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_INVALID: "is-invalid",
    IS_UPGRADED: "is-upgraded"
}, MaterialTextfield.prototype.onKeyDown_ = function(e) {
    "use strict";
    var t = e.target.value.split("\n").length;
    13 === e.keyCode && t >= this.maxRows && e.preventDefault()
}, MaterialTextfield.prototype.onFocus_ = function(e) {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialTextfield.prototype.onBlur_ = function(e) {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialTextfield.prototype.updateClasses_ = function() {
    "use strict";
    this.checkDisabled(), this.checkValidity(), this.checkDirty()
}, MaterialTextfield.prototype.checkDisabled = function() {
    "use strict";
    this.input_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
}, MaterialTextfield.prototype.checkValidity = function() {
    "use strict";
    this.input_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID)
}, MaterialTextfield.prototype.checkDirty = function() {
    "use strict";
    this.input_.value && this.input_.value.length > 0 ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
}, MaterialTextfield.prototype.disable = function() {
    "use strict";
    this.input_.disabled = !0, this.updateClasses_()
}, MaterialTextfield.prototype.enable = function() {
    "use strict";
    this.input_.disabled = !1, this.updateClasses_()
}, MaterialTextfield.prototype.change = function(e) {
    "use strict";
    e && (this.input_.value = e), this.updateClasses_()
}, MaterialTextfield.prototype.init = function() {
    "use strict";
    this.element_ && (this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL), this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.input_ && (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (this.maxRows = this.Constant_.NO_MAX_ROWS)), this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.input_.addEventListener("input", this.boundUpdateClassesHandler), this.input_.addEventListener("focus", this.boundFocusHandler), this.input_.addEventListener("blur", this.boundBlurHandler), this.maxRows !== this.Constant_.NO_MAX_ROWS && (this.boundKeyDownHandler = this.onKeyDown_.bind(this), this.input_.addEventListener("keydown", this.boundKeyDownHandler)), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)))
}, MaterialTextfield.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.input_.removeEventListener("input", this.boundUpdateClassesHandler), this.input_.removeEventListener("focus", this.boundFocusHandler), this.input_.removeEventListener("blur", this.boundBlurHandler), this.boundKeyDownHandler && this.input_.removeEventListener("keydown", this.boundKeyDownHandler)
}, componentHandler.register({
    constructor: MaterialTextfield,
    classAsString: "MaterialTextfield",
    cssClass: "mdl-js-textfield",
    widget: !0
}), MaterialTooltip.prototype.Constant_ = {}, MaterialTooltip.prototype.CssClasses_ = {
    IS_ACTIVE: "is-active"
}, MaterialTooltip.prototype.handleMouseEnter_ = function(e) {
    "use strict";
    e.stopPropagation();
    var t = e.target.getBoundingClientRect(),
        s = t.left + t.width / 2,
        i = -1 * (this.element_.offsetWidth / 2);
    0 > s + i ? (this.element_.style.left = 0, this.element_.style.marginLeft = 0) : (this.element_.style.left = s + "px", this.element_.style.marginLeft = i + "px"), this.element_.style.top = t.top + t.height + 10 + "px", this.element_.classList.add(this.CssClasses_.IS_ACTIVE), window.addEventListener("scroll", this.boundMouseLeaveHandler, !1), window.addEventListener("touchmove", this.boundMouseLeaveHandler, !1)
}, MaterialTooltip.prototype.handleMouseLeave_ = function(e) {
    "use strict";
    e.stopPropagation(), this.element_.classList.remove(this.CssClasses_.IS_ACTIVE), window.removeEventListener("scroll", this.boundMouseLeaveHandler), window.removeEventListener("touchmove", this.boundMouseLeaveHandler, !1)
}, MaterialTooltip.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var e = this.element_.getAttribute("for");
        e && (this.forElement_ = document.getElementById(e)), this.forElement_ && (this.forElement_.getAttribute("tabindex") || this.forElement_.setAttribute("tabindex", "0"), this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this), this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this), this.forElement_.addEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("click", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("blur", this.boundMouseLeaveHandler), this.forElement_.addEventListener("touchstart", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("mouseleave", this.boundMouseLeaveHandler))
    }
}, MaterialTooltip.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.forElement_ && (this.forElement_.removeEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("click", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("touchstart", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("mouseleave", this.boundMouseLeaveHandler))
}, componentHandler.register({
    constructor: MaterialTooltip,
    classAsString: "MaterialTooltip",
    cssClass: "mdl-tooltip"
}), MaterialLayout.prototype.Constant_ = {
    MAX_WIDTH: "(max-width: 1024px)",
    TAB_SCROLL_PIXELS: 100,
    MENU_ICON: "menu",
    CHEVRON_LEFT: "chevron_left",
    CHEVRON_RIGHT: "chevron_right"
}, MaterialLayout.prototype.Mode_ = {
    STANDARD: 0,
    SEAMED: 1,
    WATERFALL: 2,
    SCROLL: 3
}, MaterialLayout.prototype.CssClasses_ = {
    CONTAINER: "mdl-layout__container",
    HEADER: "mdl-layout__header",
    DRAWER: "mdl-layout__drawer",
    CONTENT: "mdl-layout__content",
    DRAWER_BTN: "mdl-layout__drawer-button",
    ICON: "material-icons",
    JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
    RIPPLE_CONTAINER: "mdl-layout__tab-ripple-container",
    RIPPLE: "mdl-ripple",
    RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    HEADER_SEAMED: "mdl-layout__header--seamed",
    HEADER_WATERFALL: "mdl-layout__header--waterfall",
    HEADER_SCROLL: "mdl-layout__header--scroll",
    FIXED_HEADER: "mdl-layout--fixed-header",
    OBFUSCATOR: "mdl-layout__obfuscator",
    TAB_BAR: "mdl-layout__tab-bar",
    TAB_CONTAINER: "mdl-layout__tab-bar-container",
    TAB: "mdl-layout__tab",
    TAB_BAR_BUTTON: "mdl-layout__tab-bar-button",
    TAB_BAR_LEFT_BUTTON: "mdl-layout__tab-bar-left-button",
    TAB_BAR_RIGHT_BUTTON: "mdl-layout__tab-bar-right-button",
    PANEL: "mdl-layout__tab-panel",
    HAS_DRAWER: "has-drawer",
    HAS_TABS: "has-tabs",
    HAS_SCROLLING_HEADER: "has-scrolling-header",
    CASTING_SHADOW: "is-casting-shadow",
    IS_COMPACT: "is-compact",
    IS_SMALL_SCREEN: "is-small-screen",
    IS_DRAWER_OPEN: "is-visible",
    IS_ACTIVE: "is-active",
    IS_UPGRADED: "is-upgraded",
    IS_ANIMATING: "is-animating",
    ON_LARGE_SCREEN: "mdl-layout--large-screen-only",
    ON_SMALL_SCREEN: "mdl-layout--small-screen-only"
}, MaterialLayout.prototype.contentScrollHandler_ = function() {
    "use strict";
    this.header_.classList.contains(this.CssClasses_.IS_ANIMATING) || (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT) ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.header_.classList.add(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING)) : this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING)))
}, MaterialLayout.prototype.screenSizeHandler_ = function() {
    "use strict";
    this.screenSizeMediaQuery_.matches ? this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN) : (this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN), this.drawer_ && this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN))
}, MaterialLayout.prototype.drawerToggleHandler_ = function() {
    "use strict";
    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN)
}, MaterialLayout.prototype.headerTransitionEndHandler = function() {
    "use strict";
    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)
}, MaterialLayout.prototype.headerClickHandler = function() {
    "use strict";
    this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
}, MaterialLayout.prototype.resetTabState_ = function(e) {
    "use strict";
    for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
}, MaterialLayout.prototype.resetPanelState_ = function(e) {
    "use strict";
    for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
}, MaterialLayout.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_);
        for (var t = this.element_.childNodes, s = 0; s < t.length; s++) {
            var i = t[s];
            i.classList && i.classList.contains(this.CssClasses_.HEADER) && (this.header_ = i), i.classList && i.classList.contains(this.CssClasses_.DRAWER) && (this.drawer_ = i), i.classList && i.classList.contains(this.CssClasses_.CONTENT) && (this.content_ = i)
        }
        this.header_ && (this.tabBar_ = this.header_.querySelector("." + this.CssClasses_.TAB_BAR));
        var n = this.Mode_.STANDARD;
        if (this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH), this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)), this.screenSizeHandler_(), this.header_ && (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED) ? n = this.Mode_.SEAMED : this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL) ? (n = this.Mode_.WATERFALL, this.header_.addEventListener("transitionend", this.headerTransitionEndHandler.bind(this)), this.header_.addEventListener("click", this.headerClickHandler.bind(this))) : this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL) && (n = this.Mode_.SCROLL, e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)), n === this.Mode_.STANDARD ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)) : n === this.Mode_.SEAMED || n === this.Mode_.SCROLL ? (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)) : n === this.Mode_.WATERFALL && (this.content_.addEventListener("scroll", this.contentScrollHandler_.bind(this)), this.contentScrollHandler_())), this.drawer_) {
            var a = document.createElement("div");
            a.classList.add(this.CssClasses_.DRAWER_BTN), this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN) ? a.classList.add(this.CssClasses_.ON_LARGE_SCREEN) : this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN) && a.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
            var l = document.createElement("i");
            l.classList.add(this.CssClasses_.ICON), l.textContent = this.Constant_.MENU_ICON, a.appendChild(l), a.addEventListener("click", this.drawerToggleHandler_.bind(this)), this.element_.classList.add(this.CssClasses_.HAS_DRAWER), this.element_.classList.contains(this.CssClasses_.FIXED_HEADER) ? this.header_.insertBefore(a, this.header_.firstChild) : this.element_.insertBefore(a, this.content_);
            var r = document.createElement("div");
            r.classList.add(this.CssClasses_.OBFUSCATOR), this.element_.appendChild(r), r.addEventListener("click", this.drawerToggleHandler_.bind(this))
        }
        if (this.header_ && this.tabBar_) {
            this.element_.classList.add(this.CssClasses_.HAS_TABS);
            var o = document.createElement("div");
            o.classList.add(this.CssClasses_.TAB_CONTAINER), this.header_.insertBefore(o, this.tabBar_), this.header_.removeChild(this.tabBar_);
            var d = document.createElement("div");
            d.classList.add(this.CssClasses_.TAB_BAR_BUTTON), d.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
            var _ = document.createElement("i");
            _.classList.add(this.CssClasses_.ICON), _.textContent = this.Constant_.CHEVRON_LEFT, d.appendChild(_), d.addEventListener("click", function() {
                this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS
            }.bind(this));
            var h = document.createElement("div");
            h.classList.add(this.CssClasses_.TAB_BAR_BUTTON), h.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
            var c = document.createElement("i");
            c.classList.add(this.CssClasses_.ICON), c.textContent = this.Constant_.CHEVRON_RIGHT, h.appendChild(c), h.addEventListener("click", function() {
                this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS
            }.bind(this)), o.appendChild(d), o.appendChild(this.tabBar_), o.appendChild(h);
            var u = function() {
                this.tabBar_.scrollLeft > 0 ? d.classList.add(this.CssClasses_.IS_ACTIVE) : d.classList.remove(this.CssClasses_.IS_ACTIVE), this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth ? h.classList.add(this.CssClasses_.IS_ACTIVE) : h.classList.remove(this.CssClasses_.IS_ACTIVE)
            }.bind(this);
            this.tabBar_.addEventListener("scroll", u), u(), this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT) && this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            for (var p = this.tabBar_.querySelectorAll("." + this.CssClasses_.TAB), C = this.content_.querySelectorAll("." + this.CssClasses_.PANEL), E = 0; E < p.length; E++) new MaterialLayoutTab(p[E], p, C, this)
        }
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialLayout,
    classAsString: "MaterialLayout",
    cssClass: "mdl-js-layout"
}), MaterialDataTable.prototype.Constant_ = {}, MaterialDataTable.prototype.CssClasses_ = {
    DATA_TABLE: "mdl-data-table",
    SELECTABLE: "mdl-data-table--selectable",
    IS_SELECTED: "is-selected",
    IS_UPGRADED: "is-upgraded"
}, MaterialDataTable.prototype.selectRow_ = function(e, t, s) {
    "use strict";
    return t ? function() {
        e.checked ? t.classList.add(this.CssClasses_.IS_SELECTED) : t.classList.remove(this.CssClasses_.IS_SELECTED)
    }.bind(this) : s ? function() {
        var t, i;
        if (e.checked)
            for (t = 0; t < s.length; t++) i = s[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.check(), s[t].classList.add(this.CssClasses_.IS_SELECTED);
        else
            for (t = 0; t < s.length; t++) i = s[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.uncheck(), s[t].classList.remove(this.CssClasses_.IS_SELECTED)
    }.bind(this) : void 0
}, MaterialDataTable.prototype.createCheckbox_ = function(e, t) {
    "use strict";
    var s = document.createElement("label");
    s.classList.add("mdl-checkbox"), s.classList.add("mdl-js-checkbox"), s.classList.add("mdl-js-ripple-effect"), s.classList.add("mdl-data-table__select");
    var i = document.createElement("input");
    return i.type = "checkbox", i.classList.add("mdl-checkbox__input"), e ? i.addEventListener("change", this.selectRow_(i, e)) : t && i.addEventListener("change", this.selectRow_(i, null, t)), s.appendChild(i), componentHandler.upgradeElement(s, "MaterialCheckbox"), s
}, MaterialDataTable.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var e = this.element_.querySelector("th"),
            t = this.element_.querySelector("tbody").querySelectorAll("tr");
        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
            var s = document.createElement("th"),
                i = this.createCheckbox_(null, t);
            s.appendChild(i), e.parentElement.insertBefore(s, e);
            for (var n = 0; n < t.length; n++) {
                var a = t[n].querySelector("td");
                if (a) {
                    var l = document.createElement("td"),
                        r = this.createCheckbox_(t[n]);
                    l.appendChild(r), t[n].insertBefore(l, a)
                }
            }
        }
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialDataTable,
    classAsString: "MaterialDataTable",
    cssClass: "mdl-js-data-table"
}), MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: "scale(0.0001, 0.0001)",
    INITIAL_SIZE: "1px",
    INITIAL_OPACITY: "0.4",
    FINAL_OPACITY: "0",
    FINAL_SCALE: ""
}, MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: "mdl-ripple--center",
    RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
    RIPPLE: "mdl-ripple",
    IS_ANIMATING: "is-animating",
    IS_VISIBLE: "is-visible"
}, MaterialRipple.prototype.downHandler_ = function(e) {
    "use strict";
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
        var t = this.element_.getBoundingClientRect();
        this.boundHeight = t.height, this.boundWidth = t.width, this.rippleSize_ = 2 * Math.sqrt(t.width * t.width + t.height * t.height) + 2, this.rippleElement_.style.width = this.rippleSize_ + "px", this.rippleElement_.style.height = this.rippleSize_ + "px"
    }
    if (this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE), "mousedown" === e.type && this.ignoringMouseDown_) this.ignoringMouseDown_ = !1;
    else {
        "touchstart" === e.type && (this.ignoringMouseDown_ = !0);
        var s = this.getFrameCount();
        if (s > 0) return;
        this.setFrameCount(1);
        var i, n, a = e.currentTarget.getBoundingClientRect();
        if (0 === e.clientX && 0 === e.clientY) i = Math.round(a.width / 2), n = Math.round(a.height / 2);
        else {
            var l = e.clientX ? e.clientX : e.touches[0].clientX,
                r = e.clientY ? e.clientY : e.touches[0].clientY;
            i = Math.round(l - a.left), n = Math.round(r - a.top)
        }
        this.setRippleXY(i, n), this.setRippleStyles(!0), window.requestAnimationFrame(this.animFrameHandler.bind(this))
    }
}, MaterialRipple.prototype.upHandler_ = function(e) {
    "use strict";
    e && 2 !== e.detail && this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)
}, MaterialRipple.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var e = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS) || (this.rippleElement_ = this.element_.querySelector("." + this.CssClasses_.RIPPLE), this.frameCount_ = 0, this.rippleSize_ = 0, this.x_ = 0, this.y_ = 0, this.ignoringMouseDown_ = !1, this.boundDownHandler = this.downHandler_.bind(this), this.element_.addEventListener("mousedown", this.boundDownHandler), this.element_.addEventListener("touchstart", this.boundDownHandler), this.boundUpHandler = this.upHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundUpHandler), this.element_.addEventListener("mouseleave", this.boundUpHandler), this.element_.addEventListener("touchend", this.boundUpHandler), this.element_.addEventListener("blur", this.boundUpHandler), this.getFrameCount = function() {
            return this.frameCount_
        }, this.setFrameCount = function(e) {
            this.frameCount_ = e
        }, this.getRippleElement = function() {
            return this.rippleElement_
        }, this.setRippleXY = function(e, t) {
            this.x_ = e, this.y_ = t
        }, this.setRippleStyles = function(t) {
            if (null !== this.rippleElement_) {
                var s, i, n, a = "translate(" + this.x_ + "px, " + this.y_ + "px)";
                t ? (i = this.Constant_.INITIAL_SCALE, n = this.Constant_.INITIAL_SIZE) : (i = this.Constant_.FINAL_SCALE, n = this.rippleSize_ + "px", e && (a = "translate(" + this.boundWidth / 2 + "px, " + this.boundHeight / 2 + "px)")), s = "translate(-50%, -50%) " + a + i, this.rippleElement_.style.webkitTransform = s, this.rippleElement_.style.msTransform = s, this.rippleElement_.style.transform = s, t ? this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING) : this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)
            }
        }, this.animFrameHandler = function() {
            this.frameCount_-- > 0 ? window.requestAnimationFrame(this.animFrameHandler.bind(this)) : this.setRippleStyles(!1)
        })
    }
}, MaterialRipple.prototype.mdlDowngrade_ = function() {
    "use strict";
    this.element_.removeEventListener("mousedown", this.boundDownHandler), this.element_.removeEventListener("touchstart", this.boundDownHandler), this.element_.removeEventListener("mouseup", this.boundUpHandler), this.element_.removeEventListener("mouseleave", this.boundUpHandler), this.element_.removeEventListener("touchend", this.boundUpHandler), this.element_.removeEventListener("blur", this.boundUpHandler)
}, componentHandler.register({
    constructor: MaterialRipple,
    classAsString: "MaterialRipple",
    cssClass: "mdl-js-ripple-effect",
    widget: !1
});