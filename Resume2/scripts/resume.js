/**
 * Created by 95 on 2017/6/13.
 */
$(function(){
    $('#myContainer').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        afterLoad:function(anchorLink, index){
            switch(index){
                case 1 : aboutAniStart();
                    break;
                case 2 : skillAniStart();
                    break;
                case 3 : projectAniStart();
                    break;
                case 4 : contactAniStart();
                    break;
                default : return 0;
            }
        },
        onLeave : function(index, nextIndex){
            switch(index){
                case 1 : aboutAniEnd();
                    break;
                case 2 : skillAniEnd();
                    break;
                case 3 : projectAniEnd();
                    break;
                case 4 : contactAniEnd();
                    break;
                default : return 0;
            }
        }
    });

    $('#nav-btn').click(function(){
        $('.nav-list').slideToggle();
    });

    //--关于我--开始动画
    function aboutAniStart(){
        $('.aboutMe .head').animate({
            "opacity" : "1"
        },1000);

        $('.aboutMe .info,.aboutMe .description').slideDown();
        titleAniStart();

       // $('.aboutMe .description').slideDown();
    }

    //--关于我--结束动画
    function aboutAniEnd(){
        $('.aboutMe .head').animate({
            "opacity" : "0"
        },500);

        $('.aboutMe .info,.aboutMe .description').slideUp();
        titleAniEnd();
    }

    //--专业技能--开始动画
    function skillAniStart(){
        $('#html').animate({
            "width": "90%"
        },1000);
        $('#css').animate({
            "width": "93%"
        },1000);
        $('#javascript').animate({
            "width": "86%"
        },1000);
        $('#jQuery').animate({
            "width": "80%"
        },1000);
        $('#Bootstrap').animate({
            "width": "75%"
        },1000);
        $('#PhotoShop').animate({
            "width": "83%"
        },1000);
        titleAniStart();
    }

    //--专业技能--结束动画
    function skillAniEnd(){
        $('#html').animate({
            "width": "0"
        },500);
        $('#css').animate({
            "width": "0"
        },500);
        $('#javascript').animate({
            "width": "0"
        },500);
        $('#jQuery').animate({
            "width": "0"
        },500);
        $('#Bootstrap').animate({
            "width": "0"
        },500);
        $('#PhotoShop').animate({
            "width": "0"
        },500);
        titleAniEnd();
    }

    //--作品展示--开始动画
    function projectAniStart(){
        $('.project-con').slideDown();
        titleAniStart();
    }

    //--作品展示--结束动画
    function projectAniEnd(){
        $('.project-con').slideUp();
        titleAniEnd();
    }

    //--联系方式--开始动画
    function contactAniStart(){
        $('.c').fadeIn();
        titleAniStart();
    }

    //--联系方式--结束动画
    function contactAniEnd(){
        $('.c').fadeOut();
        titleAniEnd();
    }

    //--标题--开始动画
    function titleAniStart(){
        $('.title').animate({
            borderBottomWidth : '8px'
        },500)
    }

    //--标题--结束动画
    function titleAniEnd(){
        $('.title').animate({
            borderBottomWidth : '0'
        },500)
    }

    //--初始化--开始动画
    function initAni(){
        projectAniEnd();
        aboutAniStart();
    }

    initAni();
});