﻿function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    return false;
}
(function () {
    function whichTransitionEvent() {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
    function redirect(url, method, exData) {
        var form = document.createElement('form');
        form.method = method;
        form.action = url;
        //
        var input = document.createElement('input'), postData = exData || {};
        input.type = "hidden";
        input.name = "pricekm";
        //
        postData['ncc'] = 'phucky'; postData['id'] = encodeURIComponent(window.location.href);
        input.value = JSON.stringify(postData);
        //
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    };

    _xxug0b('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css', 'css', function () {
        _xxug0b('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js', 'js', function () {
            var thumbs = document.querySelector('.gallery-thumbs'),
                rawI = thumbs.getAttribute('data-imgs').split(','), orderURL = 'http://phucky.dnd.vn';// 'http://192.168.1.91:10996/phucky'; 
            n$EL = document.createElement("div");
            n$EL.innerHTML = '<div id="btnDatHang" class="wrapper" style="right:10px"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>';//
            thumbs.parentNode.insertBefore(n$EL.childNodes[0], thumbs.previousElementSibling);
            //
            var testLoad = '';
            for (var i = 0; i < rawI.length; i++) {
                testLoad += '<div data-src="' + rawI[i] + '" class="swiper-slide"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>';
            };
            thumbs.innerHTML = '<div class="swiper-wrapper">' + testLoad + '</div>';
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                slidesPerView: 5,
                preloadImages: false,
                lazyLoading: true,
                loop: false,
                freeMode: false,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            }), galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 10,
                loop: false,
                preloadImages: false,
                lazyLoading: true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
            }), fadeEnd = function () {

            };
            n$EL.innerHTML = '<div class="kmribbon noselect"><div class="starburst3"><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></div><span class="dis">GIÁ<div style="font-size: 30px">25.000đ</div>FREE SHIP</span></div>';
            thumbs.parentNode.appendChild(n$EL.childNodes[0]);
            //
            var version = detectIE(), gamelist = '';
            gamelist += '<div class="wrapper" style="right:10px;top:unset;bottom:0px">' +
                        '<ul id="gameitem" style="display:none" class="my-nav my-nav--list">' +
                            '<div id="wrapper-templates">';
            if (true || version === false || version >= 12) {
                gamelist += '<li class="my-nav__item"><a id="giftbox" class="my-nav__link my-nav__link--template">Mở hộp tìm quà</a> </li>';
            };
            gamelist += '<li class="my-nav__item"><a id="find02imgs" class="my-nav__link my-nav__link--template">Lật hình tìm 02 món ăn giống nhau</a> </li>' +
                                        '</div>' +
                                    '</ul>' +
                                    '<a href="javascript:void(0)" id="gamemenu" class="fancy-button bg-gradient2"><span>GAME</span></a>' +
                                '</div>';
            n$EL.innerHTML = gamelist;
            thumbs.parentNode.appendChild(n$EL.childNodes[0]);
            //
            //ld.addEventListener('animationend', fadeEnd);
            //ld.classList.add('fadeOut');

            var gamemenu = document.getElementById('gamemenu'), gameitem = document.getElementById('gameitem');
            document.addEventListener("click", function () {
                gameitem.style.display = 'none';
            });
            gamemenu.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var ht = gameitem.style.display;
                gameitem.style.display = (ht == '') ? 'none' : '';
            });

            var back, transTO,
                transname = whichTransitionEvent()
                , evtEnd = function () {
                    clearTimeout(transTO);
                    //
                    var that = this.split('|');
                    transTO = setTimeout(function () {
                        back.removeEventListener(transname, evtEnd);
                        if (that[0] == '0') {
                            var iframe = back.appendChild(document.createElement('iframe'));
                            iframe.style.cssText = "border:none;background: linear-gradient(to left,dodgerblue,#345)";
                            iframe.scrolling = "no";
                            iframe.onload = function () {
                                setTimeout(function () {
                                    iframe.contentWindow.trochoi({
                                        cb: function (act, jData) {
                                            if (act == 'BACK') {
                                                back.addEventListener(transname, evtEnd.bind('1'));
                                                document.querySelector('#flip-toggle').classList.toggle('hoverx');
                                            } else {
                                                redirect(orderURL, 'post', jData);
                                            }
                                        }
                                        , apiURI: "http://brickapi.dnd.vn/api/githubcom/"// http://192.168.1.91:2432/api
                                    });
                                }, 100);
                            };
                            iframe.src = '../games/' + that[1] + '/index.html?v=' + (new Date()).getTime();
                        } else {
                            back.innerHTML = '';
                        }
                    }, 300);
                }
            gameitem.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (e.target.id == 'find02imgs') {
                    back.addEventListener(transname, evtEnd.bind('0|find02imgs'));
                    document.querySelector('#flip-toggle').classList.toggle('hoverx');
                    gameitem.style.display = 'none';
                } else if (e.target.id == 'giftbox') {
                    back.addEventListener(transname, evtEnd.bind('0|giftbox'));
                    document.querySelector('#flip-toggle').classList.toggle('hoverx');
                    gameitem.style.display = 'none';
                }
            });
            //
            n$EL.innerHTML = '<div class="back iframe-wrapper"></div>'; back = n$EL.childNodes[0];
            var frnt = thumbs.parentNode;
            frnt.parentNode.appendChild(back);
            frnt.classList.add('woodbg');
            setTimeout(function () {
                document.body.style.background = "#222";
                var bgImage = new Image();
                var imgs = thumbs.querySelectorAll('.swiper-slide'), loadcount = 0;
                for (var i = 0; i < imgs.length; i++) {
                    (function (atthumb, index) {
                        var downloadingImage = new Image(), dummy = '?v=' + (new Date()).getTime();
                        if (index == 0) dummy = '';
                        downloadingImage.onload = function () {
                            atthumb.innerHTML = '';
                            atthumb.style.background = 'url(' + this.src + ')';
                            loadcount += 1;
                            if (loadcount == imgs.length) {
                                var playgame = "<div class='button'>Chơi Game!" +
"<div class='parrot'>Mini game</div>" +
"<div class='parrot'>Giam gia!</div>" +
"<div class='parrot'>Tro choi</div>" +
"<div class='parrot'>Giam gia!</div>" +
"<div class='parrot'>Khuyen mai</div>" +
"<div class='parrot'>Giai tri</div>" +
"</div>" +
"</div>";
                                for (var i = 1; i < imgs.length; i++) {
                                    var hinh = imgs[i].getAttribute('data-src'), nut = '', gamename = '';
                                    if (hinh.indexOf('find02imgs') != -1) {
                                        gamename = 'find02imgs';
                                    } else if (hinh.indexOf('giftbox') != -1) {
                                        if (version === false || version >= 12) {
                                            gamename = 'giftbox';
                                        };
                                    };
                                    if (gamename != '') {
                                        nut = "<div class='button-parrot' onclick=document.getElementById('" + gamename + "').click()>" + playgame;
                                    };
                                    galleryTop.appendSlide(['<div class="swiper-slide" style="background-image:url(' + hinh + '?v=' + (new Date()).getTime() + ')">' + nut + '</div>']);
                                }
                            }
                        };
                        downloadingImage.src = atthumb.getAttribute('data-src') + dummy;
                    })(imgs[i], i);
                }
            }, 1000);
            //
            if (lcDB && lcDB.hasOwnProperty('gio')) {
                var atD = new Date();
                var fh = new Date(); fh.setHours(0); fh.setMinutes(0); fh.setSeconds(0);
                var th = new Date(); th.setHours(0); th.setMinutes(0); th.setSeconds(0);
                var t = lcDB['gio'][atD.getDay()], tu = t[0].split(':'), den = t[1].split(':');
                fh = fh.setMinutes(60 * parseInt(tu[0]) + parseInt(tu[1])); fh = new Date(fh);
                th = th.setMinutes(60 * parseInt(den[0]) + parseInt(den[1])); th = new Date(th);
                var btnDatHang = document.getElementById('btnDatHang'), dathangClick = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    redirect(orderURL, 'post');
                }, trackhwnd, dotrack = function () {
                    clearTimeout(trackhwnd);
                    comsvr({}, function (data) {
                        atD = new Date();
                        if (fh <= atD && atD <= th) {
                            btnDatHang.classList.remove('nghiban');
                            if (!btnDatHang.querySelector('#placeorder')) {
                                btnDatHang.innerHTML = '<a href="javascript:void(0)" id="placeorder" class="fancy-button bg-gradient1"><span style="padding:8px 12px;white-space:nowrap;font-size: larger;">MỜI ĐẶT CƠM</span></a>';
                                btnDatHang.addEventListener('click', dathangClick);
                            };
                        } else {
                            btnDatHang.removeEventListener('click', dathangClick);
                            btnDatHang.innerHTML = '';
                            btnDatHang.classList.add('nghiban');
                        };
                        trackhwnd = setTimeout(function () { dotrack(); console.log('dotrack()' + atD); }, 30000);
                    });
                };
                dotrack();
            }
        });
    });

    function comsvr(args, cb) {
        var xhr = new XMLHttpRequest(), url = "jdata/sp.json";//http://localhost:3165 "url?data=" + encodeURIComponent(JSON.stringify({ "email": "hey@mail.com", "password": "101010" }));
        xhr.open('GET', url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();

        // 4. This will be called after the response is received
        xhr.onload = function () {
            if (xhr.status != 200) { // analyze HTTP status of the response
                cb({ 'kq': 'ng', 'status': xhr.status, 'statusTex': xhr.statusText });// e.g. 404: Not Found
            } else { // show the result
                var json = JSON.parse(xhr.responseText);
                json['kq'] = 'ok';
                cb(json);
            }
        };
        xhr.onerror = function () {
            cb({ 'kq': 'err' });
        };
    }

})();

