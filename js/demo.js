$(function(){


    // 历史消息弹层动画
    var $showRecord = $('.js-toggle-record');
    var $closeRecord = $('.js-close-msg');
    var $msgHistory = $('.js-msg-history');
    $showRecord.click(function(){
        $(this).toggleClass('on');

        if($msgHistory.hasClass('fadeOutL')){
            $msgHistory.removeClass('fadeOutL').addClass('fadeInL');
        }else{
            $msgHistory.removeClass('fadeInL').addClass('fadeOutL');
        }
    });

    $closeRecord.click(function(){
        $msgHistory.removeClass('fadeInL').addClass('fadeOutL');
        $showRecord.toggleClass('on');
    });


    // 筛选动画
    var $searchRecord = $('.js-search-record');
    var $recordDetail = $searchRecord.parents('.msg-history').find('.msg-history-bd');
    var $filterArea = $('.filter-area');
    $searchRecord.click(function(){

        if($filterArea.hasClass('fadeOutB')){
            $recordDetail.height(525);
            $filterArea.removeClass('fadeOutB').addClass('fadeInB');
        }else{
            $recordDetail.height(555);
            $filterArea.removeClass('fadeInB').addClass('fadeOutB');
        }
    });


    // 弹出层tab
    var tabMenu = $('.js-tab li');
    tabMenu.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var tabIndex = tabMenu.index(this);
        $('.tab-con > div').eq(tabIndex).show().siblings().hide();
        $('.prod-tab-con > div').eq(tabIndex).show().siblings().hide();
    });

})