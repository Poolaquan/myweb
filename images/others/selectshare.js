$(function() {
    //图片导入方法
     inputimage();
   
    //一些样式
    $('.img_share').css({
        display : 'none',
        position : 'absolute',
        cursor : 'pointer'
    });
   
    //对文件进行选中
    var funGetSelectTxt = function() {
        var txt = '';
        if(document.selection) {
            txt = document.selection.createRange().text;
        } else {
            txt = document.getSelection();
        }
        return txt.toString();
    };
   
    //显示图片
    $('html,body').mouseup(function(e) {
        if (e.target.id == 'imgSinaShare' || e.target.id == 'imgQqShare') {
            return
        }
        e = e || window.event;
        var txt = funGetSelectTxt(),
            sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40,
            top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
        if (txt) {
            $('#imgSinaShare').css({
                display : 'inline',
                left : left,
                top : top+50
            });
            $('#imgQqShare').css({
                display : 'inline',
                left : left + 30,
                top : top+50
            });
        } else {
            $('#imgSinaShare').css('display', 'none');
            $('#imgQqShare').css('display', 'none');
        }
    });
   
    //分享到新浪
    $('#imgSinaShare').click(function() {
        var txt = funGetSelectTxt(), title = $('title').html();
        if (txt) {
            window.open('http://v.t.sina.com.cn/share/share.php?title=' + txt + ' —— 分享自：' + title + '&url=' + window.location.href);
        }
    });
	   
    //分享到QQ微博
    $('#imgQqShare').click(function() {
        var txt = funGetSelectTxt(), title = $('title').html();
        if (txt) {
            window.open('http://v.t.qq.com/share/share.php?title=' + encodeURIComponent(txt + ' —— 分享自：' + title) + '&url=' + window.location.href);
        }
    });
})	