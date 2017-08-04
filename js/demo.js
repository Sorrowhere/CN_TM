$(function(){

    var $showRecord = $('.js-toggle-record');
    var $closeRecord = $('.js-close-msg');
    var $msgHistory = $('.js-msg-history');
    $showRecord.click(function(){
        $msgHistory.removeClass('fadeOut').addClass('fadeIn');
    }, function(){
        $msgHistory.removeClass('fadeIn').addClass('fadeOut');
    });
    $closeRecord.click(function(){
        $msgHistory.removeClass('fadeIn').addClass('fadeOut');
    });
})