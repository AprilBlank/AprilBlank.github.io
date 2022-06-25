$(function () {

    var pageInfo = '\r\n---------------------\r\n著作权归作者所有。\r\n'
        + '商业转载请联系作者获得授权，非商业转载请注明出处。\r\n'
        + '作者：AprilBlank \r\n原文地址：https://www.aprilblank.top/\r\n'
        + '© 版权声明：本文为博主原创文章，转载请附上博文链接！';

    document.addEventListener('copy', function (ev) {
        let clipboardData = ev.clipboardData || window.clipboardData;
        if (!clipboardData) return;
        let text = window.getSelection().toString();
        // console.log(text);
        if (text && text.length > 20) {
            let copyRightStr = (text + pageInfo).replace(/\n/g, '\r\n'); // Solve the line breaks conversion issue
            ev.preventDefault();
            ev.clipboardData.setData('text/plain', `${copyRightStr}`);
        }
    });
});