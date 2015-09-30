/**
 * Created by cmhvip on 2015/8/21.
 * MY PERSONAL WEBSITE:http://www.cmhvip.com/
 */
//nav滚动监听显示或隐藏
$(function () {
    var winHeight = $(document).scrollTop();

    $(window).scroll(function () {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
        if (scrollY > 100) { //如果滚动距离大于100px则显示
            $('nav').addClass('showed');
            $("a.nav").addClass('showed_a');
            $('.hid').addClass('showed_logo');
            $('a.hid').removeClass('hid');
            $("ul.nav-group").addClass('fa fa-navicon fa-2x');
            $(".move3").addClass("move_up");
        } else {
            $('nav').removeClass('showed');
            $('a').addClass('showed_a');
            $('.hid').addClass('showed_a');

        }
        if (scrollY > winHeight) { //如果没滚动到顶部，删除显示类，否则添加显示类
            $('nav').removeClass('hiddened');
        }
        else {
            $('nav').addClass('hiddened');
        }
    });
});
//点击事件处理
$(document).ready(function () {
    $("nav").click(function () {
        $("ul li").toggle('slow');

    });
    $(".myself").click(function () {
       $(".myself").addClass("rotamyself");

    });
});
//滚动监听调用 animation动画
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;

    if (t >= 500) {
        $(".move3").addClass("move_up");
        $(".move2").addClass("move_up");
        $(".green").addClass("hr_green");
        $(".item").addClass("item_move_down");
    } else {
        $(".move3").removeClass("move_up");
        $(".move2").removeClass("move_up");
        $(".green").removeClass("hr_green");
        $(".item").removeClass("item_move_down");
    }
    if (t >= 900) {
        $(".moveimg1").addClass("moveimgone");
        $(".movetext1").addClass("movetextone");

    }
    else {
        $(".moveimg1").removeClass("moveimgone");
        $(".movetext1").removeClass("movetextone");
    }
    if (t >= 1300) {
        $(".moveimg2").addClass("moveimgtow");
        $(".movetext2").addClass("movetexttow");
    }
    else {
        $(".moveimg2").removeClass("moveimgtow");
        $(".movetext2").removeClass("movetexttow");
    }
    if (t >= 1500) {
        $(".cardh2").addClass("card2_cmh");
        $(".cardhr").addClass("cardhr2_cmh");
        $(".cardtext").addClass("cardtext2_cmh");
        $(".cardone").addClass("card1");
        $(".cardtow").addClass("card2");
        $(".cardthree").addClass("card3");
        $(".cardfour").addClass("card4");
    }
    else {
        $(".cardh2").removeClass("card2_cmh");
        $(".cardhr").removeClass("cardhr2_cmh");
        $(".cardtext").removeClass("cardtext2_cmh");
        $(".cardone").removeClass("card1");
        $(".cardtow").removeClass("card2");
        $(".cardthree").removeClass("card3");
        $(".cardfour").removeClass("card4");
    }
    if (t >= 2000) {

        $(".info-wrap>*").addClass("card3");
    }
    else {
        $(".info-wrap>*").removeClass("card3");
    }
    if (t >= 2400) {

        $(".wrap").addClass("card3");
    }
    else {
        $(".wrap").removeClass("card3");
    }

}


/*右侧导航滚动跳转并加载动画*/
$(function () {
    $(".index").click(function () {
        $.scrollTo('#banner', 500);

    });
    $(".goodness").click(function () {
        $.scrollTo('#goodness', 800);


    });
    $(".demo_show").click(function () {
        $.scrollTo('#demo', 1000);


    });
    $(".about_me").click(function () {
        $.scrollTo('#about', 1200);


    });
    $(".content_me").click(function () {
        $.scrollTo('#content', 1500);

    });
});

/*
 button事件*/

$(document).ready(function () {
    $(".down").click(function () {
        $.scrollTo('#goodness', 500);
    });
});
/*
//音乐控件
var lanren = {
    changeClass: function (target, id) {
        var className = $(target).attr('class');
        var ids = document.getElementById(id);
        (className == 'on')
            ? $(target).removeClass('on').addClass('off')
            : $(target).removeClass('off').addClass('on');
        (className == 'on')
            ? ids.pause()
            : ids.play();
    },
    play: function () {
        document.getElementById('media').play();
    }
}
lanren.play();*/







