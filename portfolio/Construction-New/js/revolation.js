/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.5 (02.12.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/
function revslider_showDoubleJqueryError(a) {
    var b = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    b += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", b += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", b += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", b = "<span style='font-size:16px;color:#BC0C06;'>" + b + "</span>", jQuery(a).show().html(b)
}! function(a, b) {
    function c() {
        var a = !1;
        return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (a = !0) : a = !1, a
    }

    function d(d, e) {
        if (d == b) return !1;
        if (d.data("aimg") != b && ("enabled" == d.data("aie8") && i(8) || "enabled" == d.data("amobile") && W()) && d.html('<img class="tp-slider-alternative-image" src="' + d.data("aimg") + '">'), ("preview1" == e.navigationStyle || "preview3" == e.navigationStyle || "preview4" == e.navigationStyle) && (e.soloArrowLeftHalign = "left", e.soloArrowLeftValign = "center", e.soloArrowLeftHOffset = 0, e.soloArrowLeftVOffset = 0, e.soloArrowRightHalign = "right", e.soloArrowRightValign = "center", e.soloArrowRightHOffset = 0, e.soloArrowRightVOffset = 0, e.navigationArrows = "solo"), "on" == e.simplifyAll && (i(8) || c()) && (d.find(".tp-caption").each(function() {
                var b = a(this);
                b.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"), b.data("splitin", ""), b.data("speed", 400)
            }), d.find(">ul>li").each(function() {
                var b = a(this);
                b.data("transition", "fade"), b.data("masterspeed", 500), b.data("slotamount", 1);
                var c = b.find(">img").first();
                c.data("kenburns", "off")
            })), e.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != e.fullWidth && "on" != e.fullScreen && (e.autoHeight = "off"), "on" == e.fullScreen && (e.autoHeight = "on"), "on" != e.fullWidth && "on" != e.fullScreen && (forceFulWidth = "off"), "on" == e.fullWidth && "off" == e.autoHeight && d.css({
                maxHeight: e.startheight + "px"
            }), W() && "on" == e.hideThumbsOnMobile && "thumb" == e.navigationType && (e.navigationType = "none"), W() && "on" == e.hideBulletsOnMobile && "bullet" == e.navigationType && (e.navigationType = "none"), W() && "on" == e.hideBulletsOnMobile && "both" == e.navigationType && (e.navigationType = "none"), W() && "on" == e.hideArrowsOnMobile && (e.navigationArrows = "none"), "on" == e.forceFullWidth && 0 == d.closest(".forcefullwidth_wrapper_tp_banner").length) {
            var j = d.parent().offset().left,
                p = d.parent().css("marginBottom"),
                q = d.parent().css("marginTop");
            p == b && (p = 0), q == b && (q = 0), d.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + q + ";margin-bottom:" + p + '" class="forcefullwidth_wrapper_tp_banner"></div>'), d.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + d.height() + 'px"></div>'), d.css({
                backgroundColor: d.parent().css("backgroundColor"),
                backgroundImage: d.parent().css("backgroundImage")
            }), d.parent().css({
                left: 0 - j + "px",
                position: "absolute",
                width: a(window).width()
            }), e.width = a(window).width()
        }
        try {
            e.hideThumbsUnderResolution > a(window).width() && 0 != e.hideThumbsUnderResolution ? d.parent().find(".tp-bullets.tp-thumbs").css({
                display: "none"
            }) : d.parent().find(".tp-bullets.tp-thumbs").css({
                display: "block"
            })
        } catch (r) {}
        if (!d.hasClass("revslider-initialised")) {
            d.addClass("revslider-initialised"), d.attr("id") == b && d.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), e.firefox13 = !1, e.ie = !a.support.opacity, e.ie9 = 9 == document.documentMode, e.origcd = e.delay;
            var t = a.fn.jquery.split("."),
                u = parseFloat(t[0]),
                v = parseFloat(t[1]);
            parseFloat(t[2] || "0"), 1 == u && 7 > v && d.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + t + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), u > 1 && (e.ie = !1), a.support.transition || (a.fn.transition = a.fn.animate), d.find(".caption").each(function() {
                a(this).addClass("tp-caption")
            }), W() && d.find(".tp-caption").each(function() {
                var b = a(this);
                (1 == b.data("autoplayonlyfirsttime") || "true" == b.data("autoplayonlyfirsttime")) && b.data("autoplayonlyfirsttime", "false"), (1 == b.data("autoplay") || "true" == b.data("autoplay")) && b.data("autoplay", !1)
            });
            var x = 0,
                y = 0,
                B = "http";
            if ("https:" === location.protocol && (B = "https"), d.find(".tp-caption").each(function() {
                    try {
                        if ((a(this).data("ytid") != b || a(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == x) {
                            x = 1;
                            var d = document.createElement("script"),
                                e = "https";
                            d.src = e + "://www.youtube.com/iframe_api";
                            var f = document.getElementsByTagName("script")[0],
                                g = !0;
                            a("head").find("*").each(function() {
                                a(this).attr("src") == e + "://www.youtube.com/iframe_api" && (g = !1)
                            }), g && f.parentNode.insertBefore(d, f)
                        }
                    } catch (h) {}
                    try {
                        if ((a(this).data("vimeoid") != b || a(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == y) {
                            y = 1;
                            var i = document.createElement("script");
                            i.src = B + "://a.vimeocdn.com/js/froogaloop2.min.js";
                            var f = document.getElementsByTagName("script")[0],
                                g = !0;
                            a("head").find("*").each(function() {
                                a(this).attr("src") == B + "://a.vimeocdn.com/js/froogaloop2.min.js" && (g = !1)
                            }), g && f.parentNode.insertBefore(i, f)
                        }
                    } catch (h) {}
                    try {
                        a(this).data("videomp4") != b || a(this).data("videowebm") != b
                    } catch (h) {}
                }), d.find(".tp-caption video").each(function() {
                    a(this).removeClass("video-js").removeClass("vjs-default-skin"), a(this).attr("preload", ""), a(this).css({
                        display: "none"
                    })
                }), d.find(">ul:first-child >li").each(function() {
                    var b = a(this);
                    b.data("origindex", b.index())
                }), "on" == e.shuffle) {
                var C = new Object,
                    D = d.find(">ul:first-child >li:first-child");
                C.fstransition = D.data("fstransition"), C.fsmasterspeed = D.data("fsmasterspeed"), C.fsslotamount = D.data("fsslotamount");
                for (var E = 0; E < d.find(">ul:first-child >li").length; E++) {
                    var F = Math.round(Math.random() * d.find(">ul:first-child >li").length);
                    d.find(">ul:first-child >li:eq(" + F + ")").prependTo(d.find(">ul:first-child"))
                }
                var G = d.find(">ul:first-child >li:first-child");
                G.data("fstransition", C.fstransition), G.data("fsmasterspeed", C.fsmasterspeed), G.data("fsslotamount", C.fsslotamount)
            }
            e.slots = 4, e.act = -1, e.next = 0, e.startWithSlide != b && (e.next = e.startWithSlide);
            var H = g("#")[0];
            if (H.length < 9 && H.split("slide").length > 1) {
                var I = parseInt(H.split("slide")[1], 0);
                1 > I && (I = 1), I > d.find(">ul:first >li").length && (I = d.find(">ul:first >li").length), e.next = I - 1
            }
            e.firststart = 1, e.navigationHOffset == b && (e.navOffsetHorizontal = 0), e.navigationVOffset == b && (e.navOffsetVertical = 0), d.append('<div class="tp-loader ' + e.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + "</div>"), 0 == d.find(".tp-bannertimer").length && d.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var J = d.find(".tp-bannertimer");
            if (J.length > 0 && J.css({
                    width: "0%"
                }), d.addClass("tp-simpleresponsive"), e.container = d, e.slideamount = d.find(">ul:first >li").length, 0 == d.height() && d.height(e.startheight), (e.startwidth == b || 0 == e.startwidth) && (e.startwidth = d.width()), (e.startheight == b || 0 == e.startheight) && (e.startheight = d.height()), e.width = d.width(), e.height = d.height(), e.bw = e.startwidth / d.width(), e.bh = e.startheight / d.height(), e.width != e.startwidth && (e.height = Math.round(e.startheight * (e.width / e.startwidth)), d.height(e.height)), 0 != e.shadow) {
                d.parent().append('<div class="tp-bannershadow tp-shadow' + e.shadow + '"></div>');
                var j = 0;
                "on" == e.forceFullWidth && (j = 0 - e.container.parent().offset().left), d.parent().find(".tp-bannershadow").css({
                    width: e.width,
                    left: j
                })
            }
            d.find("ul").css({
                display: "none"
            }), d.find("ul").css({
                display: "block"
            }), s(d, e), "off" != e.parallax && ab(d, e), e.slideamount > 1 && k(d, e), e.slideamount > 1 && "thumb" == e.navigationType && cb(d, e), e.slideamount > 1 && l(d, e), "on" == e.keyboardNavigation && m(d, e), n(d, e), e.hideThumbs > 0 && o(d, e), setTimeout(function() {
                z(d, e)
            }, e.startDelay), e.startDelay = 0, e.slideamount > 1 && V(d, e), setTimeout(function() {
                d.trigger("revolution.slide.onloaded")
            }, 500), a("body").data("rs-fullScreenMode", !1), a(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                a("body").data("rs-fullScreenMode", !a("body").data("rs-fullScreenMode")), a("body").data("rs-fullScreenMode") && setTimeout(function() {
                    a(window).trigger("resize")
                }, 200)
            });
            var L = "resize.revslider-" + d.attr("id");
            a(window).on(L, function() {
                if (d == b) return !1;
                if (0 != a("body").find(d) && "on" == e.forceFullWidth) {
                    var c = e.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                    e.container.parent().css({
                        left: 0 - c + "px",
                        width: a(window).width()
                    })
                }(d.outerWidth(!0) != e.width || d.is(":hidden")) && h(d, e)
            });
            try {
                0 != e.hideThumbsUnderResoluition && "thumb" == e.navigationType && (e.hideThumbsUnderResoluition > a(window).width() ? a(".tp-bullets").css({
                    display: "none"
                }) : a(".tp-bullets").css({
                    display: "block"
                }))
            } catch (r) {}
            d.find(".tp-scrollbelowslider").on("click", function() {
                var b = 0;
                try {
                    b = a("body").find(e.fullScreenOffsetContainer).height()
                } catch (c) {}
                try {
                    b -= parseInt(a(this).data("scrolloffset"), 0)
                } catch (c) {}
                a("body,html").animate({
                    scrollTop: d.offset().top + d.find(">ul >li").height() - b + "px"
                }, {
                    duration: 400
                })
            });
            var M = d.parent();
            a(window).width() < e.hideSliderAtLimit && (d.trigger("stoptimer"), "none" != M.css("display") && M.data("olddisplay", M.css("display")), M.css({
                display: "none"
            })), f(d, e)
        }
    }
    a.fn.extend({
            revolution: function(c) {
                var e = {
                    delay: 9e3,
                    startheight: 500,
                    startwidth: 960,
                    fullScreenAlignForce: "off",
                    autoHeight: "off",
                    hideTimerBar: "off",
                    hideThumbs: 200,
                    hideNavDelayOnMobile: 1500,
                    thumbWidth: 100,
                    thumbHeight: 50,
                    thumbAmount: 3,
                    navigationType: "bullet",
                    navigationArrows: "solo",
                    navigationInGrid: "off",
                    hideThumbsOnMobile: "off",
                    hideBulletsOnMobile: "off",
                    hideArrowsOnMobile: "off",
                    hideThumbsUnderResoluition: 0,
                    navigationStyle: "round",
                    navigationHAlign: "center",
                    navigationVAlign: "bottom",
                    navigationHOffset: 0,
                    navigationVOffset: 20,
                    soloArrowLeftHalign: "left",
                    soloArrowLeftValign: "center",
                    soloArrowLeftHOffset: 20,
                    soloArrowLeftVOffset: 0,
                    soloArrowRightHalign: "right",
                    soloArrowRightValign: "center",
                    soloArrowRightHOffset: 20,
                    soloArrowRightVOffset: 0,
                    keyboardNavigation: "on",
                    touchenabled: "on",
                    onHoverStop: "on",
                    stopAtSlide: -1,
                    stopAfterLoops: -1,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLimit: 0,
                    hideSliderAtLimit: 0,
                    shadow: 0,
                    fullWidth: "off",
                    fullScreen: "off",
                    minFullScreenHeight: 0,
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    dottedOverlay: "none",
                    forceFullWidth: "off",
                    spinner: "spinner0",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: !1,
                    isJoomla: !1,
                    parallax: "off",
                    parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    parallaxBgFreeze: "off",
                    parallaxOpacity: "on",
                    parallaxDisableOnMobile: "off",
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    minHeight: 0,
                    nextSlideOnWindowFocus: "off",
                    startDelay: 0
                };
                return c = a.extend({}, e, c), this.each(function() {
                    if (1 == window.tplogs) try {
                        console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + a(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(c), console.groupEnd(), console.groupCollapsed("Tween Engine:")
                    } catch (e) {}
                    if (punchgs.TweenLite == b) {
                        if (1 == window.tplogs) try {
                            console.error("GreenSock Engine Does not Exist!")
                        } catch (e) {}
                        return !1
                    }
                    if (punchgs.force3D = !0, 1 == window.tplogs) try {
                        console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                    } catch (e) {}
                    if ("on" == c.simplifyAll || (punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true"), 1 == window.tplogs) try {
                        console.groupEnd(), console.groupEnd()
                    } catch (e) {}
                    d(a(this), c)
                })
            },
            revscroll: function(c) {
                return this.each(function() {
                    var d = a(this);
                    d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0 && a("body,html").animate({
                        scrollTop: d.offset().top + d.find(">ul >li").height() - c + "px"
                    }, {
                        duration: 400
                    })
                })
            },
            revredraw: function() {
                return this.each(function() {
                    var c = a(this);
                    if (c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0) {
                        var d = c.parent().find(".tp-bannertimer"),
                            e = d.data("opt");
                        h(c, e)
                    }
                })
            },
            revkill: function() {
                var d = this,
                    e = a(this);
                if (e != b && e.length > 0 && a("body").find("#" + e.attr("id")).length > 0) {
                    e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause");
                    var f = e.parent().find(".tp-bannertimer"),
                        g = f.data("opt");
                    g.bannertimeronpause = !0, e.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(e.find("*"), !1), punchgs.TweenLite.killTweensOf(e, !1), e.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                    var h = "resize.revslider-" + e.attr("id");
                    a(window).off(h), e.find("*").each(function() {
                        var c = a(this);
                        c.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), c.off("on, hover, mouseenter,mouseleave,mouseover, resize"), c.data("mySplitText", null), c.data("ctl", null), c.data("tween") != b && c.data("tween").kill(), c.data("kenburn") != b && c.data("kenburn").kill(), c.remove(), c.empty(), c = null
                    }), punchgs.TweenLite.killTweensOf(e.find("*"), !1), punchgs.TweenLite.killTweensOf(e, !1), f.remove();
                    try {
                        e.closest(".forcefullwidth_wrapper_tp_banner").remove()
                    } catch (i) {}
                    try {
                        e.closest(".rev_slider_wrapper").remove()
                    } catch (i) {}
                    try {
                        e.remove()
                    } catch (i) {}
                    return e.empty(), e.html(), e = null, g = null, delete d.container, delete d.opt, !0
                }
                return !1
            },
            revpause: function() {
                return this.each(function() {
                    var c = a(this);
                    if (c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0) {
                        c.data("conthover", 1), c.data("conthover-changed", 1), c.trigger("revolution.slide.onpause");
                        var d = c.parent().find(".tp-bannertimer"),
                            e = d.data("opt");
                        e.bannertimeronpause = !0, c.trigger("stoptimer")
                    }
                })
            },
            revresume: function() {
                return this.each(function() {
                    var c = a(this);
                    if (c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0) {
                        c.data("conthover", 0), c.data("conthover-changed", 1), c.trigger("revolution.slide.onresume");
                        var d = c.parent().find(".tp-bannertimer"),
                            e = d.data("opt");
                        e.bannertimeronpause = !1, c.trigger("starttimer")
                    }
                })
            },
            revnext: function() {
                return this.each(function() {
                    var c = a(this);
                    c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0 && c.parent().find(".tp-rightarrow").click()
                })
            },
            revprev: function() {
                return this.each(function() {
                    var c = a(this);
                    c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0 && c.parent().find(".tp-leftarrow").click()
                })
            },
            revmaxslide: function() {
                return a(this).find(">ul:first-child >li").length
            },
            revcurrentslide: function() {
                var d = a(this);
                if (d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0) {
                    var e = d.parent().find(".tp-bannertimer"),
                        f = e.data("opt");
                    return f.act
                }
            },
            revlastslide: function() {
                var d = a(this);
                if (d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0) {
                    var e = d.parent().find(".tp-bannertimer"),
                        f = e.data("opt");
                    return f.lastslide
                }
            },
            revshowslide: function(c) {
                return this.each(function() {
                    var d = a(this);
                    d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0 && (d.data("showus", c), d.parent().find(".tp-rightarrow").click())
                })
            }
        }),
        function() {
            var a, b, c = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (a in c)
                if (a in document) {
                    b = c[a];
                    break
                }
            return function(c) {
                return c && document.addEventListener(b, c), !document[a]
            }
        }();
    var f = function(c, d) {
            var e = document.documentMode === b,
                f = window.chrome;
            e && !f ? a(window).on("focusin", function() {
                return c == b ? !1 : (setTimeout(function() {
                    "on" == d.nextSlideOnWindowFocus && c.revnext(), c.revredraw()
                }, 300), void 0)
            }).on("focusout", function() {}) : window.addEventListener ? (window.addEventListener("focus", function() {
                return c == b ? !1 : (setTimeout(function() {
                    "on" == d.nextSlideOnWindowFocus && c.revnext(), c.revredraw()
                }, 300), void 0)
            }, !1), window.addEventListener("blur", function() {}, !1)) : (window.attachEvent("focus", function() {
                setTimeout(function() {
                    return c == b ? !1 : ("on" == d.nextSlideOnWindowFocus && c.revnext(), c.revredraw(), void 0)
                }, 300)
            }), window.attachEvent("blur", function() {}))
        },
        g = function(a) {
            for (var c, b = [], d = window.location.href.slice(window.location.href.indexOf(a) + 1).split("_"), e = 0; e < d.length; e++) d[e] = d[e].replace("%3D", "="), c = d[e].split("="), b.push(c[0]), b[c[0]] = c[1];
            return b
        },
        h = function(c, d) {
            if (c == b) return !1;
            try {
                0 != d.hideThumbsUnderResoluition && "thumb" == d.navigationType && (d.hideThumbsUnderResoluition > a(window).width() ? a(".tp-bullets").css({
                    display: "none"
                }) : a(".tp-bullets").css({
                    display: "block"
                }))
            } catch (e) {}
            c.find(".defaultimg").each(function() {
                r(a(this), d)
            });
            var f = c.parent();
            a(window).width() < d.hideSliderAtLimit ? (c.trigger("stoptimer"), "none" != f.css("display") && f.data("olddisplay", f.css("display")), f.css({
                display: "none"
            })) : c.is(":hidden") && (f.data("olddisplay") != b && "undefined" != f.data("olddisplay") && "none" != f.data("olddisplay") ? f.css({
                display: f.data("olddisplay")
            }) : f.css({
                display: "block"
            }), c.trigger("restarttimer"), setTimeout(function() {
                h(c, d)
            }, 150));
            var g = 0;
            "on" == d.forceFullWidth && (g = 0 - d.container.parent().offset().left);
            try {
                c.parent().find(".tp-bannershadow").css({
                    width: d.width,
                    left: g
                })
            } catch (e) {}
            var i = c.find(">ul >li:eq(" + d.act + ") .slotholder"),
                j = c.find(">ul >li:eq(" + d.next + ") .slotholder");
            v(c, d, c), punchgs.TweenLite.set(j.find(".defaultimg"), {
                opacity: 0
            }), i.find(".defaultimg").css({
                opacity: 1
            }), j.find(".defaultimg").each(function() {
                var e = a(this);
                "on" == d.panZoomDisableOnMobile || e.data("kenburn") != b && (e.data("kenburn").restart(), Y(c, d, !0))
            });
            var k = c.find(">ul >li:eq(" + d.next + ")"),
                l = c.parent().find(".tparrows");
            l.hasClass("preview2") && l.css({
                width: parseInt(l.css("minWidth"), 0)
            }), L(k, d, !0), p(c, d)
        },
        i = function(b, c) {
            var d = a('<div style="display:none;"/>').appendTo(a("body"));
            d.html("<!--[if " + (c || "") + " IE " + (b || "") + "]><a>&nbsp;</a><![endif]-->");
            var e = d.find("a").length;
            return d.remove(), e
        },
        j = function(a, b) {
            a.next == b.find(">ul >li").length - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), z(b, a)
        },
        k = function(b, c) {
            var d = "hidebullets";
            0 == c.hideThumbs && (d = ""), ("bullet" == c.navigationType || "both" == c.navigationType) && b.parent().append('<div class="tp-bullets ' + d + " simplebullets " + c.navigationStyle + '"></div>');
            var e = b.parent().find(".tp-bullets");
            b.find(">ul:first >li").each(function(a) {
                b.find(">ul:first >li:eq(" + a + ") img:first").attr("src"), e.append('<div class="bullet"></div>'), e.find(".bullet:first")
            }), e.find(".bullet").each(function(d) {
                var e = a(this);
                d == c.slideamount - 1 && e.addClass("last"), 0 == d && e.addClass("first"), e.click(function() {
                    var a = !1,
                        d = e.index();
                    ("withbullet" == c.navigationArrows || "nexttobullets" == c.navigationArrows) && (d = e.index() - 1), d == c.act && (a = !0), 0 != c.transition || a || (c.next = d, j(c, b))
                })
            }), e.append('<div class="tpclear"></div>'), p(b, c)
        },
        l = function(a, c) {
            function h(b) {
                a.parent().append('<div style="' + e + '" class="tp-' + b + "arrow " + f + " tparrows " + g + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
            }
            var e = (a.find(".tp-bullets"), ""),
                f = "hidearrows",
                g = c.navigationStyle;
            0 == c.hideThumbs && (f = ""), "none" == c.navigationArrows && (e = "visibility:hidden;display:none"), c.soloArrowStyle = "default " + c.navigationStyle, "none" != c.navigationArrows && "nexttobullets" != c.navigationArrows && (g = c.soloArrowStyle), h("left"), h("right"), a.parent().find(".tp-rightarrow").click(function() {
                0 == c.transition && (c.next = a.data("showus") != b && -1 != a.data("showus") ? a.data("showus") - 1 : c.next + 1, a.data("showus", -1), c.next >= c.slideamount && (c.next = 0), c.next < 0 && (c.next = 0), c.act != c.next && j(c, a))
            }), a.parent().find(".tp-leftarrow").click(function() {
                0 == c.transition && (c.next = c.next - 1, c.leftarrowpressed = 1, c.next < 0 && (c.next = c.slideamount - 1), j(c, a))
            }), p(a, c)
        },
        m = function(c, d) {
            a(document).keydown(function(a) {
                0 == d.transition && 39 == a.keyCode && (d.next = c.data("showus") != b && -1 != c.data("showus") ? c.data("showus") - 1 : d.next + 1, c.data("showus", -1), d.next >= d.slideamount && (d.next = 0), d.next < 0 && (d.next = 0), d.act != d.next && j(d, c)), 0 == d.transition && 37 == a.keyCode && (d.next = d.next - 1, d.leftarrowpressed = 1, d.next < 0 && (d.next = d.slideamount - 1), j(d, c))
            }), p(c, d)
        },
        n = function(b, c) {
            var d = "vertical";
            "on" == c.touchenabled && (1 == c.drag_block_vertical && (d = "none"), b.swipe({
                allowPageScroll: d,
                fingers: c.swipe_min_touches,
                treshold: c.swipe_treshold,
                swipe: function(e, f) {
                    switch (f) {
                        case "left":
                            0 == c.transition && (c.next = c.next + 1, c.next == c.slideamount && (c.next = 0), j(c, b));
                            break;
                        case "right":
                            0 == c.transition && (c.next = c.next - 1, c.leftarrowpressed = 1, c.next < 0 && (c.next = c.slideamount - 1), j(c, b));
                            break;
                        case "up":
                            "none" == d && a("html, body").animate({
                                scrollTop: b.offset().top + b.height() + "px"
                            });
                            break;
                        case "down":
                            "none" == d && a("html, body").animate({
                                scrollTop: b.offset().top - a(window).height() + "px"
                            })
                    }
                }
            }))
        },
        o = function(a, b) {
            var c = a.parent().find(".tp-bullets"),
                d = a.parent().find(".tparrows");
            if (null == c) {
                a.append('<div class=".tp-bullets"></div>');
                var c = a.parent().find(".tp-bullets")
            }
            if (null == d) {
                a.append('<div class=".tparrows"></div>');
                var d = a.parent().find(".tparrows")
            }
            if (a.data("hideThumbs", b.hideThumbs), c.addClass("hidebullets"), d.addClass("hidearrows"), W()) try {
                a.hammer().on("touch", function() {
                    a.addClass("hovered"), "on" == b.onHoverStop && a.trigger("stoptimer"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
                }), a.hammer().on("release", function() {
                    a.removeClass("hovered"), a.trigger("starttimer"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
                        c.addClass("hidebullets"), d.addClass("hidearrows"), a.trigger("starttimer")
                    }, b.hideNavDelayOnMobile))
                })
            } catch (e) {} else c.hover(function() {
                b.overnav = !0, "on" == b.onHoverStop && a.trigger("stoptimer"), c.addClass("hovered"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }, function() {
                b.overnav = !1, a.trigger("starttimer"), c.removeClass("hovered"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
                    c.addClass("hidebullets"), d.addClass("hidearrows")
                }, b.hideThumbs))
            }), d.hover(function() {
                b.overnav = !0, "on" == b.onHoverStop && a.trigger("stoptimer"), c.addClass("hovered"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }, function() {
                b.overnav = !1, a.trigger("starttimer"), c.removeClass("hovered")
            }), a.on("mouseenter", function() {
                a.addClass("hovered"), "on" == b.onHoverStop && a.trigger("stoptimer"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }), a.on("mouseleave", function() {
                a.removeClass("hovered"), a.trigger("starttimer"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
                    c.addClass("hidebullets"), d.addClass("hidearrows")
                }, b.hideThumbs))
            })
        },
        p = function(b, c) {
            var d = b.parent(),
                e = d.find(".tp-bullets");
            if ("thumb" == c.navigationType) {
                e.find(".thumb").each(function() {
                    var d = a(this);
                    d.css({
                        width: c.thumbWidth * c.bw + "px",
                        height: c.thumbHeight * c.bh + "px"
                    })
                });
                var f = e.find(".tp-mask");
                f.width(c.thumbWidth * c.thumbAmount * c.bw), f.height(c.thumbHeight * c.bh), f.parent().width(c.thumbWidth * c.thumbAmount * c.bw), f.parent().height(c.thumbHeight * c.bh)
            }
            var g = d.find(".tp-leftarrow"),
                h = d.find(".tp-rightarrow");
            "thumb" == c.navigationType && "nexttobullets" == c.navigationArrows && (c.navigationArrows = "solo"), "nexttobullets" == c.navigationArrows && (g.prependTo(e).css({
                "float": "left"
            }), h.insertBefore(e.find(".tpclear")).css({
                "float": "left"
            }));
            var i = 0;
            "on" == c.forceFullWidth && (i = 0 - c.container.parent().offset().left);
            var j = 0,
                k = 0;
            if ("on" == c.navigationInGrid && (j = b.width() > c.startwidth ? (b.width() - c.startwidth) / 2 : 0, k = b.height() > c.startheight ? (b.height() - c.startheight) / 2 : 0), "none" != c.navigationArrows && "nexttobullets" != c.navigationArrows) {
                var l = c.soloArrowLeftValign,
                    m = c.soloArrowLeftHalign,
                    n = c.soloArrowRightValign,
                    o = c.soloArrowRightHalign,
                    p = c.soloArrowLeftVOffset,
                    q = c.soloArrowLeftHOffset,
                    r = c.soloArrowRightVOffset,
                    s = c.soloArrowRightHOffset;
                g.css({
                    position: "absolute"
                }), h.css({
                    position: "absolute"
                }), "center" == l ? g.css({
                    top: "50%",
                    marginTop: p - Math.round(g.innerHeight() / 2) + "px"
                }) : "bottom" == l ? g.css({
                    top: "auto",
                    bottom: 0 + p + "px"
                }) : "top" == l && g.css({
                    bottom: "auto",
                    top: 0 + p + "px"
                }), "center" == m ? g.css({
                    left: "50%",
                    marginLeft: i + q - Math.round(g.innerWidth() / 2) + "px"
                }) : "left" == m ? g.css({
                    left: j + q + i + "px"
                }) : "right" == m && g.css({
                    right: j + q - i + "px"
                }), "center" == n ? h.css({
                    top: "50%",
                    marginTop: r - Math.round(h.innerHeight() / 2) + "px"
                }) : "bottom" == n ? h.css({
                    top: "auto",
                    bottom: 0 + r + "px"
                }) : "top" == n && h.css({
                    bottom: "auto",
                    top: 0 + r + "px"
                }), "center" == o ? h.css({
                    left: "50%",
                    marginLeft: i + s - Math.round(h.innerWidth() / 2) + "px"
                }) : "left" == o ? h.css({
                    left: j + s + i + "px"
                }) : "right" == o && h.css({
                    right: j + s - i + "px"
                }), null != g.position() && g.css({
                    top: Math.round(parseInt(g.position().top, 0)) + "px"
                }), null != h.position() && h.css({
                    top: Math.round(parseInt(h.position().top, 0)) + "px"
                })
            }
            "none" == c.navigationArrows && (g.css({
                visibility: "hidden"
            }), h.css({
                visibility: "hidden"
            }));
            var t = c.navigationVAlign,
                u = c.navigationHAlign,
                v = c.navigationVOffset * c.bh,
                w = c.navigationHOffset * c.bw;
            "center" == t && e.css({
                top: "50%",
                marginTop: v - Math.round(e.innerHeight() / 2) + "px"
            }), "bottom" == t && e.css({
                bottom: 0 + v + "px"
            }), "top" == t && e.css({
                top: 0 + v + "px"
            }), "center" == u && e.css({
                left: "50%",
                marginLeft: i + w - Math.round(e.innerWidth() / 2) + "px"
            }), "left" == u && e.css({
                left: 0 + w + i + "px"
            }), "right" == u && e.css({
                right: 0 + w - i + "px"
            })
        },
        q = function(c) {
            var d = c.container;
            c.beforli = c.next - 1, c.comingli = c.next + 1, c.beforli < 0 && (c.beforli = c.slideamount - 1), c.comingli >= c.slideamount && (c.comingli = 0);
            var e = d.find(">ul:first-child >li:eq(" + c.comingli + ")"),
                f = d.find(">ul:first-child >li:eq(" + c.beforli + ")"),
                g = f.find(".defaultimg").attr("src"),
                h = e.find(".defaultimg").attr("src");
            c.arr == b && (c.arr = d.parent().find(".tparrows"), c.rar = d.parent().find(".tp-rightarrow"), c.lar = d.parent().find(".tp-leftarrow"), c.raimg = c.rar.find(".tp-arr-imgholder"), c.laimg = c.lar.find(".tp-arr-imgholder"), c.raimg_b = c.rar.find(".tp-arr-imgholder2"), c.laimg_b = c.lar.find(".tp-arr-imgholder2"), c.ratit = c.rar.find(".tp-arr-titleholder"), c.latit = c.lar.find(".tp-arr-titleholder"));
            var i = c.arr,
                j = c.rar,
                k = c.lar,
                l = c.raimg,
                m = c.laimg,
                n = c.raimg_b,
                o = c.laimg_b,
                p = c.ratit,
                q = c.latit;
            if (e.data("title") != b && p.html(e.data("title")), f.data("title") != b && q.html(f.data("title")), j.hasClass("itishovered") && j.width(p.outerWidth(!0) + parseInt(j.css("minWidth"), 0)), k.hasClass("itishovered") && k.width(q.outerWidth(!0) + parseInt(k.css("minWidth"), 0)), i.hasClass("preview2") && !i.hasClass("hashoveralready"))
                if (i.addClass("hashoveralready"), W()) {
                    var i = a(this),
                        r = i.find(".tp-arr-titleholder");
                    r.addClass("alwayshidden"), punchgs.TweenLite.set(r, {
                        autoAlpha: 0
                    })
                } else i.hover(function() {
                    var b = a(this),
                        c = b.find(".tp-arr-titleholder");
                    a(window).width() > 767 && b.width(c.outerWidth(!0) + parseInt(b.css("minWidth"), 0)), b.addClass("itishovered")
                }, function() {
                    var b = a(this);
                    b.find(".tp-arr-titleholder"), b.css({
                        width: parseInt(b.css("minWidth"), 0)
                    }), b.removeClass("itishovered")
                });
            f.data("thumb") != b && (g = f.data("thumb")), e.data("thumb") != b && (h = e.data("thumb")), i.hasClass("preview4") ? (n.css({
                backgroundImage: "url(" + h + ")"
            }), o.css({
                backgroundImage: "url(" + g + ")"
            }), punchgs.TweenLite.fromTo(n, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -l.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    l.css({
                        backgroundImage: "url(" + h + ")"
                    }), punchgs.TweenLite.set(n, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(o, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: l.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    m.css({
                        backgroundImage: "url(" + g + ")"
                    }), punchgs.TweenLite.set(o, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(l, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -l.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(l, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(m, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: l.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(m, {
                        x: 0
                    })
                }
            })) : (punchgs.TweenLite.to(l, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    l.css({
                        backgroundImage: "url(" + h + ")"
                    }), m.css({
                        backgroundImage: "url(" + g + ")"
                    })
                }
            }), punchgs.TweenLite.to(m, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(l, .5, {
                        autoAlpha: 1,
                        delay: .2
                    }), punchgs.TweenLite.to(m, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })), j.hasClass("preview4") && !j.hasClass("hashoveralready") && (j.addClass("hashoveralready"), j.hover(function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(b, .4, {
                    x: b.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(c, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(b, .4, {
                    x: b.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(c, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }), k.hover(function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(b, .4, {
                    x: 0 - b.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(c, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(b, .4, {
                    x: 0 - b.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(c, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }))
        },
        r = function(c, d) {
            if (d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                    height: d.container.height()
                }), d.container.closest(".rev_slider_wrapper").css({
                    height: d.container.height()
                }), d.width = parseInt(d.container.width(), 0), d.height = parseInt(d.container.height(), 0), d.bw = d.width / d.startwidth, d.bh = d.height / d.startheight, d.bh > d.bw && (d.bh = d.bw), d.bh < d.bw && (d.bw = d.bh), d.bw < d.bh && (d.bh = d.bw), d.bh > 1 && (d.bw = 1, d.bh = 1), d.bw > 1 && (d.bw = 1, d.bh = 1), d.height = Math.round(d.startheight * (d.width / d.startwidth)), d.height > d.startheight && "on" != d.autoHeight && (d.height = d.startheight), "on" == d.fullScreen) {
                d.height = d.bw * d.startheight, d.container.parent().width();
                var f = a(window).height();
                if (d.fullScreenOffsetContainer != b) {
                    try {
                        var g = d.fullScreenOffsetContainer.split(",");
                        a.each(g, function(b, c) {
                            f -= a(c).outerHeight(!0), f < d.minFullScreenHeight && (f = d.minFullScreenHeight)
                        })
                    } catch (h) {}
                    try {
                        d.fullScreenOffset.split("%").length > 1 && d.fullScreenOffset != b && d.fullScreenOffset.length > 0 ? f -= a(window).height() * parseInt(d.fullScreenOffset, 0) / 100 : d.fullScreenOffset != b && d.fullScreenOffset.length > 0 && (f -= parseInt(d.fullScreenOffset, 0)), f < d.minFullScreenHeight && (f = d.minFullScreenHeight)
                    } catch (h) {}
                }
                d.container.parent().height(f), d.container.closest(".rev_slider_wrapper").height(f), d.container.css({
                    height: "100%"
                }), d.height = f, d.minHeight != b && d.height < d.minHeight && (d.height = d.minHeight)
            } else d.minHeight != b && d.height < d.minHeight && (d.height = d.minHeight), d.container.height(d.height);
            d.slotw = Math.ceil(d.width / d.slots), d.sloth = "on" == d.fullScreen ? Math.ceil(a(window).height() / d.slots) : Math.ceil(d.height / d.slots), "on" == d.autoHeight && (d.sloth = Math.ceil(c.height() / d.slots))
        },
        s = function(c, d) {
            c.find(".tp-caption").each(function() {
                a(this).addClass(a(this).data("transition")), a(this).addClass("start")
            }), c.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: c.parent().css("maxHeight")
            }).addClass("tp-revslider-mainul"), "on" == d.autoHeight && (c.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            }), c.css({
                maxHeight: "none"
            }), c.parent().css({
                maxHeight: "none"
            })), c.find(">ul:first >li").each(function() {
                var e = a(this);
                if (e.addClass("tp-revslider-slidesli"), e.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), e.data("link") != b) {
                    var f = e.data("link"),
                        g = "_self",
                        h = 60;
                    "back" == e.data("slideindex") && (h = 0);
                    var i = checksl = e.data("linktoslide");
                    i != b && "next" != i && "prev" != i && c.find(">ul:first-child >li").each(function() {
                        var b = a(this);
                        b.data("origindex") + 1 == checksl && (i = b.index() + 1)
                    }), e.data("target") != b && (g = e.data("target")), "slide" != f && (i = "no");
                    var j = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + h + ';" data-x="center" data-y="center" data-linktoslide="' + i + '" data-start="0"><a style="width:100%;height:100%;display:block"';
                    "slide" != f && (j = j + ' target="' + g + '" href="' + f + '"'), j += '><span style="width:100%;height:100%;display:block"></span></a></div>', e.append(j)
                }
            }), c.parent().css({
                overflow: "visible"
            }), c.find(">ul:first >li >img").each(function(c) {
                var e = a(this);
                e.addClass("defaultimg"), e.data("lazyload") != b && 1 != e.data("lazydone") || r(e, d), i(8) && e.data("kenburns", "off"), "on" == d.panZoomDisableOnMobile && W() && (e.data("kenburns", "off"), e.data("bgfit", "cover")), e.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + e.data("duration") + '"' + 'data-zoomstart="' + e.data("zoomstart") + '"' + 'data-zoomend="' + e.data("zoomend") + '"' + 'data-rotationstart="' + e.data("rotationstart") + '"' + 'data-rotationend="' + e.data("rotationend") + '"' + 'data-ease="' + e.data("ease") + '"' + 'data-duration="' + e.data("duration") + '"' + 'data-bgpositionend="' + e.data("bgpositionend") + '"' + 'data-bgposition="' + e.data("bgposition") + '"' + 'data-duration="' + e.data("duration") + '"' + 'data-kenburns="' + e.data("kenburns") + '"' + 'data-easeme="' + e.data("ease") + '"' + 'data-bgfit="' + e.data("bgfit") + '"' + 'data-bgfitend="' + e.data("bgfitend") + '"' + 'data-owidth="' + e.data("owidth") + '"' + 'data-oheight="' + e.data("oheight") + '"' + "></div>"), "none" != d.dottedOverlay && d.dottedOverlay != b && e.closest(".slotholder").append('<div class="tp-dottedoverlay ' + d.dottedOverlay + '"></div>');
                var f = e.attr("src"),
                    h = (e.data("lazyload"), e.data("bgfit")),
                    j = e.data("bgrepeat"),
                    k = e.data("bgposition");
                h == b && (h = "cover"), j == b && (j = "no-repeat"), k == b && (k = "center center");
                var l = e.closest(".slotholder");
                e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + e.data("lazyload") + '" data-bgfit="' + h + '"data-bgposition="' + k + '" data-bgrepeat="' + j + '" data-lazydone="' + e.data("lazydone") + '" src="' + f + '" data-src="' + f + '" style="background-color:' + e.css("backgroundColor") + ";background-repeat:" + j + ";background-image:url(" + f + ");background-size:" + h + ";background-position:" + k + ';width:100%;height:100%;"></div>'), i(8) && (l.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                }), l.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + f + '" style="width:100%">')), e.css({
                    opacity: 0
                }), e.data("li-id", c)
            })
        },
        t = function(a, c, d, e) {
            var f = a,
                g = f.find(".defaultimg"),
                h = f.data("zoomstart"),
                j = f.data("rotationstart");
            g.data("currotate") != b && (j = g.data("currotate")), g.data("curscale") != b && "box" == e ? h = 100 * g.data("curscale") : g.data("curscale") != b && (h = g.data("curscale")), r(g, c);
            var k = g.data("src"),
                l = g.css("backgroundColor"),
                m = c.width,
                n = c.height,
                o = g.data("fxof"),
                p = 0;
            "on" == c.autoHeight && (n = c.container.height()), o == b && (o = 0);
            var q = 0,
                s = g.data("bgfit"),
                t = g.data("bgrepeat"),
                v = g.data("bgposition");
            if (s == b && (s = "cover"), t == b && (t = "no-repeat"), v == b && (v = "center center"), i(8)) {
                f.data("kenburns", "off");
                var w = k;
                k = ""
            }
            switch (e) {
                case "box":
                    var x = 0,
                        y = 0,
                        z = 0;
                    if (x = c.sloth > c.slotw ? c.sloth : c.slotw, !d) var q = 0 - x;
                    c.slotw = x, c.sloth = x;
                    var y = 0,
                        z = 0;
                    "on" == f.data("kenburns") && (s = h, s.toString().length < 4 && (s = X(s, f, c)));
                    for (var A = 0; A < c.slots; A++) {
                        z = 0;
                        for (var B = 0; B < c.slots; B++) f.append('<div class="slot" style="position:absolute;top:' + (p + z) + "px;" + "left:" + (o + y) + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + y + '" data-y="' + z + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div style="position:absolute;' + "top:" + (0 - z) + "px;" + "left:" + (0 - y) + "px;" + "width:" + m + "px;" + "height:" + n + "px;" + "background-color:" + l + ";" + "background-image:url(" + k + ");" + "background-repeat:" + t + ";" + "background-size:" + s + ";background-position:" + v + ';">' + "</div></div></div>"), z += x, i(8) && (f.find(".slot ").last().find(".slotslide").append('<img src="' + w + '">'), u(f, c)), h != b && j != b && punchgs.TweenLite.set(f.find(".slot").last(), {
                            rotationZ: j
                        });
                        y += x
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("on" == f.data("kenburns") && (s = h, s.toString().length < 4 && (s = X(s, f, c))), "horizontal" == e) {
                        if (!d) var q = 0 - c.slotw;
                        for (var B = 0; B < c.slots; B++) f.append('<div class="slot" style="position:absolute;top:' + (0 + p) + "px;" + "left:" + (o + B * c.slotw) + "px;" + "overflow:hidden;width:" + (c.slotw + .6) + "px;" + "height:" + n + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:0px;left:" + q + "px;" + "width:" + (c.slotw + .6) + "px;" + "height:" + n + 'px;overflow:hidden;">' + '<div style="background-color:' + l + ";" + "position:absolute;top:0px;" + "left:" + (0 - B * c.slotw) + "px;" + "width:" + m + "px;height:" + n + "px;" + "background-image:url(" + k + ");" + "background-repeat:" + t + ";" + "background-size:" + s + ";background-position:" + v + ';">' + "</div></div></div>"), h != b && j != b && punchgs.TweenLite.set(f.find(".slot").last(), {
                            rotationZ: j
                        }), i(8) && (f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto">'), u(f, c))
                    } else {
                        if (!d) var q = 0 - c.sloth;
                        for (var B = 0; B < c.slots + 2; B++) f.append('<div class="slot" style="position:absolute;top:' + (p + B * c.sloth) + "px;" + "left:" + o + "px;" + "overflow:hidden;" + "width:" + m + "px;" + "height:" + c.sloth + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:" + q + "px;" + "left:0px;width:" + m + "px;" + "height:" + c.sloth + "px;" + 'overflow:hidden;">' + '<div style="background-color:' + l + ";" + "position:absolute;" + "top:" + (0 - B * c.sloth) + "px;" + "left:0px;" + "width:" + m + "px;height:" + n + "px;" + "background-image:url(" + k + ");" + "background-repeat:" + t + ";" + "background-size:" + s + ";background-position:" + v + ';">' + "</div></div></div>"), h != b && j != b && punchgs.TweenLite.set(f.find(".slot").last(), {
                            rotationZ: j
                        }), i(8) && (f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto;">'), u(f, c))
                    }
            }
        },
        u = function(a, b) {
            if (i(8)) {
                var c = a.find(".ieeightfallbackimage");
                c.width(), c.height(), b.startwidth / b.startheight < a.data("owidth") / a.data("oheight") ? c.css({
                    width: "auto",
                    height: "100%"
                }) : c.css({
                    width: "100%",
                    height: "auto"
                }), setTimeout(function() {
                    var d = c.width(),
                        e = c.height(),
                        f = a.data("bgposition");
                    "center center" == f && c.css({
                        position: "absolute",
                        top: b.height / 2 - e / 2 + "px",
                        left: b.width / 2 - d / 2 + "px"
                    }), ("center top" == f || "top center" == f) && c.css({
                        position: "absolute",
                        top: "0px",
                        left: b.width / 2 - d / 2 + "px"
                    }), ("center bottom" == f || "bottom center" == f) && c.css({
                        position: "absolute",
                        bottom: "0px",
                        left: b.width / 2 - d / 2 + "px"
                    }), ("right top" == f || "top right" == f) && c.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), ("right bottom" == f || "bottom right" == f) && c.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }), ("right center" == f || "center right" == f) && c.css({
                        position: "absolute",
                        top: b.height / 2 - e / 2 + "px",
                        right: "0px"
                    }), ("left bottom" == f || "bottom left" == f) && c.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    }), ("left center" == f || "center left" == f) && c.css({
                        position: "absolute",
                        top: b.height / 2 - e / 2 + "px",
                        left: "0px"
                    })
                }, 20)
            }
        },
        v = function(b, c, d) {
            d.find(".slot").each(function() {
                a(this).remove()
            }), c.transition = 0
        },
        w = function(c, d) {
            c.find("img, .defaultimg").each(function() {
                var e = a(this),
                    f = e.data("lazyload");
                if (f != e.attr("src") && 3 > d && f != b && "undefined" != f) {
                    if (f != b && "undefined" != f) {
                        e.attr("src", f);
                        var g = new Image;
                        g.onload = function() {
                            e.data("lazydone", 1), e.hasClass("defaultimg") && x(e, g)
                        }, g.error = function() {
                            e.data("lazydone", 1)
                        }, g.src = e.attr("src"), g.complete && (e.hasClass("defaultimg") && x(e, g), e.data("lazydone", 1))
                    }
                } else if ((f === b || "undefined" === f) && 1 != e.data("lazydone")) {
                    var g = new Image;
                    g.onload = function() {
                        e.hasClass("defaultimg") && x(e, g), e.data("lazydone", 1)
                    }, g.error = function() {
                        e.data("lazydone", 1)
                    }, g.src = e.attr("src") != b && "undefined" != e.attr("src") ? e.attr("src") : e.data("src"), g.complete && (e.hasClass("defaultimg") && x(e, g), e.data("lazydone", 1))
                }
            })
        },
        x = function(a, b) {
            var c = a.closest("li"),
                d = b.width,
                e = b.height;
            c.data("owidth", d), c.data("oheight", e), c.find(".slotholder").data("owidth", d), c.find(".slotholder").data("oheight", e), c.data("loadeddone", 1)
        },
        y = function(c, d, e) {
            w(c, 0);
            var f = setInterval(function() {
                e.bannertimeronpause = !0, e.container.trigger("stoptimer"), e.cd = 0;
                var g = 0;
                c.find("img, .defaultimg").each(function() {
                    1 != a(this).data("lazydone") && g++
                }), g > 0 ? w(c, g) : (clearInterval(f), d != b && d())
            }, 100)
        },
        z = function(a, c) {
            try {
                a.find(">ul:first-child >li:eq(" + c.act + ")")
            } catch (e) {
                a.find(">ul:first-child >li:eq(1)")
            }
            c.lastslide = c.act;
            var f = a.find(">ul:first-child >li:eq(" + c.next + ")"),
                g = f.find(".defaultimg");
            c.bannertimeronpause = !0, a.trigger("stoptimer"), c.cd = 0, g.data("lazyload") != b && "undefined" != g.data("lazyload") && 1 != g.data("lazydone") ? (i(8) ? g.attr("src", f.find(".defaultimg").data("lazyload")) : g.css({
                backgroundImage: 'url("' + f.find(".defaultimg").data("lazyload") + '")'
            }), g.data("src", f.find(".defaultimg").data("lazyload")), g.data("lazydone", 0), g.data("orgw", 0), f.data("loadeddone", 1), a.find(".tp-loader").css({
                display: "block"
            }), y(a.find(".tp-static-layers"), function() {
                y(f, function() {
                    var b = f.find(".slotholder");
                    if ("on" == b.data("kenburns")) var d = setInterval(function() {
                        var e = b.data("owidth");
                        e >= 0 && (clearInterval(d), A(c, g, a))
                    }, 10);
                    else A(c, g, a)
                }, c)
            }, c)) : f.data("loadeddone") === b ? (f.data("loadeddone", 1), y(f, function() {
                A(c, g, a)
            }, c)) : A(c, g, a)
        },
        A = function(a, b, c) {
            a.bannertimeronpause = !1, a.cd = 0, c.trigger("nulltimer"), c.find(".tp-loader").css({
                display: "none"
            }), r(b, a), p(c, a), r(b, a), B(c, a)
        },
        B = function(a, c) {
            a.trigger("revolution.slide.onbeforeswap"), c.transition = 1, c.videoplaying = !1;
            try {
                var d = a.find(">ul:first-child >li:eq(" + c.act + ")")
            } catch (e) {
                var d = a.find(">ul:first-child >li:eq(1)")
            }
            c.lastslide = c.act;
            var f = a.find(">ul:first-child >li:eq(" + c.next + ")");
            setTimeout(function() {
                q(c)
            }, 200);
            var g = d.find(".slotholder"),
                h = f.find(".slotholder");
            ("on" == h.data("kenburns") || "on" == g.data("kenburns")) && (_(a, c), a.find(".kenburnimg").remove()), f.data("delay") != b ? (c.cd = 0, c.delay = f.data("delay")) : c.delay = c.origcd, 1 == c.firststart && punchgs.TweenLite.set(d, {
                autoAlpha: 0
            }), punchgs.TweenLite.set(d, {
                zIndex: 18
            }), punchgs.TweenLite.set(f, {
                autoAlpha: 0,
                zIndex: 20
            });
            var i = 0;
            d.index() != f.index() && 1 != c.firststart && (i = R(d, c)), "on" != d.data("saveperformance") && (i = 0), setTimeout(function() {
                a.trigger("restarttimer"), C(a, c, f, d, g, h)
            }, i)
        },
        C = function(c, d, e, f, g, h) {
            function x() {
                a.each(o, function(a, b) {
                    (b[0] == m || b[8] == m) && (j = b[1], n = b[2], r = s), s += 1
                })
            }
            "prepared" == e.data("differentissplayed") && (e.data("differentissplayed", "done"), e.data("transition", e.data("savedtransition")), e.data("slotamount", e.data("savedslotamount")), e.data("masterspeed", e.data("savedmasterspeed"))), e.data("fstransition") != b && "done" != e.data("differentissplayed") && (e.data("savedtransition", e.data("transition")), e.data("savedslotamount", e.data("slotamount")), e.data("savedmasterspeed", e.data("masterspeed")), e.data("transition", e.data("fstransition")), e.data("slotamount", e.data("fsslotamount")), e.data("masterspeed", e.data("fsmasterspeed")), e.data("differentissplayed", "prepared")), c.find(".active-revslide").removeClass(".active-revslide"), e.addClass("active-revslide"), e.data("transition") == b && e.data("transition", "random");
            var j = 0,
                k = e.data("transition").split(","),
                l = e.data("nexttransid") == b ? -1 : e.data("nexttransid");
            "on" == e.data("randomtransition") ? l = Math.round(Math.random() * k.length) : l += 1, l == k.length && (l = 0), e.data("nexttransid", l);
            var m = k[l];
            d.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal")), i(8) && (m = 11);
            var n = 0;
            "scroll" == d.parallax && d.parallaxFirstGo == b && (d.parallaxFirstGo = !0, bb(c, d), setTimeout(function() {
                bb(c, d)
            }, 210), setTimeout(function() {
                bb(c, d)
            }, 420)), "slidehorizontal" == m && (m = "slideleft", 1 == d.leftarrowpressed && (m = "slideright")), "slidevertical" == m && (m = "slideup", 1 == d.leftarrowpressed && (m = "slidedown")), "parallaxhorizontal" == m && (m = "parallaxtoleft", 1 == d.leftarrowpressed && (m = "parallaxtoright")), "parallaxvertical" == m && (m = "parallaxtotop", 1 == d.leftarrowpressed && (m = "parallaxtobottom"));
            var o = [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                    ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                    ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                ],
                p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                q = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                j = 0,
                n = 1,
                r = 0,
                s = 0,
                u = new Array;
            "on" == h.data("kenburns") && (("boxslide" == m || 0 == m || "boxfade" == m || 1 == m || "papercut" == m || 16 == m) && (m = 11), Y(c, d, !0, !0)), "random" == m && (m = Math.round(Math.random() * o.length - 1), m > o.length - 1 && (m = o.length - 1)), "random-static" == m && (m = Math.round(Math.random() * p.length - 1), m > p.length - 1 && (m = p.length - 1), m = p[m]), "random-premium" == m && (m = Math.round(Math.random() * q.length - 1), m > q.length - 1 && (m = q.length - 1), m = q[m]);
            var v = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == d.isJoomla && window.MooTools != b && -1 != v.indexOf(m)) {
                var w = Math.round(Math.random() * (q.length - 2)) + 1;
                w > q.length - 1 && (w = q.length - 1), 0 == w && (w = 1), m = q[w]
            }
            x(), i(8) && j > 15 && 28 > j && (m = Math.round(Math.random() * p.length - 1), m > p.length - 1 && (m = p.length - 1), m = p[m], s = 0, x());
            var y = -1;
            (1 == d.leftarrowpressed || d.act > d.next) && (y = 1), d.leftarrowpressed = 0, j > 26 && (j = 26), 0 > j && (j = 0);
            var z = 300;
            e.data("masterspeed") != b && e.data("masterspeed") > 99 && e.data("masterspeed") < d.delay && (z = e.data("masterspeed")), e.data("masterspeed") != b && e.data("masterspeed") > d.delay && (z = d.delay), u = o[r], c.parent().find(".bullet").each(function() {
                var b = a(this),
                    c = b.index();
                b.removeClass("selected"), ("withbullet" == d.navigationArrows || "nexttobullets" == d.navigationArrows) && (c = b.index() - 1), c == d.next && b.addClass("selected")
            });
            var A = new punchgs.TimelineLite({
                onComplete: function() {
                    D(c, d, h, g, e, f, A)
                }
            });
            if (A.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
                    opacity: 0
                })), A.pause(), e.data("slotamount") == b || e.data("slotamount") < 1 ? (d.slots = Math.round(12 * Math.random() + 4), "boxslide" == m ? d.slots = Math.round(6 * Math.random() + 3) : "flyin" == m && (d.slots = Math.round(4 * Math.random() + 1))) : d.slots = e.data("slotamount"), d.rotate = e.data("rotate") == b ? 0 : 999 == e.data("rotate") ? Math.round(360 * Math.random()) : e.data("rotate"), (!a.support.transition || d.ie || d.ie9) && (d.rotate = 0), 1 == d.firststart && (d.firststart = 0), z += u[4], (4 == j || 5 == j || 6 == j) && d.slots < 3 && (d.slots = 3), 0 != u[3] && (d.slots = Math.min(d.slots, u[3])), 9 == j && (d.slots = d.width / 20), 10 == j && (d.slots = d.height / 20), null != u[7] && t(g, d, u[7], u[5]), null != u[6] && t(h, d, u[6], u[5]), 0 == j) {
                var B = Math.ceil(d.height / d.sloth),
                    C = 0;
                h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    C += 1, C == B && (C = 0), A.add(punchgs.TweenLite.from(c, z / 600, {
                        opacity: 0,
                        top: 0 - d.sloth,
                        left: 0 - d.slotw,
                        rotation: d.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), (15 * b + 30 * C) / 1500)
                })
            }
            if (1 == j) {
                var E, F = 0;
                h.find(".slotslide").each(function(b) {
                    var c = a(this),
                        e = Math.random() * z + 300,
                        f = 500 * Math.random() + 200;
                    e + f > E && (E = f + f, F = b), A.add(punchgs.TweenLite.from(c, e / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: d.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), f / 1e3)
                })
            }
            if (2 == j) {
                var G = new punchgs.TimelineLite;
                g.find(".slotslide").each(function() {
                    var b = a(this);
                    G.add(punchgs.TweenLite.to(b, z / 1e3, {
                        left: d.slotw,
                        force3D: "auto",
                        rotation: 0 - d.rotate
                    }), 0), A.add(G, 0)
                }), h.find(".slotslide").each(function() {
                    var b = a(this);
                    G.add(punchgs.TweenLite.from(b, z / 1e3, {
                        left: 0 - d.slotw,
                        force3D: "auto",
                        rotation: d.rotate
                    }), 0), A.add(G, 0)
                })
            }
            if (3 == j) {
                var G = new punchgs.TimelineLite;
                g.find(".slotslide").each(function() {
                    var b = a(this);
                    G.add(punchgs.TweenLite.to(b, z / 1e3, {
                        top: d.sloth,
                        rotation: d.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), A.add(G, 0)
                }), h.find(".slotslide").each(function() {
                    var b = a(this);
                    G.add(punchgs.TweenLite.from(b, z / 1e3, {
                        top: 0 - d.sloth,
                        rotation: d.rotate,
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), A.add(G, 0)
                })
            }
            if (4 == j || 5 == j) {
                setTimeout(function() {
                    g.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var H = z / 1e3,
                    G = new punchgs.TimelineLite;
                g.find(".slotslide").each(function(b) {
                    var c = a(this),
                        e = b * H / d.slots;
                    5 == j && (e = (d.slots - b - 1) * H / d.slots / 1.5), G.add(punchgs.TweenLite.to(c, 3 * H, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + d.height,
                        opacity: .5,
                        rotation: d.rotate,
                        ease: punchgs.Power2.easeInOut,
                        delay: e
                    }), 0), A.add(G, 0)
                }), h.find(".slotslide").each(function(b) {
                    var c = a(this),
                        e = b * H / d.slots;
                    5 == j && (e = (d.slots - b - 1) * H / d.slots / 1.5), G.add(punchgs.TweenLite.from(c, 3 * H, {
                        top: 0 - d.height,
                        opacity: .5,
                        rotation: d.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut,
                        delay: e
                    }), 0), A.add(G, 0)
                })
            }
            if (6 == j) {
                d.slots < 2 && (d.slots = 2), d.slots % 2 && (d.slots = d.slots + 1);
                var G = new punchgs.TimelineLite;
                setTimeout(function() {
                    g.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), g.find(".slotslide").each(function(b) {
                    var c = a(this);
                    if (b + 1 < d.slots / 2) var e = 90 * (b + 2);
                    else var e = 90 * (2 + d.slots - b);
                    G.add(punchgs.TweenLite.to(c, (z + e) / 1e3, {
                        top: 0 + d.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: d.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), A.add(G, 0)
                }), h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    if (b + 1 < d.slots / 2) var e = 90 * (b + 2);
                    else var e = 90 * (2 + d.slots - b);
                    G.add(punchgs.TweenLite.from(c, (z + e) / 1e3, {
                        top: 0 - d.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: d.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), A.add(G, 0)
                })
            }
            if (7 == j) {
                z = 2 * z, z > d.delay && (z = d.delay);
                var G = new punchgs.TimelineLite;
                setTimeout(function() {
                    g.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), g.find(".slotslide").each(function() {
                    var b = a(this).find("div");
                    G.add(punchgs.TweenLite.to(b, z / 1e3, {
                        left: 0 - d.slotw / 2 + "px",
                        top: 0 - d.height / 2 + "px",
                        width: 2 * d.slotw + "px",
                        height: 2 * d.height + "px",
                        opacity: 0,
                        rotation: d.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), 0), A.add(G, 0)
                }), h.find(".slotslide").each(function(b) {
                    var c = a(this).find("div");
                    G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - b * d.slotw + "px",
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        top: "0px",
                        width: d.width,
                        height: d.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), A.add(G, 0)
                })
            }
            if (8 == j) {
                z = 3 * z, z > d.delay && (z = d.delay);
                var G = new punchgs.TimelineLite;
                g.find(".slotslide").each(function() {
                    var b = a(this).find("div");
                    G.add(punchgs.TweenLite.to(b, z / 1e3, {
                        left: 0 - d.width / 2 + "px",
                        top: 0 - d.sloth / 2 + "px",
                        width: 2 * d.width + "px",
                        height: 2 * d.sloth + "px",
                        force3D: "auto",
                        opacity: 0,
                        rotation: d.rotate
                    }), 0), A.add(G, 0)
                }), h.find(".slotslide").each(function(b) {
                    var c = a(this).find("div");
                    G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - b * d.sloth + "px",
                        width: h.find(".defaultimg").data("neww") + "px",
                        height: h.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        rotation: 0
                    }), 0), A.add(G, 0)
                })
            }
            if (9 == j || 10 == j) {
                var J = 0;
                h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    J++, A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: punchgs.Power2.easeInOut,
                        delay: 5 * b / 1e3
                    }), 0)
                })
            }
            if (11 == j || 26 == j) {
                var J = 0;
                26 == j && (z = 0), h.find(".slotslide").each(function() {
                    var c = a(this);
                    A.add(punchgs.TweenLite.from(c, z / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            if (12 == j || 13 == j || 14 == j || 15 == j) {
                z = z, z > d.delay && (z = d.delay), setTimeout(function() {
                    punchgs.TweenLite.set(g.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var K = d.width,
                    M = d.height,
                    N = h.find(".slotslide"),
                    O = 0,
                    P = 0,
                    Q = 1,
                    R = 1,
                    S = 1,
                    T = punchgs.Power2.easeInOut,
                    U = punchgs.Power2.easeInOut,
                    V = z / 1e3,
                    W = V;
                ("on" == d.fullWidth || "on" == d.fullScreen) && (K = N.width(), M = N.height()), 12 == j ? O = K : 15 == j ? O = 0 - K : 13 == j ? P = M : 14 == j && (P = 0 - M), 1 == n && (Q = 0), 2 == n && (Q = 0), 3 == n && (T = punchgs.Power2.easeInOut, U = punchgs.Power1.easeInOut, V = z / 1200), (4 == n || 5 == n) && (R = .6), 6 == n && (R = 1.4), (5 == n || 6 == n) && (S = 1.4, Q = 0, K = 0, M = 0, O = 0, P = 0), 6 == n && (S = .6), A.add(punchgs.TweenLite.from(N, V, {
                    left: O,
                    top: P,
                    scale: S,
                    opacity: Q,
                    rotation: d.rotate,
                    ease: U,
                    force3D: "auto"
                }), 0);
                var Z = g.find(".slotslide");
                if ((4 == n || 5 == n) && (K = 0, M = 0), 1 != n) switch (j) {
                    case 12:
                        A.add(punchgs.TweenLite.to(Z, W, {
                            left: 0 - K + "px",
                            force3D: "auto",
                            scale: R,
                            opacity: Q,
                            rotation: d.rotate,
                            ease: T
                        }), 0);
                        break;
                    case 15:
                        A.add(punchgs.TweenLite.to(Z, W, {
                            left: K + "px",
                            force3D: "auto",
                            scale: R,
                            opacity: Q,
                            rotation: d.rotate,
                            ease: T
                        }), 0);
                        break;
                    case 13:
                        A.add(punchgs.TweenLite.to(Z, W, {
                            top: 0 - M + "px",
                            force3D: "auto",
                            scale: R,
                            opacity: Q,
                            rotation: d.rotate,
                            ease: T
                        }), 0);
                        break;
                    case 14:
                        A.add(punchgs.TweenLite.to(Z, W, {
                            top: M + "px",
                            force3D: "auto",
                            scale: R,
                            opacity: Q,
                            rotation: d.rotate,
                            ease: T
                        }), 0)
                }
            }
            if (16 == j) {
                var G = new punchgs.TimelineLite;
                A.add(punchgs.TweenLite.set(f, {
                    position: "absolute",
                    "z-index": 20
                }), 0), A.add(punchgs.TweenLite.set(e, {
                    position: "absolute",
                    "z-index": 15
                }), 0), f.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), f.find(".tp-half-one").clone(!0).appendTo(f).addClass("tp-half-two"), f.find(".tp-half-two").removeClass("tp-half-one");
                var K = d.width,
                    M = d.height;
                "on" == d.autoHeight && (M = c.height()), f.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + K + "px;height:" + M + 'px;"></div>'), f.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + K + "px;height:" + M + 'px;"></div>'), f.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), f.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), A.add(punchgs.TweenLite.set(f.find(".tp-half-two"), {
                    width: K,
                    height: M,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: M / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), A.add(punchgs.TweenLite.set(f.find(".tp-half-one"), {
                    width: K,
                    height: M / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var _ = (f.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    ab = Math.round(20 * Math.random() - 10),
                    cb = Math.round(20 * Math.random() - 10),
                    db = .4 * Math.random() - .2,
                    eb = .4 * Math.random() - .2,
                    fb = 1 * Math.random() + 1,
                    gb = 1 * Math.random() + 1,
                    hb = .3 * Math.random() + .3;
                A.add(punchgs.TweenLite.set(f.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-one"), z / 800, {
                    width: K,
                    height: M / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: fb,
                    rotation: _,
                    y: 0 - M - M / 4,
                    autoAlpha: 0,
                    ease: punchgs.Power2.easeInOut
                }), 0), A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-two"), z / 800, {
                    width: K,
                    height: M,
                    overflow: "hidden",
                    position: "absolute",
                    top: M / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: gb,
                    rotation: ab,
                    y: M + M / 4,
                    ease: punchgs.Power2.easeInOut,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(f, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(e, {
                            position: "absolute",
                            "z-index": 20
                        }), f.find(".tp-half-one").length > 0 && (f.find(".tp-half-one .defaultimg").unwrap(), f.find(".tp-half-one .slotholder").unwrap()), f.find(".tp-half-two").remove()
                    }
                }), 0), G.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != f.html() && A.add(punchgs.TweenLite.fromTo(e, (z - 200) / 1e3, {
                    scale: hb,
                    x: d.width / 4 * db,
                    y: M / 4 * eb,
                    rotation: cb,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), A.add(G, 0)
            }
            if (17 == j && h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * b
                    }), 0)
                }), 18 == j && h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 500, {
                        autoAlpha: 0,
                        rotationY: 310,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * b
                    }), 0)
                }), 19 == j || 22 == j) {
                var G = new punchgs.TimelineLite;
                A.add(punchgs.TweenLite.set(f, {
                    zIndex: 20
                }), 0), A.add(punchgs.TweenLite.set(e, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    g.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var kb = (e.css("z-index"), f.css("z-index"), 90),
                    Q = 1,
                    lb = "center center ";
                1 == y && (kb = -90), 19 == j ? (lb = lb + "-" + d.height / 2, Q = 0) : lb += d.height / 2, punchgs.TweenLite.set(c, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: d.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationX: kb
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * b / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), G.add(punchgs.TweenLite.to(c, .1, {
                        autoAlpha: 1,
                        delay: 50 * b / 1e3
                    }), 0), A.add(G)
                }), g.find(".slotslide").each(function(b) {
                    var c = a(this),
                        e = -90;
                    1 == y && (e = 90), G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: d.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: e,
                        delay: 50 * b / 1e3,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0), A.add(G)
                })
            }
            if (20 == j) {
                if (setTimeout(function() {
                        g.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), e.css("z-index"), f.css("z-index"), 1 == y) var mb = -d.width,
                    kb = 70,
                    lb = "left center -" + d.height / 2;
                else var mb = d.width,
                    kb = -70,
                    lb = "right center -" + d.height / 2;
                h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 1500, {
                        left: mb,
                        rotationX: 40,
                        z: -600,
                        opacity: Q,
                        top: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationY: kb
                    }, {
                        left: 0,
                        delay: 50 * b / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        rotationX: 40,
                        z: -600,
                        opacity: Q,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationY: kb
                    }, {
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * b / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), A.add(punchgs.TweenLite.to(c, .1, {
                        opacity: 1,
                        force3D: "auto",
                        delay: 50 * b / 1e3 + z / 2e3
                    }), 0)
                }), g.find(".slotslide").each(function(b) {
                    var c = a(this);
                    if (1 != y) var e = -d.width,
                        f = 70,
                        g = "left center -" + d.height / 2;
                    else var e = d.width,
                        f = -70,
                        g = "right center -" + d.height / 2;
                    A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: g,
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 40,
                        top: 0,
                        z: -600,
                        left: e,
                        force3D: "auto",
                        scale: .8,
                        rotationY: f,
                        delay: 50 * b / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), A.add(punchgs.TweenLite.to(c, .1, {
                        force3D: "auto",
                        opacity: 0,
                        delay: 50 * b / 1e3 + (z / 1e3 - z / 1e4)
                    }), 0)
                })
            }
            if (21 == j || 25 == j) {
                setTimeout(function() {
                    g.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var kb = (e.css("z-index"), f.css("z-index"), 90),
                    mb = -d.width,
                    nb = -kb;
                if (1 == y)
                    if (25 == j) {
                        var lb = "center top 0";
                        kb = d.rotate
                    } else {
                        var lb = "left center 0";
                        nb = d.rotate
                    } else if (mb = d.width, kb = -90, 25 == j) {
                    var lb = "center bottom 0";
                    nb = -kb, kb = d.rotate
                } else {
                    var lb = "right center 0";
                    nb = d.rotate
                }
                h.find(".slotslide").each(function() {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: nb,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationY: kb
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), 0)
                }), 1 != y ? (mb = -d.width, kb = 90, 25 == j ? (lb = "center top 0", nb = -kb, kb = d.rotate) : (lb = "left center 0", nb = d.rotate)) : (mb = d.width, kb = -90, 25 == j ? (lb = "center bottom 0", nb = -kb, kb = d.rotate) : (lb = "right center 0", nb = d.rotate)), g.find(".slotslide").each(function() {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: nb,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: kb,
                        ease: punchgs.Power1.easeInOut
                    }), 0)
                })
            }
            if (23 == j || 24 == j) {
                setTimeout(function() {
                    g.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var kb = (e.css("z-index"), f.css("z-index"), -90),
                    Q = 1,
                    ob = 0;
                if (1 == y && (kb = 90), 23 == j) {
                    var lb = "center center -" + d.width / 2;
                    Q = 0
                } else var lb = "center center " + d.width / 2;
                punchgs.TweenLite.set(c, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        left: ob,
                        rotationX: d.rotate,
                        force3D: "auto",
                        opacity: Q,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationY: kb
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * b / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                }), kb = 90, 1 == y && (kb = -90), g.find(".slotslide").each(function(b) {
                    var c = a(this);
                    A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
                        left: 0,
                        autoAlpha: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: lb,
                        rotationY: 0
                    }, {
                        left: ob,
                        autoAlpha: 1,
                        rotationX: d.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: kb,
                        delay: 50 * b / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            A.pause(), L(e, d, null, A), punchgs.TweenLite.to(e, .001, {
                autoAlpha: 1
            });
            var pb = {};
            pb.slideIndex = d.next + 1, pb.slide = e, c.trigger("revolution.slide.onchange", pb), setTimeout(function() {
                c.trigger("revolution.slide.onafterswap")
            }, z), c.trigger("revolution.slide.onvideostop")
        },
        D = function(a, b, c, d, e, f, g) {
            punchgs.TweenLite.to(c.find(".defaultimg"), .001, {
                autoAlpha: 1,
                onComplete: function() {
                    v(a, b, e)
                }
            }), e.index() != f.index() && punchgs.TweenLite.to(f, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    v(a, b, f)
                }
            }), b.act = b.next, "thumb" == b.navigationType && db(a), "on" == c.data("kenburns") && Y(a, b), a.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), e.addClass("current-sr-slide-visible"), ("scroll" == b.parallax || "scroll+mouse" == b.parallax || "mouse+scroll" == b.parallax) && bb(a, b), g.clear()
        },
        E = function(b) {
            var c = b.target.getVideoEmbedCode(),
                d = a("#" + c.split('id="')[1].split('"')[0]),
                e = d.closest(".tp-simpleresponsive"),
                f = d.parent().data("player");
            if (b.data == YT.PlayerState.PLAYING) {
                var g = e.find(".tp-bannertimer"),
                    h = g.data("opt");
                "mute" == d.closest(".tp-caption").data("volume") && f.mute(), h.videoplaying = !0, e.trigger("stoptimer"), e.trigger("revolution.slide.onvideoplay")
            } else {
                var g = e.find(".tp-bannertimer"),
                    h = g.data("opt"); - 1 != b.data && 3 != b.data && (h.videoplaying = !1, e.trigger("starttimer"), e.trigger("revolution.slide.onvideostop")), 0 == b.data && 1 == h.nextslideatend ? h.container.revnext() : (h.videoplaying = !1, e.trigger("starttimer"), e.trigger("revolution.slide.onvideostop"))
            }
        },
        F = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent(b, c, !1)
        },
        G = function(b, c) {
            var d = $f(b),
                e = a("#" + b),
                f = e.closest(".tp-simpleresponsive"),
                g = e.closest(".tp-caption");
            setTimeout(function() {
                d.addEvent("ready", function() {
                    c && d.api("play"), d.addEvent("play", function() {
                        var b = f.find(".tp-bannertimer"),
                            c = b.data("opt");
                        c.videoplaying = !0, f.trigger("stoptimer"), "mute" == g.data("volume") && d.api("setVolume", "0")
                    }), d.addEvent("finish", function() {
                        var b = f.find(".tp-bannertimer"),
                            c = b.data("opt");
                        c.videoplaying = !1, f.trigger("starttimer"), f.trigger("revolution.slide.onvideoplay"), 1 == c.nextslideatend && c.container.revnext()
                    }), d.addEvent("pause", function() {
                        var b = f.find(".tp-bannertimer"),
                            c = b.data("opt");
                        c.videoplaying = !1, f.trigger("starttimer"), f.trigger("revolution.slide.onvideostop")
                    }), g.find(".tp-thumb-image").click(function() {
                        punchgs.TweenLite.to(a(this), .3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), d.api("play")
                    })
                })
            }, 150)
        },
        H = function(a, c) {
            var d = c.width(),
                e = c.height(),
                f = a.data("mediaAspect");
            f == b && (f = 1);
            var g = d / e;
            a.css({
                position: "absolute"
            }), a.find("video"), f > g ? punchgs.TweenLite.to(a, 1e-4, {
                width: e * f,
                force3D: "auto",
                top: 0,
                left: 0 - (e * f - d) / 2,
                height: e
            }) : punchgs.TweenLite.to(a, 1e-4, {
                width: d,
                force3D: "auto",
                top: 0 - (d / f - e) / 2,
                left: 0,
                height: d / f
            })
        },
        I = function() {
            var a = new Object;
            return a.x = 0, a.y = 0, a.rotationX = 0, a.rotationY = 0, a.rotationZ = 0, a.scale = 1, a.scaleX = 1, a.scaleY = 1, a.skewX = 0, a.skewY = 0, a.opacity = 0, a.transformOrigin = "center, center", a.transformPerspective = 400, a.rotation = 0, a
        },
        J = function(b, c) {
            var d = c.split(";");
            return a.each(d, function(a, c) {
                c = c.split(":");
                var d = c[0],
                    e = c[1];
                "rotationX" == d && (b.rotationX = parseInt(e, 0)), "rotationY" == d && (b.rotationY = parseInt(e, 0)), "rotationZ" == d && (b.rotationZ = parseInt(e, 0)), "rotationZ" == d && (b.rotation = parseInt(e, 0)), "scaleX" == d && (b.scaleX = parseFloat(e)), "scaleY" == d && (b.scaleY = parseFloat(e)), "opacity" == d && (b.opacity = parseFloat(e)), "skewX" == d && (b.skewX = parseInt(e, 0)), "skewY" == d && (b.skewY = parseInt(e, 0)), "x" == d && (b.x = parseInt(e, 0)), "y" == d && (b.y = parseInt(e, 0)), "z" == d && (b.z = parseInt(e, 0)), "transformOrigin" == d && (b.transformOrigin = e.toString()), "transformPerspective" == d && (b.transformPerspective = parseInt(e, 0))
            }), b
        },
        K = function(b) {
            var c = b.split("animation:"),
                d = new Object;
            d.animation = J(I(), c[1]);
            var e = c[0].split(";");
            return a.each(e, function(a, b) {
                b = b.split(":");
                var c = b[0],
                    e = b[1];
                "typ" == c && (d.typ = e), "speed" == c && (d.speed = parseInt(e, 0) / 1e3), "start" == c && (d.start = parseInt(e, 0) / 1e3), "elementdelay" == c && (d.elementdelay = parseFloat(e)), "ease" == c && (d.ease = e)
            }), d
        },
        L = function(c, d, e, f) {
            function g() {}

            function h() {}
            c.data("ctl") == b && c.data("ctl", new punchgs.TimelineLite);
            var j = c.data("ctl"),
                k = 0,
                l = 0,
                m = c.find(".tp-caption"),
                n = d.container.find(".tp-static-layers").find(".tp-caption");
            j.pause(), a.each(n, function(a, b) {
                m.push(b)
            }), m.each(function(c) {
                var f = e,
                    j = -1,
                    m = a(this);
                if (m.hasClass("tp-static-layer")) {
                    var n = m.data("startslide"),
                        o = m.data("endslide");
                    (-1 == n || "-1" == n) && m.data("startslide", 0), (-1 == o || "-1" == o) && m.data("endslide", d.slideamount), 0 == n && o == d.slideamount - 1 && m.data("endslide", d.slideamount + 1), n = m.data("startslide"), o = m.data("endslide"), m.hasClass("tp-is-shown") ? j = o == d.next || n > d.next || o < d.next ? 2 : 0 : n <= d.next && o >= d.next || n == d.next || o == d.next ? (m.addClass("tp-is-shown"), j = 1) : j = 0
                }
                k = d.width / 2 - d.startwidth * d.bw / 2;
                var p = d.bw;
                d.bh, "on" == d.fullScreen && (l = d.height / 2 - d.startheight * d.bh / 2), ("on" == d.autoHeight || d.minHeight != b && d.minHeight > 0) && (l = d.container.height() / 2 - d.startheight * d.bh / 2), 0 > l && (l = 0);
                var r = 0;
                if (d.width < d.hideCaptionAtLimit && "on" == m.data("captionhidden") ? (m.addClass("tp-hidden-caption"), r = 1) : d.width < d.hideAllCaptionAtLimit || d.width < d.hideAllCaptionAtLilmit ? (m.addClass("tp-hidden-caption"), r = 1) : m.removeClass("tp-hidden-caption"), 0 == r) {
                    if (m.data("linktoslide") == b || m.hasClass("hasclicklistener") || (m.addClass("hasclicklistener"), m.css({
                            cursor: "pointer"
                        }), "no" != m.data("linktoslide") && m.click(function() {
                            var b = a(this),
                                c = b.data("linktoslide");
                            "next" != c && "prev" != c ? (d.container.data("showus", c), d.container.parent().find(".tp-rightarrow").click()) : "next" == c ? d.container.parent().find(".tp-rightarrow").click() : "prev" == c && d.container.parent().find(".tp-leftarrow").click()
                        })), 0 > k && (k = 0), m.hasClass("tp-videolayer") || m.find("iframe").length > 0 || m.find("video").length > 0) {
                        var s = "iframe" + Math.round(1e5 * Math.random() + 1),
                            t = m.data("videowidth"),
                            u = m.data("videoheight"),
                            v = m.data("videoattributes"),
                            w = m.data("ytid"),
                            x = m.data("vimeoid"),
                            y = m.data("videpreload"),
                            z = m.data("videomp4"),
                            A = m.data("videowebm"),
                            B = m.data("videoogv"),
                            C = m.data("videocontrols"),
                            D = "http",
                            L = "loop" == m.data("videoloop") ? "loop" : "loopandnoslidestop" == m.data("videoloop") ? "loop" : "";
                        if (m.data("thumbimage") != b && m.data("videoposter") == b && m.data("videoposter", m.data("thumbimage")), w != b && String(w).length > 1 && 0 == m.find("iframe").length && (D = "https", "none" == C && (v = v.replace("controls=1", "controls=0"), -1 == v.toLowerCase().indexOf("controls") && (v += "&controls=0")), m.append('<iframe style="visible:hidden" src="' + D + "://www.youtube.com/embed/" + w + "?" + v + '" width="' + t + '" height="' + u + '" style="width:' + t + "px;height:" + u + 'px"></iframe>')), x != b && String(x).length > 1 && 0 == m.find("iframe").length && ("https:" === location.protocol && (D = "https"), m.append('<iframe style="visible:hidden" src="' + D + "://player.vimeo.com/video/" + x + "?" + v + '" width="' + t + '" height="' + u + '" style="width:' + t + "px;height:" + u + 'px"></iframe>')), (z != b || A != b) && 0 == m.find("video").length) {
                            "controls" != C && (C = "");
                            var N = '<video style="visible:hidden" class="" ' + L + ' preload="' + y + '" width="' + t + '" height="' + u + '"';
                            m.data("videoposter") != b && m.data("videoposter") != b && (N = N + 'poster="' + m.data("videoposter") + '">'), A != b && "firefox" == M().toLowerCase() && (N = N + '<source src="' + A + '" type="video/webm" />'), z != b && (N = N + '<source src="' + z + '" type="video/mp4" />'), B != b && (N = N + '<source src="' + B + '" type="video/ogg" />'), N += "</video>", m.append(N), "controls" == C && m.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
                        }
                        var R = !1;
                        (1 == m.data("autoplayonlyfirsttime") || "true" == m.data("autoplayonlyfirsttime") || 1 == m.data("autoplay")) && (m.data("autoplay", !0), R = !0), m.find("iframe").each(function() {
                            var c = a(this);
                            if (punchgs.TweenLite.to(c, .1, {
                                    autoAlpha: 1,
                                    zIndex: 0,
                                    transformStyle: "preserve-3d",
                                    z: 0,
                                    rotationX: 0,
                                    force3D: "auto"
                                }), W()) {
                                var g = c.attr("src");
                                c.attr("src", ""), c.attr("src", g)
                            }
                            if (d.nextslideatend = m.data("nextslideatend"), m.data("videoposter") != b && m.data("videoposter").length > 2 && 1 != m.data("autoplay") && !f && (0 == m.find(".tp-thumb-image").length ? m.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + m.data("videoposter") + '); background-size:cover"></div>') : punchgs.TweenLite.set(m.find(".tp-thumb-image"), {
                                    autoAlpha: 1
                                })), c.attr("src").toLowerCase().indexOf("youtube") >= 0)
                                if (c.hasClass("HasListener")) {
                                    if (!e) {
                                        var h = m.data("player");
                                        "on" != m.data("forcerewind") || W() || h.seekTo(0), (!W() && 1 == m.data("autoplay") || R) && m.data("timerplay", setTimeout(function() {
                                            h.playVideo()
                                        }, m.data("start")))
                                    }
                                } else try {
                                    c.attr("id", s);
                                    var h, i = setInterval(function() {
                                        YT != b && typeof YT.Player != b && "undefined" != typeof YT.Player && (h = new YT.Player(s, {
                                            events: {
                                                onStateChange: E,
                                                onReady: function(c) {
                                                    var d = c.target.getVideoEmbedCode(),
                                                        e = a("#" + d.split('id="')[1].split('"')[0]),
                                                        f = e.closest(".tp-caption"),
                                                        g = f.data("videorate");
                                                    f.data("videostart"), g != b && c.target.setPlaybackRate(parseFloat(g)), (!W() && 1 == f.data("autoplay") || R) && f.data("timerplay", setTimeout(function() {
                                                        c.target.playVideo()
                                                    }, f.data("start"))), f.find(".tp-thumb-image").click(function() {
                                                        punchgs.TweenLite.to(a(this), .3, {
                                                            autoAlpha: 0,
                                                            force3D: "auto",
                                                            ease: punchgs.Power3.easeInOut
                                                        }), W() || h.playVideo()
                                                    })
                                                }
                                            }
                                        })), c.addClass("HasListener"), m.data("player", h), clearInterval(i)
                                    }, 100)
                                } catch (j) {} else if (c.attr("src").toLowerCase().indexOf("vimeo") >= 0)
                                    if (c.hasClass("HasListener")) {
                                        if (!(e || W() || 1 != m.data("autoplay") && "on" != m.data("forcerewind"))) {
                                            var c = m.find("iframe"),
                                                r = c.attr("id"),
                                                t = $f(r);
                                            "on" == m.data("forcerewind") && t.api("seekTo", 0), m.data("timerplay", setTimeout(function() {
                                                1 == m.data("autoplay") && t.api("play")
                                            }, m.data("start")))
                                        }
                                    } else {
                                        c.addClass("HasListener"), c.attr("id", s);
                                        for (var p, k = c.attr("src"), l = {}, n = k, o = /([^&=]+)=([^&]*)/g; p = o.exec(n);) l[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
                                        k = l.player_id != b ? k.replace(l.player_id, s) : k + "&player_id=" + s;
                                        try {
                                            k = k.replace("api=0", "api=1")
                                        } catch (j) {}
                                        k += "&api=1", c.attr("src", k);
                                        var h = m.find("iframe")[0],
                                            q = setInterval(function() {
                                                $f != b && typeof $f(s).api != b && "undefined" != typeof $f(s).api && ($f(h).addEvent("ready", function() {
                                                    G(s, R)
                                                }), clearInterval(q))
                                            }, 100)
                                    }
                        }), (W() && 1 == m.data("disablevideoonmobile") || i(8)) && m.find("video").remove(), m.find("video").length > 0 && m.find("video").each(function() {
                            var e = this,
                                f = a(this);
                            f.parent().hasClass("html5vid") || f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var g = f.parent();
                            F(e, "loadedmetadata", function(a) {
                                a.data("metaloaded", 1)
                            }(g)), clearInterval(g.data("interval")), g.data("interval", setInterval(function() {
                                if (1 == g.data("metaloaded") || 0 / 0 != e.duration) {
                                    if (clearInterval(g.data("interval")), !g.hasClass("HasListener")) {
                                        g.addClass("HasListener"), "none" != m.data("dottedoverlay") && m.data("dottedoverlay") != b && 1 != m.find(".tp-dottedoverlay").length && g.append('<div class="tp-dottedoverlay ' + m.data("dottedoverlay") + '"></div>'), f.attr("control") == b && (0 == g.find(".tp-video-play-button").length && g.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), g.find("video, .tp-poster, .tp-video-play-button").click(function() {
                                            g.hasClass("videoisplaying") ? e.pause() : e.play()
                                        })), (1 == m.data("forcecover") || m.hasClass("fullscreenvideo")) && (1 == m.data("forcecover") && (H(g, d.container), g.addClass("fullcoveredvideo"), m.addClass("fullcoveredvideo")), g.css({
                                            width: "100%",
                                            height: "100%"
                                        }));
                                        var a = m.find(".tp-vid-play-pause")[0],
                                            c = m.find(".tp-vid-mute")[0],
                                            h = m.find(".tp-vid-full-screen")[0],
                                            i = m.find(".tp-seek-bar")[0],
                                            j = m.find(".tp-volume-bar")[0];
                                        a != b && (F(a, "click", function() {
                                            1 == e.paused ? e.play() : e.pause()
                                        }), F(c, "click", function() {
                                            0 == e.muted ? (e.muted = !0, c.innerHTML = "Unmute") : (e.muted = !1, c.innerHTML = "Mute")
                                        }), F(h, "click", function() {
                                            e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
                                        }), F(i, "change", function() {
                                            var a = e.duration * (i.value / 100);
                                            e.currentTime = a
                                        }), F(e, "timeupdate", function() {
                                            var a = 100 / e.duration * e.currentTime;
                                            i.value = a
                                        }), F(i, "mousedown", function() {
                                            e.pause()
                                        }), F(i, "mouseup", function() {
                                            e.play()
                                        }), F(j, "change", function() {
                                            e.volume = j.value
                                        })), F(e, "play", function() {
                                            "mute" == m.data("volume") && (e.muted = !0), g.addClass("videoisplaying"), "loopandnoslidestop" == m.data("videoloop") ? (d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop")) : (d.videoplaying = !0, d.container.trigger("stoptimer"), d.container.trigger("revolution.slide.onvideoplay"));
                                            var a = m.find(".tp-vid-play-pause")[0],
                                                c = m.find(".tp-vid-mute")[0];
                                            a != b && (a.innerHTML = "Pause"), c != b && e.muted && (c.innerHTML = "Unmute")
                                        }), F(e, "pause", function() {
                                            g.removeClass("videoisplaying"), d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop");
                                            var a = m.find(".tp-vid-play-pause")[0];
                                            a != b && (a.innerHTML = "Play")
                                        }), F(e, "ended", function() {
                                            g.removeClass("videoisplaying"), d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop"), 1 == d.nextslideatend && d.container.revnext()
                                        })
                                    }
                                    var k = !1;
                                    (1 == m.data("autoplayonlyfirsttime") || "true" == m.data("autoplayonlyfirsttime")) && (k = !0);
                                    var l = 16 / 9;
                                    if ("4:3" == m.data("aspectratio") && (l = 4 / 3), g.data("mediaAspect", l), 1 == g.closest(".tp-caption").data("forcecover") && (H(g, d.container), g.addClass("fullcoveredvideo")), f.css({
                                            display: "block"
                                        }), d.nextslideatend = m.data("nextslideatend"), (1 == m.data("autoplay") || 1 == k) && ("loopandnoslidestop" == m.data("videoloop") ? (d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop")) : (d.videoplaying = !0, d.container.trigger("stoptimer"), d.container.trigger("revolution.slide.onvideoplay")), "on" != m.data("forcerewind") || g.hasClass("videoisplaying") || e.currentTime > 0 && (e.currentTime = 0), "mute" == m.data("volume") && (e.muted = !0), g.data("timerplay", setTimeout(function() {
                                            "on" != m.data("forcerewind") || g.hasClass("videoisplaying") || e.currentTime > 0 && (e.currentTime = 0), "mute" == m.data("volume") && (e.muted = !0), e.play()
                                        }, 10 + m.data("start")))), g.data("ww") == b && g.data("ww", f.attr("width")), g.data("hh") == b && g.data("hh", f.attr("height")), !m.hasClass("fullscreenvideo") && 1 == m.data("forcecover")) try {
                                        g.width(g.data("ww") * d.bw), g.height(g.data("hh") * d.bh)
                                    } catch (n) {}
                                    clearInterval(g.data("interval"))
                                }
                            }), 100)
                        }), 1 == m.data("autoplay") && (setTimeout(function() {
                            "loopandnoslidestop" != m.data("videoloop") && (d.videoplaying = !0, d.container.trigger("stoptimer"))
                        }, 200), "loopandnoslidestop" != m.data("videoloop") && (d.videoplaying = !0, d.container.trigger("stoptimer")), (1 == m.data("autoplayonlyfirsttime") || "true" == m.data("autoplayonlyfirsttime")) && (m.data("autoplay", !1), m.data("autoplayonlyfirsttime", !1)))
                    }
                    var U = 0,
                        V = 0;
                    if (m.find("img").length > 0) {
                        var X = m.find("img");
                        0 == X.width() && X.css({
                            width: "auto"
                        }), 0 == X.height() && X.css({
                            height: "auto"
                        }), X.data("ww") == b && X.width() > 0 && X.data("ww", X.width()), X.data("hh") == b && X.height() > 0 && X.data("hh", X.height());
                        var Y = X.data("ww"),
                            Z = X.data("hh");
                        Y == b && (Y = 0), Z == b && (Z = 0), X.width(Y * d.bw), X.height(Z * d.bh), U = X.width(), V = X.height()
                    } else if (m.find("iframe").length > 0 || m.find("video").length > 0) {
                        var $ = !1,
                            X = m.find("iframe");
                        0 == X.length && (X = m.find("video"), $ = !0), X.css({
                            display: "block"
                        }), m.data("ww") == b && m.data("ww", X.width()), m.data("hh") == b && m.data("hh", X.height());
                        var Y = m.data("ww"),
                            Z = m.data("hh"),
                            _ = m;
                        _.data("fsize") == b && _.data("fsize", parseInt(_.css("font-size"), 0) || 0), _.data("pt") == b && _.data("pt", parseInt(_.css("paddingTop"), 0) || 0), _.data("pb") == b && _.data("pb", parseInt(_.css("paddingBottom"), 0) || 0), _.data("pl") == b && _.data("pl", parseInt(_.css("paddingLeft"), 0) || 0), _.data("pr") == b && _.data("pr", parseInt(_.css("paddingRight"), 0) || 0), _.data("mt") == b && _.data("mt", parseInt(_.css("marginTop"), 0) || 0), _.data("mb") == b && _.data("mb", parseInt(_.css("marginBottom"), 0) || 0), _.data("ml") == b && _.data("ml", parseInt(_.css("marginLeft"), 0) || 0), _.data("mr") == b && _.data("mr", parseInt(_.css("marginRight"), 0) || 0), _.data("bt") == b && _.data("bt", parseInt(_.css("borderTop"), 0) || 0), _.data("bb") == b && _.data("bb", parseInt(_.css("borderBottom"), 0) || 0), _.data("bl") == b && _.data("bl", parseInt(_.css("borderLeft"), 0) || 0), _.data("br") == b && _.data("br", parseInt(_.css("borderRight"), 0) || 0), _.data("lh") == b && _.data("lh", parseInt(_.css("lineHeight"), 0) || 0), "auto" == _.data("lh") && _.data("lh", _.data("fsize") + 4);
                        var ab = d.width,
                            bb = d.height;
                        if (ab > d.startwidth && (ab = d.startwidth), bb > d.startheight && (bb = d.startheight), m.hasClass("fullscreenvideo")) {
                            k = 0, l = 0, m.data("x", 0), m.data("y", 0);
                            var cb = d.height;
                            "on" == d.autoHeight && (cb = d.container.height()), m.css({
                                width: d.width,
                                height: cb
                            })
                        } else m.css({
                            "font-size": _.data("fsize") * d.bw + "px",
                            "padding-top": _.data("pt") * d.bh + "px",
                            "padding-bottom": _.data("pb") * d.bh + "px",
                            "padding-left": _.data("pl") * d.bw + "px",
                            "padding-right": _.data("pr") * d.bw + "px",
                            "margin-top": _.data("mt") * d.bh + "px",
                            "margin-bottom": _.data("mb") * d.bh + "px",
                            "margin-left": _.data("ml") * d.bw + "px",
                            "margin-right": _.data("mr") * d.bw + "px",
                            "border-top": _.data("bt") * d.bh + "px",
                            "border-bottom": _.data("bb") * d.bh + "px",
                            "border-left": _.data("bl") * d.bw + "px",
                            "border-right": _.data("br") * d.bw + "px",
                            "line-height": _.data("lh") * d.bh + "px",
                            height: Z * d.bh + "px"
                        });
                        0 == $ ? (X.width(Y * d.bw), X.height(Z * d.bh)) : 1 == m.data("forcecover") || m.hasClass("fullscreenvideo") || (X.width(Y * d.bw), X.height(Z * d.bh)), U = X.width(), V = X.height()
                    } else {
                        m.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            O(a(this), d)
                        }), m.hasClass("tp-resizeme") && m.find("*").each(function() {
                            O(a(this), d)
                        }), O(m, d), V = m.outerHeight(!0), U = m.outerWidth(!0);
                        var db = m.outerHeight(),
                            eb = m.css("backgroundColor");
                        m.find(".frontcorner").css({
                            borderWidth: db + "px",
                            left: 0 - db + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: eb
                        }), m.find(".frontcornertop").css({
                            borderWidth: db + "px",
                            left: 0 - db + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: eb
                        }), m.find(".backcorner").css({
                            borderWidth: db + "px",
                            right: 0 - db + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: eb
                        }), m.find(".backcornertop").css({
                            borderWidth: db + "px",
                            right: 0 - db + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: eb
                        })
                    }
                    "on" == d.fullScreenAlignForce && (k = 0, l = 0), m.data("voffset") == b && m.data("voffset", 0), m.data("hoffset") == b && m.data("hoffset", 0);
                    var fb = m.data("voffset") * p,
                        gb = m.data("hoffset") * p,
                        hb = d.startwidth * p,
                        ib = d.startheight * p;
                    "on" == d.fullScreenAlignForce && (hb = d.container.width(), ib = d.container.height()), ("center" == m.data("x") || "center" == m.data("xcenter")) && (m.data("xcenter", "center"), m.data("x", hb / 2 - m.outerWidth(!0) / 2 + gb)), ("left" == m.data("x") || "left" == m.data("xleft")) && (m.data("xleft", "left"), m.data("x", 0 / p + gb)), ("right" == m.data("x") || "right" == m.data("xright")) && (m.data("xright", "right"), m.data("x", (hb - m.outerWidth(!0) + gb) / p)), ("center" == m.data("y") || "center" == m.data("ycenter")) && (m.data("ycenter", "center"), m.data("y", ib / 2 - m.outerHeight(!0) / 2 + fb)), ("top" == m.data("y") || "top" == m.data("ytop")) && (m.data("ytop", "top"), m.data("y", 0 / d.bh + fb)), ("bottom" == m.data("y") || "bottom" == m.data("ybottom")) && (m.data("ybottom", "bottom"), m.data("y", (ib - m.outerHeight(!0) + fb) / p)), m.data("start") == b && m.data("start", 1e3);
                    var jb = m.data("easing");
                    jb == b && (jb = "punchgs.Power1.easeOut");
                    var kb = m.data("start") / 1e3,
                        lb = m.data("speed") / 1e3;
                    if ("center" == m.data("x") || "center" == m.data("xcenter")) var mb = m.data("x") + k;
                    else var mb = p * m.data("x") + k;
                    if ("center" == m.data("y") || "center" == m.data("ycenter")) var nb = m.data("y") + l;
                    else var nb = d.bh * m.data("y") + l;
                    if (punchgs.TweenLite.set(m, {
                            top: nb,
                            left: mb,
                            overwrite: "auto"
                        }), 0 == j && (f = !0), m.data("timeline") == b || f || (2 != j && m.data("timeline").gotoAndPlay(0), f = !0), !f) {
                        m.data("timeline") != b;
                        var ob = new punchgs.TimelineLite({
                            smoothChildTiming: !0,
                            onStart: h
                        });
                        ob.pause(), "on" == d.fullScreenAlignForce;
                        var pb = m;
                        m.data("mySplitText") != b && m.data("mySplitText").revert(), ("chars" == m.data("splitin") || "words" == m.data("splitin") || "lines" == m.data("splitin") || "chars" == m.data("splitout") || "words" == m.data("splitout") || "lines" == m.data("splitout")) && (m.find("a").length > 0 ? m.data("mySplitText", new punchgs.SplitText(m.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : m.find(".tp-layer-inner-rotation").length > 0 ? m.data("mySplitText", new punchgs.SplitText(m.find(".tp-layer-inner-rotation"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : m.data("mySplitText", new punchgs.SplitText(m, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), m.addClass("splitted")), "chars" == m.data("splitin") && (pb = m.data("mySplitText").chars), "words" == m.data("splitin") && (pb = m.data("mySplitText").words), "lines" == m.data("splitin") && (pb = m.data("mySplitText").lines);
                        var qb = I(),
                            rb = I();
                        m.data("repeat") != b && (repeatV = m.data("repeat")), m.data("yoyo") != b && (yoyoV = m.data("yoyo")), m.data("repeatdelay") != b && (repeatdelayV = m.data("repeatdelay"));
                        var sb = m.attr("class");
                        sb.match("customin") ? qb = J(qb, m.data("customin")) : sb.match("randomrotate") ? (qb.scale = 3 * Math.random() + 1, qb.rotation = Math.round(200 * Math.random() - 100), qb.x = Math.round(200 * Math.random() - 100), qb.y = Math.round(200 * Math.random() - 100)) : sb.match("lfr") || sb.match("skewfromright") ? qb.x = 15 + d.width : sb.match("lfl") || sb.match("skewfromleft") ? qb.x = -15 - U : sb.match("sfl") || sb.match("skewfromleftshort") ? qb.x = -50 : sb.match("sfr") || sb.match("skewfromrightshort") ? qb.x = 50 : sb.match("lft") ? qb.y = -25 - V : sb.match("lfb") ? qb.y = 25 + d.height : sb.match("sft") ? qb.y = -50 : sb.match("sfb") && (qb.y = 50), sb.match("skewfromright") || m.hasClass("skewfromrightshort") ? qb.skewX = -85 : (sb.match("skewfromleft") || m.hasClass("skewfromleftshort")) && (qb.skewX = 85), (sb.match("fade") || sb.match("sft") || sb.match("sfl") || sb.match("sfb") || sb.match("skewfromleftshort") || sb.match("sfr") || sb.match("skewfromrightshort")) && (qb.opacity = 0), "safari" == M().toLowerCase();
                        var tb = m.data("elementdelay") == b ? 0 : m.data("elementdelay");
                        rb.ease = qb.ease = m.data("easing") == b ? punchgs.Power1.easeInOut : m.data("easing"), qb.data = new Object, qb.data.oldx = qb.x, qb.data.oldy = qb.y, rb.data = new Object, rb.data.oldx = rb.x, rb.data.oldy = rb.y, qb.x = qb.x * p, qb.y = qb.y * p;
                        var ub = new punchgs.TimelineLite;
                        if (2 != j)
                            if (sb.match("customin")) pb != m && ob.add(punchgs.TweenLite.set(m, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            })), qb.visibility = "hidden", rb.visibility = "visible", rb.overwrite = "all", rb.opacity = 1, rb.onComplete = g(), rb.delay = kb, rb.force3D = "auto", ob.add(ub.staggerFromTo(pb, lb, qb, rb, tb), "frame0");
                            else if (qb.visibility = "visible", qb.transformPerspective = 600, pb != m && ob.add(punchgs.TweenLite.set(m, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            })), rb.visibility = "visible", rb.delay = kb, rb.onComplete = g(), rb.opacity = 1, rb.force3D = "auto", sb.match("randomrotate") && pb != m)
                            for (var c = 0; c < pb.length; c++) {
                                var vb = new Object,
                                    wb = new Object;
                                a.extend(vb, qb), a.extend(wb, rb), qb.scale = 3 * Math.random() + 1, qb.rotation = Math.round(200 * Math.random() - 100), qb.x = Math.round(200 * Math.random() - 100), qb.y = Math.round(200 * Math.random() - 100), 0 != c && (wb.delay = kb + c * tb), ob.append(punchgs.TweenLite.fromTo(pb[c], lb, vb, wb), "frame0")
                            } else ob.add(ub.staggerFromTo(pb, lb, qb, rb, tb), "frame0");
                        if (m.data("timeline", ob), new Array, m.data("frames") != b) {
                            var yb = m.data("frames");
                            yb = yb.replace(/\s+/g, ""), yb = yb.replace("{", "");
                            var zb = yb.split("}");
                            a.each(zb, function(a, b) {
                                if (b.length > 0) {
                                    var c = K(b);
                                    S(m, d, c, "frame" + (a + 10), p)
                                }
                            })
                        }
                        ob = m.data("timeline"), m.data("end") == b || -1 != j && 2 != j ? -1 == j || 2 == j ? T(m, d, 999999, qb, "frame99", p) : T(m, d, 999999, qb, "frame99", p) : T(m, d, m.data("end") / 1e3, qb, "frame99", p), ob = m.data("timeline"), m.data("timeline", ob), P(m, p), ob.resume()
                    }
                }
                if (f && (Q(m), P(m, p), m.data("timeline") != b)) {
                    var Ab = m.data("timeline").getTweensOf();
                    a.each(Ab, function(a, c) {
                        if (c.vars.data != b) {
                            var d = c.vars.data.oldx * p,
                                e = c.vars.data.oldy * p;
                            if (1 != c.progress() && 0 != c.progress()) try {
                                c.vars.x = d, c.vary.y = e
                            } catch (f) {} else 1 == c.progress() && punchgs.TweenLite.set(c.target, {
                                x: d,
                                y: e
                            })
                        }
                    })
                }
            });
            var o = a("body").find("#" + d.container.attr("id")).find(".tp-bannertimer");
            o.data("opt", d), f != b && setTimeout(function() {
                f.resume()
            }, 30)
        },
        M = function() {
            var c, a = navigator.appName,
                b = navigator.userAgent,
                d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[0]
        },
        O = function(a, c) {
            a.data("fsize") == b && a.data("fsize", parseInt(a.css("font-size"), 0) || 0), a.data("pt") == b && a.data("pt", parseInt(a.css("paddingTop"), 0) || 0), a.data("pb") == b && a.data("pb", parseInt(a.css("paddingBottom"), 0) || 0), a.data("pl") == b && a.data("pl", parseInt(a.css("paddingLeft"), 0) || 0), a.data("pr") == b && a.data("pr", parseInt(a.css("paddingRight"), 0) || 0), a.data("mt") == b && a.data("mt", parseInt(a.css("marginTop"), 0) || 0), a.data("mb") == b && a.data("mb", parseInt(a.css("marginBottom"), 0) || 0), a.data("ml") == b && a.data("ml", parseInt(a.css("marginLeft"), 0) || 0), a.data("mr") == b && a.data("mr", parseInt(a.css("marginRight"), 0) || 0), a.data("bt") == b && a.data("bt", parseInt(a.css("borderTopWidth"), 0) || 0), a.data("bb") == b && a.data("bb", parseInt(a.css("borderBottomWidth"), 0) || 0), a.data("bl") == b && a.data("bl", parseInt(a.css("borderLeftWidth"), 0) || 0), a.data("br") == b && a.data("br", parseInt(a.css("borderRightWidth"), 0) || 0), a.data("ls") == b && a.data("ls", parseInt(a.css("letterSpacing"), 0) || 0), a.data("lh") == b && a.data("lh", parseInt(a.css("lineHeight"), 0) || "auto"), a.data("minwidth") == b && a.data("minwidth", parseInt(a.css("minWidth"), 0) || 0), a.data("minheight") == b && a.data("minheight", parseInt(a.css("minHeight"), 0) || 0), a.data("maxwidth") == b && a.data("maxwidth", parseInt(a.css("maxWidth"), 0) || "none"), a.data("maxheight") == b && a.data("maxheight", parseInt(a.css("maxHeight"), 0) || "none"), a.data("wii") == b && a.data("wii", parseInt(a.css("width"), 0) || 0), a.data("hii") == b && a.data("hii", parseInt(a.css("height"), 0) || 0), a.data("wan") == b && a.data("wan", a.css("-webkit-transition")), a.data("moan") == b && a.data("moan", a.css("-moz-animation-transition")), a.data("man") == b && a.data("man", a.css("-ms-animation-transition")), a.data("ani") == b && a.data("ani", a.css("transition")), "auto" == a.data("lh") && a.data("lh", a.data("fsize") + 4), a.hasClass("tp-splitted") || (a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none"), punchgs.TweenLite.set(a, {
                fontSize: Math.round(a.data("fsize") * c.bw) + "px",
                letterSpacing: Math.floor(a.data("ls") * c.bw) + "px",
                paddingTop: Math.round(a.data("pt") * c.bh) + "px",
                paddingBottom: Math.round(a.data("pb") * c.bh) + "px",
                paddingLeft: Math.round(a.data("pl") * c.bw) + "px",
                paddingRight: Math.round(a.data("pr") * c.bw) + "px",
                marginTop: a.data("mt") * c.bh + "px",
                marginBottom: a.data("mb") * c.bh + "px",
                marginLeft: a.data("ml") * c.bw + "px",
                marginRight: a.data("mr") * c.bw + "px",
                borderTopWidth: Math.round(a.data("bt") * c.bh) + "px",
                borderBottomWidth: Math.round(a.data("bb") * c.bh) + "px",
                borderLeftWidth: Math.round(a.data("bl") * c.bw) + "px",
                borderRightWidth: Math.round(a.data("br") * c.bw) + "px",
                lineHeight: Math.round(a.data("lh") * c.bh) + "px",
                minWidth: a.data("minwidth") * c.bw + "px",
                minHeight: a.data("minheight") * c.bh + "px",
                overwrite: "auto"
            }), setTimeout(function() {
                a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
            }, 30), "none" != a.data("maxheight") && a.css({
                maxHeight: a.data("maxheight") * c.bh + "px"
            }), "none" != a.data("maxwidth") && a.css({
                maxWidth: a.data("maxwidth") * c.bw + "px"
            }))
        },
        P = function(c, d) {
            c.find(".rs-pendulum").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new punchgs.TimelineLite);
                    var e = c.data("startdeg") == b ? -20 : c.data("startdeg"),
                        f = c.data("enddeg") == b ? 20 : c.data("enddeg"),
                        g = c.data("speed") == b ? 2 : c.data("speed"),
                        h = c.data("origin") == b ? "50% 50%" : c.data("origin"),
                        i = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("ease");
                    e *= d, f *= d, c.data("timeline").append(new punchgs.TweenLite.fromTo(c, g, {
                        force3D: "auto",
                        rotation: e,
                        transformOrigin: h
                    }, {
                        rotation: f,
                        ease: i
                    })), c.data("timeline").append(new punchgs.TweenLite.fromTo(c, g, {
                        force3D: "auto",
                        rotation: f,
                        transformOrigin: h
                    }, {
                        rotation: e,
                        ease: i,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-rotate").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new punchgs.TimelineLite);
                    var e = c.data("startdeg") == b ? 0 : c.data("startdeg"),
                        f = c.data("enddeg") == b ? 360 : c.data("enddeg");
                    speed = c.data("speed") == b ? 2 : c.data("speed"), origin = c.data("origin") == b ? "50% 50%" : c.data("origin"), easing = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("easing"), e *= d, f *= d, c.data("timeline").append(new punchgs.TweenLite.fromTo(c, speed, {
                        force3D: "auto",
                        rotation: e,
                        transformOrigin: origin
                    }, {
                        rotation: f,
                        ease: easing,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-slideloop").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new punchgs.TimelineLite);
                    var e = c.data("xs") == b ? 0 : c.data("xs"),
                        f = c.data("ys") == b ? 0 : c.data("ys"),
                        g = c.data("xe") == b ? 0 : c.data("xe"),
                        h = c.data("ye") == b ? 0 : c.data("ye"),
                        i = c.data("speed") == b ? 2 : c.data("speed"),
                        j = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("easing");
                    e *= d, f *= d, g *= d, h *= d, c.data("timeline").append(new punchgs.TweenLite.fromTo(c, i, {
                        force3D: "auto",
                        x: e,
                        y: f
                    }, {
                        x: g,
                        y: h,
                        ease: j
                    })), c.data("timeline").append(new punchgs.TweenLite.fromTo(c, i, {
                        force3D: "auto",
                        x: g,
                        y: h
                    }, {
                        x: e,
                        y: f,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-pulse").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new punchgs.TimelineLite);
                    var d = c.data("zoomstart") == b ? 0 : c.data("zoomstart"),
                        e = c.data("zoomend") == b ? 0 : c.data("zoomend"),
                        f = c.data("speed") == b ? 2 : c.data("speed"),
                        g = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("easing");
                    c.data("timeline").append(new punchgs.TweenLite.fromTo(c, f, {
                        force3D: "auto",
                        scale: d
                    }, {
                        scale: e,
                        ease: g
                    })), c.data("timeline").append(new punchgs.TweenLite.fromTo(c, f, {
                        force3D: "auto",
                        scale: e
                    }, {
                        scale: d,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-wave").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new punchgs.TimelineLite);
                    var e = c.data("angle") == b ? 10 : c.data("angle"),
                        f = c.data("radius") == b ? 10 : c.data("radius"),
                        g = c.data("speed") == b ? -20 : c.data("speed");
                    c.data("origin") == b ? -20 : c.data("origin"), e *= d, f *= d;
                    var i = {
                        a: 0,
                        ang: e,
                        element: c,
                        unit: f
                    };
                    c.data("timeline").append(new punchgs.TweenLite.fromTo(i, g, {
                        a: 360
                    }, {
                        a: 0,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone,
                        onUpdate: function() {
                            var a = i.a * (Math.PI / 180);
                            punchgs.TweenLite.to(i.element, .1, {
                                force3D: "auto",
                                x: Math.cos(a) * i.unit,
                                y: i.unit * (1 - Math.sin(a))
                            })
                        },
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            })
        },
        Q = function(c) {
            c.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var c = a(this);
                c.data("timeline") != b && (c.data("timeline").pause(), c.data("timeline", null))
            })
        },
        R = function(c, d) {
            var e = 0,
                f = c.find(".tp-caption"),
                g = d.container.find(".tp-static-layers").find(".tp-caption");
            return a.each(g, function(a, b) {
                f.push(b)
            }), f.each(function() {
                var f = -1,
                    g = a(this);
                if (g.hasClass("tp-static-layer") && ((-1 == g.data("startslide") || "-1" == g.data("startslide")) && g.data("startslide", 0), (-1 == g.data("endslide") || "-1" == g.data("endslide")) && g.data("endslide", d.slideamount), g.hasClass("tp-is-shown") ? g.data("startslide") > d.next || g.data("endslide") < d.next ? (f = 2, g.removeClass("tp-is-shown")) : f = 0 : f = 2), 0 != f) {
                    if (Q(g), g.find("iframe").length > 0) {
                        punchgs.TweenLite.to(g.find("iframe"), .2, {
                            autoAlpha: 0
                        }), W() && g.find("iframe").remove();
                        try {
                            var h = g.find("iframe"),
                                i = h.attr("id"),
                                j = $f(i);
                            j.api("pause"), clearTimeout(g.data("timerplay"))
                        } catch (k) {}
                        try {
                            var l = g.data("player");
                            l.stopVideo(), clearTimeout(g.data("timerplay"))
                        } catch (k) {}
                    }
                    if (g.find("video").length > 0) try {
                        g.find("video").each(function() {
                            var c = a(this).parent();
                            c.attr("id"), clearTimeout(c.data("timerplay"));
                            var e = this;
                            e.pause()
                        })
                    } catch (k) {}
                    try {
                        var m = g.data("timeline"),
                            n = m.getLabelTime("frame99"),
                            o = m.time();
                        if (n > o) {
                            var p = m.getTweensOf(g);
                            if (a.each(p, function(a, b) {
                                    0 != a && b.pause()
                                }), 0 != g.css("opacity")) {
                                var q = g.data("endspeed") == b ? g.data("speed") : g.data("endspeed");
                                q > e && (e = q), m.play("frame99")
                            } else m.progress(1, !1)
                        }
                    } catch (k) {}
                }
            }), e
        },
        S = function(a, c, d, e, f) {
            var g = a.data("timeline"),
                h = new punchgs.TimelineLite,
                i = a;
            "chars" == d.typ ? i = a.data("mySplitText").chars : "words" == d.typ ? i = a.data("mySplitText").words : "lines" == d.typ && (i = a.data("mySplitText").lines), d.animation.ease = d.ease, d.animation.rotationZ != b && (d.animation.rotation = d.animation.rotationZ), d.animation.data = new Object, d.animation.data.oldx = d.animation.x, d.animation.data.oldy = d.animation.y, d.animation.x = d.animation.x * f, d.animation.y = d.animation.y * f, g.add(h.staggerTo(i, d.speed, d.animation, d.elementdelay), d.start), g.addLabel(e, d.start), a.data("timeline", g)
        },
        T = function(a, c, d, e, f, g) {
            var h = a.data("timeline"),
                i = new punchgs.TimelineLite,
                j = I(),
                k = a.data("endspeed") == b ? a.data("speed") : a.data("endspeed"),
                l = a.attr("class");
            if (j.ease = a.data("endeasing") == b ? punchgs.Power1.easeInOut : a.data("endeasing"), k /= 1e3, l.match("ltr") || l.match("ltl") || l.match("str") || l.match("stl") || l.match("ltt") || l.match("ltb") || l.match("stt") || l.match("stb") || l.match("skewtoright") || l.match("skewtorightshort") || l.match("skewtoleft") || l.match("skewtoleftshort") || l.match("fadeout") || l.match("randomrotateout")) {
                l.match("skewtoright") || l.match("skewtorightshort") ? j.skewX = 35 : (l.match("skewtoleft") || l.match("skewtoleftshort")) && (j.skewX = -35), l.match("ltr") || l.match("skewtoright") ? j.x = c.width + 60 : l.match("ltl") || l.match("skewtoleft") ? j.x = 0 - (c.width + 60) : l.match("ltt") ? j.y = 0 - (c.height + 60) : l.match("ltb") ? j.y = c.height + 60 : l.match("str") || l.match("skewtorightshort") ? (j.x = 50, j.opacity = 0) : l.match("stl") || l.match("skewtoleftshort") ? (j.x = -50, j.opacity = 0) : l.match("stt") ? (j.y = -50, j.opacity = 0) : l.match("stb") ? (j.y = 50, j.opacity = 0) : l.match("randomrotateout") ? (j.x = Math.random() * c.width, j.y = Math.random() * c.height, j.scale = 2 * Math.random() + .3, j.rotation = 360 * Math.random() - 180, j.opacity = 0) : l.match("fadeout") && (j.opacity = 0), l.match("skewtorightshort") ? j.x = 270 : l.match("skewtoleftshort") && (j.x = -270), j.data = new Object, j.data.oldx = j.x, j.data.oldy = j.y, j.x = j.x * g, j.y = j.y * g, j.overwrite = "auto";
                var m = a,
                    m = a;
                "chars" == a.data("splitout") ? m = a.data("mySplitText").chars : "words" == a.data("splitout") ? m = a.data("mySplitText").words : "lines" == a.data("splitout") && (m = a.data("mySplitText").lines);
                var n = a.data("endelementdelay") == b ? 0 : a.data("endelementdelay");
                h.add(i.staggerTo(m, k, j, n), d)
            } else if (a.hasClass("customout")) {
                j = J(j, a.data("customout"));
                var m = a;
                "chars" == a.data("splitout") ? m = a.data("mySplitText").chars : "words" == a.data("splitout") ? m = a.data("mySplitText").words : "lines" == a.data("splitout") && (m = a.data("mySplitText").lines);
                var n = a.data("endelementdelay") == b ? 0 : a.data("endelementdelay");
                j.onStart = function() {
                    punchgs.TweenLite.set(a, {
                        transformPerspective: j.transformPerspective,
                        transformOrigin: j.transformOrigin,
                        overwrite: "auto"
                    })
                }, j.data = new Object, j.data.oldx = j.x, j.data.oldy = j.y, j.x = j.x * g, j.y = j.y * g, h.add(i.staggerTo(m, k, j, n), d)
            } else e.delay = 0, h.add(punchgs.TweenLite.to(a, k, e), d);
            h.addLabel(f, d), a.data("timeline", h)
        },
        U = function(b, c) {
            b.children().each(function() {
                try {
                    a(this).die("click")
                } catch (b) {}
                try {
                    a(this).die("mouseenter")
                } catch (b) {}
                try {
                    a(this).die("mouseleave")
                } catch (b) {}
                try {
                    a(this).unbind("hover")
                } catch (b) {}
            });
            try {
                b.die("click", "mouseenter", "mouseleave")
            } catch (d) {}
            clearInterval(c.cdint), b = null
        },
        V = function(c, d) {
            if (d.cd = 0, d.loop = 0, d.looptogo = d.stopAfterLoops != b && d.stopAfterLoops > -1 ? d.stopAfterLoops : 9999999, d.lastslidetoshow = d.stopAtSlide != b && d.stopAtSlide > -1 ? d.stopAtSlide : 999, d.stopLoop = "off", 0 == d.looptogo && (d.stopLoop = "on"), d.slideamount > 1 && (0 != d.stopAfterLoops || 1 != d.stopAtSlide)) {
                var e = c.find(".tp-bannertimer");
                c.on("stoptimer", function() {
                    var b = a(this).find(".tp-bannertimer");
                    b.data("tween").pause(), "on" == d.hideTimerBar && b.css({
                        visibility: "hidden"
                    })
                }), c.on("starttimer", function() {
                    1 != d.conthover && 1 != d.videoplaying && d.width > d.hideSliderAtLimit && 1 != d.bannertimeronpause && 1 != d.overnav && ("on" == d.stopLoop && d.next == d.lastslidetoshow - 1 || 1 == d.noloopanymore ? d.noloopanymore = 1 : (e.css({
                        visibility: "visible"
                    }), e.data("tween").resume())), "on" == d.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), c.on("restarttimer", function() {
                    var b = a(this).find(".tp-bannertimer");
                    "on" == d.stopLoop && d.next == d.lastslidetoshow - 1 || 1 == d.noloopanymore ? d.noloopanymore = 1 : (b.css({
                        visibility: "visible"
                    }), b.data("tween").kill(), b.data("tween", punchgs.TweenLite.fromTo(b, d.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: f,
                        delay: 1
                    }))), "on" == d.hideTimerBar && b.css({
                        visibility: "hidden"
                    })
                }), c.on("nulltimer", function() {
                    e.data("tween").pause(0), "on" == d.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                });
                var f = function() {
                    0 == a("body").find(c).length && (U(c, d), clearInterval(d.cdint)), c.trigger("revolution.slide.slideatend"), 1 == c.data("conthover-changed") && (d.conthover = c.data("conthover"), c.data("conthover-changed", 0)), d.act = d.next, d.next = d.next + 1, d.next > c.find(">ul >li").length - 1 && (d.next = 0, d.looptogo = d.looptogo - 1, d.looptogo <= 0 && (d.stopLoop = "on")), "on" == d.stopLoop && d.next == d.lastslidetoshow - 1 ? (c.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    }), c.trigger("revolution.slide.onstop"), d.noloopanymore = 1) : e.data("tween").restart(), z(c, d)
                };
                e.data("tween", punchgs.TweenLite.fromTo(e, d.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: f,
                    delay: 1
                })), e.data("opt", d), c.hover(function() {
                    if ("on" == d.onHoverStop && !W()) {
                        c.trigger("stoptimer"), c.trigger("revolution.slide.onpause");
                        var e = c.find(">ul >li:eq(" + d.next + ") .slotholder");
                        e.find(".defaultimg").each(function() {
                            var c = a(this);
                            c.data("kenburn") != b && c.data("kenburn").pause()
                        })
                    }
                }, function() {
                    if (1 != c.data("conthover")) {
                        c.trigger("revolution.slide.onresume"), c.trigger("starttimer");
                        var e = c.find(">ul >li:eq(" + d.next + ") .slotholder");
                        e.find(".defaultimg").each(function() {
                            var c = a(this);
                            c.data("kenburn") != b && c.data("kenburn").play()
                        })
                    }
                })
            }
        },
        W = function() {
            var a = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                b = !1;
            for (var c in a) navigator.userAgent.split(a[c]).length > 1 && (b = !0);
            return b
        },
        X = function(a, b, c) {
            var d = b.data("owidth"),
                e = b.data("oheight");
            if (d / e > c.width / c.height) {
                var f = c.container.width() / d,
                    g = e * f,
                    h = g / c.container.height() * a;
                return a *= 100 / h, h = 100, a = a, a + "% " + h + "%" + " 1"
            }
            var f = c.container.width() / d,
                g = e * f,
                h = g / c.container.height() * a;
            return a + "% " + h + "%"
        },
        Y = function(c, d, e, f) {
            try {
                c.find(">ul:first-child >li:eq(" + d.act + ")")
            } catch (h) {
                c.find(">ul:first-child >li:eq(1)")
            }
            d.lastslide = d.act;
            var j = c.find(">ul:first-child >li:eq(" + d.next + ")"),
                k = j.find(".slotholder"),
                l = k.data("bgposition"),
                m = k.data("bgpositionend"),
                n = k.data("zoomstart") / 100,
                o = k.data("zoomend") / 100,
                p = k.data("rotationstart"),
                q = k.data("rotationend"),
                r = k.data("bgfit"),
                s = k.data("bgfitend"),
                t = k.data("easeme"),
                u = k.data("duration") / 1e3,
                v = 100;
            r == b && (r = 100), s == b && (s = 100);
            var w = r,
                x = s;
            r = X(r, k, d), s = X(s, k, d), v = X(100, k, d), n == b && (n = 1), o == b && (o = 1), p == b && (p = 0), q == b && (q = 0), 1 > n && (n = 1), 1 > o && (o = 1);
            var y = new Object;
            y.w = parseInt(v.split(" ")[0], 0), y.h = parseInt(v.split(" ")[1], 0);
            var z = !1;
            "1" == v.split(" ")[2] && (z = !0), k.find(".defaultimg").each(function() {
                var b = a(this);
                0 == k.find(".kenburnimg").length ? k.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + b.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + y.w + "%;height:" + y.h + '%;"></div>') : k.find(".kenburnimg img").css({
                    width: y.w + "%",
                    height: y.h + "%"
                });
                var c = k.find(".kenburnimg img"),
                    e = Z(d, l, r, c, z),
                    g = Z(d, m, s, c, z);
                if (z && (e.w = w / 100, g.w = x / 100), f) {
                    punchgs.TweenLite.set(c, {
                        autoAlpha: 0,
                        transformPerspective: 1200,
                        transformOrigin: "0% 0%",
                        top: 0,
                        left: 0,
                        scale: e.w,
                        x: e.x,
                        y: e.y
                    });
                    var h = e.w,
                        j = h * c.width() - d.width,
                        n = h * c.height() - d.height,
                        o = Math.abs(100 * (e.x / j)),
                        p = Math.abs(100 * (e.y / n));
                    0 == n && (p = 0), 0 == j && (o = 0), b.data("bgposition", o + "% " + p + "%"), i(8) || b.data("currotate", $(c)), i(8) || b.data("curscale", y.w * h + "%  " + (y.h * h + "%")), k.find(".kenburnimg").remove()
                } else b.data("kenburn", punchgs.TweenLite.fromTo(c, u, {
                    autoAlpha: 1,
                    force3D: punchgs.force3d,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: e.w,
                    x: e.x,
                    y: e.y
                }, {
                    autoAlpha: 1,
                    rotationZ: q,
                    ease: t,
                    x: g.x,
                    y: g.y,
                    scale: g.w,
                    onUpdate: function() {
                        var a = c[0]._gsTransform.scaleX,
                            e = a * c.width() - d.width,
                            f = a * c.height() - d.height,
                            g = Math.abs(100 * (c[0]._gsTransform.x / e)),
                            h = Math.abs(100 * (c[0]._gsTransform.y / f));
                        0 == f && (h = 0), 0 == e && (g = 0), b.data("bgposition", g + "% " + h + "%"), i(8) || b.data("currotate", $(c)), i(8) || b.data("curscale", y.w * a + "%  " + (y.h * a + "%"))
                    }
                }))
            })
        },
        Z = function(a, b, c, d, e) {
            var f = new Object;
            switch (f.w = e ? parseInt(c.split(" ")[1], 0) / 100 : parseInt(c.split(" ")[0], 0) / 100, b) {
                case "left top":
                case "top left":
                    f.x = 0, f.y = 0;
                    break;
                case "center top":
                case "top center":
                    f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = 0;
                    break;
                case "top right":
                case "right top":
                    f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = 0;
                    break;
                case "center left":
                case "left center":
                    f.x = 0, f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
                    break;
                case "center center":
                    f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
                    break;
                case "center right":
                case "right center":
                    f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
                    break;
                case "bottom left":
                case "left bottom":
                    f.x = 0, f.y = (0 - d.height()) * f.w + parseInt(a.height, 0);
                    break;
                case "bottom center":
                case "center bottom":
                    f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = (0 - d.height()) * f.w + parseInt(a.height, 0);
                    break;
                case "bottom right":
                case "right bottom":
                    f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = (0 - d.height()) * f.w + parseInt(a.height, 0)
            }
            return f
        },
        $ = function(a) {
            var b = a.css("-webkit-transform") || a.css("-moz-transform") || a.css("-ms-transform") || a.css("-o-transform") || a.css("transform");
            if ("none" !== b) var c = b.split("(")[1].split(")")[0].split(","),
                d = c[0],
                e = c[1],
                f = Math.round(Math.atan2(e, d) * (180 / Math.PI));
            else var f = 0;
            return 0 > f ? f += 360 : f
        },
        _ = function(c, d) {
            try {
                var e = c.find(">ul:first-child >li:eq(" + d.act + ")")
            } catch (f) {
                var e = c.find(">ul:first-child >li:eq(1)")
            }
            d.lastslide = d.act;
            var g = c.find(">ul:first-child >li:eq(" + d.next + ")");
            e.find(".slotholder"), g.find(".slotholder"), c.find(".defaultimg").each(function() {
                var c = a(this);
                punchgs.TweenLite.killTweensOf(c, !1), punchgs.TweenLite.set(c, {
                    scale: 1,
                    rotationZ: 0
                }), punchgs.TweenLite.killTweensOf(c.data("kenburn img"), !1), c.data("kenburn") != b && c.data("kenburn").pause(), c.data("currotate") != b && c.data("bgposition") != b && c.data("curscale") != b && punchgs.TweenLite.set(c, {
                    rotation: c.data("currotate"),
                    backgroundPosition: c.data("bgposition"),
                    backgroundSize: c.data("curscale")
                }), c != b && c.data("kenburn img") != b && c.data("kenburn img").length > 0 && punchgs.TweenLite.set(c.data("kenburn img"), {
                    autoAlpha: 0
                })
            })
        },
        ab = function(b, c) {
            return W() && "on" == c.parallaxDisableOnMobile ? !1 : (b.find(">ul:first-child >li").each(function() {
                for (var b = a(this), d = 1; 10 >= d; d++) b.find(".rs-parallaxlevel-" + d).each(function() {
                    var b = a(this);
                    b.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + b.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + c.parallaxLevels[d - 1] + '"></div>')
                })
            }), ("mouse" == c.parallax || "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax) && (b.mouseenter(function(a) {
                var c = b.find(".current-sr-slide-visible"),
                    d = b.offset().top,
                    e = b.offset().left,
                    f = a.pageX - e,
                    g = a.pageY - d;
                c.data("enterx", f), c.data("entery", g)
            }), b.on("mousemove.hoverdir, mouseleave.hoverdir", function(d) {
                var e = b.find(".current-sr-slide-visible");
                switch (d.type) {
                    case "mousemove":
                        var f = b.offset().top,
                            g = b.offset().left,
                            h = e.data("enterx"),
                            i = e.data("entery"),
                            j = h - (d.pageX - g),
                            k = i - (d.pageY - f);
                        e.find(".tp-parallax-container").each(function() {
                            var b = a(this),
                                d = parseInt(b.data("parallaxlevel"), 0) / 100,
                                e = j * d,
                                f = k * d;
                            "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax ? punchgs.TweenLite.to(b, .4, {
                                force3D: "auto",
                                x: e,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(b, .4, {
                                force3D: "auto",
                                x: e,
                                y: f,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        e.find(".tp-parallax-container").each(function() {
                            var b = a(this);
                            "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax ? punchgs.TweenLite.to(b, 1.5, {
                                force3D: "auto",
                                x: 0,
                                ease: punchgs.Power3.easeOut
                            }) : punchgs.TweenLite.to(b, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                }
            }), W() && (window.ondeviceorientation = function(c) {
                var d = Math.round(c.beta || 0),
                    e = Math.round(c.gamma || 0),
                    f = b.find(".current-sr-slide-visible");
                if (a(window).width() > a(window).height()) {
                    var g = e;
                    e = d, d = g
                }
                var h = 360 / b.width() * e,
                    i = 180 / b.height() * d;
                f.find(".tp-parallax-container").each(function() {
                    var b = a(this),
                        c = parseInt(b.data("parallaxlevel"), 0) / 100,
                        d = h * c,
                        e = i * c;
                    punchgs.TweenLite.to(b, .2, {
                        force3D: "auto",
                        x: d,
                        y: e,
                        ease: punchgs.Power3.easeOut
                    })
                })
            })), ("scroll" == c.parallax || "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax) && a(window).on("scroll", function() {
                bb(b, c)
            }), void 0)
        },
        bb = function(b, c) {
            if (W() && "on" == c.parallaxDisableOnMobile) return !1;
            var d = b.offset().top,
                e = a(window).scrollTop(),
                f = d + b.height() / 2,
                g = d + b.height() / 2 - e,
                h = a(window).height() / 2,
                i = h - g;
            if (h > f && (i -= h - f), b.find(".current-sr-slide-visible"), b.find(".tp-parallax-container").each(function() {
                    var c = a(this),
                        d = parseInt(c.data("parallaxlevel"), 0) / 100,
                        e = i * d;
                    c.data("parallaxoffset", e), punchgs.TweenLite.to(c, .2, {
                        force3D: "auto",
                        y: e,
                        ease: punchgs.Power3.easeOut
                    })
                }), "on" != c.parallaxBgFreeze) {
                var k = c.parallaxLevels[0] / 100,
                    l = i * k;
                punchgs.TweenLite.to(b, .2, {
                    force3D: "auto",
                    y: l,
                    ease: punchgs.Power3.easeOut
                })
            }
        },
        cb = function(c, d) {
            var e = c.parent();
            ("thumb" == d.navigationType || "both" == d.navsecond) && e.append('<div class="tp-bullets tp-thumbs ' + d.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
            var f = e.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                g = f.parent();
            g.width(d.thumbWidth * d.thumbAmount), g.height(d.thumbHeight), g.parent().width(d.thumbWidth * d.thumbAmount), g.parent().height(d.thumbHeight), c.find(">ul:first >li").each(function(a) {
                var e = c.find(">ul:first >li:eq(" + a + ")"),
                    g = e.find(".defaultimg").css("backgroundColor");
                if (e.data("thumb") != b) var h = e.data("thumb");
                else var h = e.find("img:first").attr("src");
                f.append('<div class="bullet thumb" style="background-color:' + g + ";position:relative;width:" + d.thumbWidth + "px;height:" + d.thumbHeight + "px;background-image:url(" + h + ') !important;background-size:cover;background-position:center center;"></div>'), f.find(".bullet:first")
            });
            var h = 10;
            f.find(".bullet").each(function(b) {
                var e = a(this);
                b == d.slideamount - 1 && e.addClass("last"), 0 == b && e.addClass("first"), e.width(d.thumbWidth), e.height(d.thumbHeight), h < e.outerWidth(!0) && (h = e.outerWidth(!0)), e.click(function() {
                    0 == d.transition && e.index() != d.act && (d.next = e.index(), j(d, c))
                })
            });
            var i = h * c.find(">ul:first >li").length,
                k = f.parent().width();
            d.thumbWidth = h, i > k && (a(document).mousemove(function(b) {
                a("body").data("mousex", b.pageX)
            }), f.parent().mouseenter(function() {
                var b = a(this),
                    d = b.offset(),
                    e = a("body").data("mousex") - d.left,
                    f = b.width(),
                    g = b.find(".bullet:first").outerWidth(!0),
                    h = g * c.find(">ul:first >li").length,
                    i = h - f + 15,
                    j = i / f;
                b.addClass("over"), e -= 30;
                var k = 0 - e * j;
                k > 0 && (k = 0), 0 - h + f > k && (k = 0 - h + f), eb(b, k, 200)
            }), f.parent().mousemove(function() {
                var b = a(this),
                    d = b.offset(),
                    e = a("body").data("mousex") - d.left,
                    f = b.width(),
                    g = b.find(".bullet:first").outerWidth(!0),
                    h = g * c.find(">ul:first >li").length - 1,
                    i = h - f + 15,
                    j = i / f;
                e -= 3, 6 > e && (e = 0), e + 3 > f - 6 && (e = f);
                var k = 0 - e * j;
                k > 0 && (k = 0), 0 - h + f > k && (k = 0 - h + f), eb(b, k, 0)
            }), f.parent().mouseleave(function() {
                var b = a(this);
                b.removeClass("over"), db(c)
            }))
        },
        db = function(a) {
            var b = a.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                c = b.parent(),
                e = (c.offset(), c.find(".bullet:first").outerWidth(!0)),
                f = c.find(".bullet.selected").index() * e,
                g = c.width(),
                e = c.find(".bullet:first").outerWidth(!0),
                h = e * a.find(">ul:first >li").length,
                k = 0 - f;
            k > 0 && (k = 0), 0 - h + g > k && (k = 0 - h + g), c.hasClass("over") || eb(c, k, 200)
        },
        eb = function(a, b) {
            punchgs.TweenLite.to(a.find(".tp-thumbcontainer"), .2, {
                force3D: "auto",
                left: b,
                ease: punchgs.Power3.easeOut,
                overwrite: "auto"
            })
        }
}(jQuery);
