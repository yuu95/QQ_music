$(function () {    //0 初始化自定义滚动条    $(".content_list").mCustomScrollbar();    // 1.监听歌曲的移入移出事件    $(".content_list").delegate('.list_music','mouseenter',function () {        // 1.1 显示子菜单        $(this).find(".list_menu").stop().css({"display":"inline-block"});        // 1.2显示删除图标        $(this).find(".list_time a").stop().css({"display":"inline-block"});        // 1.3 隐藏时长        $(this).find(".list_time span").stop().css({"display":"none"});    });    $('.content_list').delegate('.list_music','mouseleave',function () {        // 2.1隐藏子菜单        $(this).find(".list_menu").stop().css({"display":"none"});        // 2.2 隐藏删除图标        $(this).find(".list_time a").stop().css({"display":"none"});        // 显示时长        $(this).find(".list_time span").stop().css({"display":"inline-block"})    })    // 2. 监听复选框的点击事件    $(".list_check").click(function (e) {        $(this).toggleClass("list_checked");            });    getPlayerList();    // 3.加载歌曲列表    function getPlayerList() {        $.ajax({            url:'./source/musiclist.json',            dataType:'json',            success:function (data) {                  // 3.1 遍历获取到的数据，创建每一条音乐                var $musicList = $('.content_list ul');                $.each(data,function (index,ele) {                    var $item = createMusicITem(index,ele);                    $musicList.append($item);                })            },            error:function (e) {                console.log(e);            }        });    }    // 定义创建音乐的方法    function createMusicITem(index,music) {        var $item = $('<li class="list_music">\n' +                            '<div class="list_check"> <i></i></div>\n' +                            '<div class="list_number">'+(index+1)+'</div>\n' +                            '<div class="list_name">'+music.name+'\n' +                                '<div class="list_menu">\n' +                                    '<a href="javascript;" title="播放"></a>\n' +                                    '<a href="javascript;" title="添加"></a>\n' +                                    '<a href="javascript;" title="下载"></a>\n' +                                    '<a href="javascript;" title="分享"></a>\n' +                                '</div>\n' +                            '</div>\n' +                            '<div class="list_singer">'+music.singer+'</div>\n' +                            '<div class="list_time">\n' +                                '<span>'+music.time+'</span>\n' +                                '<a href="javascript;" title="删除"></a>\n' +                            '</div>\n' +                       '</li>');        return $item;    }});