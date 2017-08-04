$(function(){


    // 历史消息弹层动画
    var $showRecord = $('.js-toggle-record');
    var $closeRecord = $('.js-close-msg');
    var $msgHistory = $('.js-msg-history');
    $showRecord.click(function(){

        if($msgHistory.hasClass('fadeOutL')){
            $msgHistory.removeClass('fadeOutL').addClass('fadeInL');
        }else{
            $msgHistory.removeClass('fadeInL').addClass('fadeOutL');
        }
    });

    $closeRecord.click(function(){
        $msgHistory.removeClass('fadeInL').addClass('fadeOutL');
    });


    // 筛选动画
    var $searchRecord = $('.js-seach-record');
    var $filterArea = $('.filter-area');
    $searchRecord.click(function(){

        if($filterArea.hasClass('fadeOutB')){
            $filterArea.removeClass('fadeOutB').addClass('fadeInB');
        }else{
            $filterArea.removeClass('fadeInB').addClass('fadeOutB');
        }
    });

})