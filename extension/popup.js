// setTimeout(function(){
// 	baocao();
// 	alert(123)
// }, 10000);


function baocao(id,client_id) {
    var html='<li class="_54ni __MenuItem duyen_click" data-client_id="'+client_id+'" data-duyen="true" role="presentation" data-ft="{&quot;tn&quot;:&quot;W&quot;}">\n' +
        '\t<a class="_54nc" href="" rel="async-post" data-ft="{&quot;tn&quot;:&quot;W&quot;}" role="menuitem" title="Gửi phản hồi về người dùng này.Bạn cũng có thể báo cáo bài viết sau khi phản hồi">\n' +
        '\t\t<span>\n' +
        '\t\t\t<span class="_54nh">\n' +
        '\t\t\t\t<div class="_2ezu" title="Gửi phản hồi về người dùng này">\n' +
        '\t\t\t\t\t<i class="_2ezv _2hp_ img sp_SsxKfX-dWKB sx_398b51"></i>\n' +
        '\t\t\t\t\t<i class="_2ezw _4goy img sp_SsxKfX-dWKB sx_6bdba2"></i>\n' +
        '\t\t\t\t\t<div class="_2ezx">\n' +
        '\t\t\t\t\t\t<div class="_2ezy">Gửi phản hồi người dùng này</div>\n' +
        '\t\t\t\t\t\t<div class="_2ezz">Bạn cũng có thể báo cáo người dùng sau khi phản hồi</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t</span>\n' +
        '\t\t</span>\n' +
        '\t</a>\n' +
        '</li>'
    $('div[data-ownerid=' + id + ']').find('ul:last-child').first().append(html);
    console.log('baocao')
}

$(document).on('click', '._6a', function (e) {
    var ownerid = $(this).find('a').attr('id');

    var str_id = $(this).parent().parent().find('.fwb').find('a').attr('data-hovercard');
        res = str_id.split("?");
        res = res[1].split("&");
        res = res[0].split("=");
    var client_id=res[1];


    var is_check_append=$('div[data-ownerid=' + ownerid + ']').find('li[data-duyen=true]').length;
   if(is_check_append == 0){
       setTimeout(function () {
           baocao(ownerid,client_id)
       }, 50);

   }

})

$(document).on('click', '.duyen_close_popup', function (e) {
    $(".duyen_popup").remove();

})

$(document).on('click', '.duyen_click', function (e) {
    var str_pro_id =$("._1qv9").find('img').attr('id');
    res =str_pro_id.split("_");
    var profile_id=res[3];
    var client_id=$(this).data('client_id');

    html='<div class="_10 _d2i uiLayer _4-hy _3qw duyen_popup" style="opacity: 1; min-width: 1262.26px;">\n' +
        '\t<div class="_3ixn"></div>\n' +
        '\t<div class="_59s7" role="dialog" aria-label="Nội dung hộp thoại" style="width: 448px; margin-top: 235px;"><div class="_4t2a" data-testid="tag_selection_dialog">\n' +
        '\t\t<div>\n' +
        '\t\t\t<div>\n' +
        '\t\t\t\t<div>\n' +
        '\t\t\t\t\t<div class="_61mx">\n' +
        '\t\t\t\t\t\t<div class="_1py_ _1rb6" style="background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 16px 32px 2px;">\n' +
        '\t\t\t\t\t\t\t<span class="layerCancel duyen_close_popup _2ph_ _6ued" style="height: 16px; width: 16px;">\n' +
        '\t\t\t\t\t\t\t\t<button class="_42d_ _32qq _3n5r layerCancel" type="button" tabindex="0" style="height: 16px; width: 16px;">\n' +
        '\t\t\t\t\t\t\t\t\t<span class="accessible_elem ">Đóng</span><span aria-hidden="true" class="_3n5s" style="margin-left: -8px; margin-top: -8px;"><i size="16" alt="" class="img sp_387n34yO1ZQ sx_4a8f3d"></i>\n' +
        '\t\t\t\t\t\t\t\t\t</span>\n' +
        '\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t</span>\n' +
        '\t\t\t\t\t\t\t<div class="_jmh" style="letter-spacing: normal; color: rgb(28, 30, 33); font-size: 12px; font-family: Arial, sans-serif; line-height: 16px;">\n' +
        '\t\t\t\t\t\t\t\t<div class="_3lxv" data-hover="tooltip" data-tooltip-display="overflow" style="background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(218, 221, 225); padding: 12px 44px 12px 16px;">\n' +
        '\t\t\t\t\t\t\t\t\t<div class="_3qn7 _61-3 _2fyi _3qng">\n' +
        '\t\t\t\t\t\t\t\t\t\t<div class="_3lxw"><div class="_3qn7 _61-0 _2fyi _3qng">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<div aria-level="1" class="ellipsis" role="heading" style="letter-spacing: normal; font-size: 16px; font-weight: bold; font-family: Arial, sans-serif; line-height: 20px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<div class="_6u30">Gửi phản hồi về bài viết này</div>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t\t\t<div>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t<div class="_2xaj"><form class="_5vhe">\n' +
        '\t\t\t\t\t\t\t\t<div>\n' +
        '\t\t\t\t\t\t\t\t\t<div class="_3y3p _3qn7 _61-0 _2fyi _3qng">\n' +
        '\t\t\t\t\t\t\t\t\t\t<img class="_3hj5 img" src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/feedback_filled_24_artillery-orange.png" alt="">\n' +
        '\t\t\t\t\t\t\t\t\t\t<div class="_3hj6">Dựa trên phản hồi của bạn, chúng tôi sẽ phát hiện được nếu có gì đó không ổn.</div>\n' +
        '\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t<div>\n' +
        '\t\t\t\t\t\t\t\t\t<div class="_1730">\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_nudity" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Ảnh khỏa thân</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_violence" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Bạo lực</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_harassment" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Quấy rối</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_suicide" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Tự tử/Tự gây thương tích</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_false_news" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Tin giả</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_spam" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Spam</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_unauthorized_sales" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Bán hàng trái phép</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_hate_speech" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Ngôn từ gây thù ghét</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="tag_terrorism" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Khủng bố</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t<button class="_6s-6" data-testid="__tag_search__" role="checkbox" aria-checked="false">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<i class="_6ti0 img sp_WgSxzUmJMrU sx_e34f43" alt=""></i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 18px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">Khác</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t<div>\n' +
        '\t\t\t\t\t\t\t\t\t<div class="_59ry"><div class="_3qn7 _61-0 _2fyi _3qng">\n' +
        '\t\t\t\t\t\t\t\t\t\t<div class="_2pik">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<i alt="" class="img sp_WgSxzUmJMrU sx_87f2d2"></i>\n' +
        '\t\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t\t\t<span class="_67pz">Nếu bạn nhận thấy ai đó uy tín hoặc lừa đảo, đừng chần chừ mà hãy báo ngay cho mọi người.</span>\n' +
        '\t\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t</form>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t\t<div class="_4iyh _2pia _2pi4" style="border-top: 1px solid rgb(218, 221, 225);">\n' +
        '\t\t\t\t\t<span class="ellipsis"></span>\n' +
        '\t\t\t\t\t<span class="_4iyi">\n' +
        '\t\t\t\t\t\t<div style="display: inline-block;">\n' +
        '\t\t\t\t\t\t\t<div style="display: inline-block;">\n' +
        '\t\t\t\t\t\t\t\t<button data-testid="tag_selection_dialog_submit_button" type="submit" aria-disabled="true" class="_271k _271m _271n _1qjd" style="letter-spacing: normal; color: rgb(255, 255, 255); font-size: 12px; font-weight: bold; font-family: Arial, sans-serif; line-height: 26px; text-align: center; background-color: rgb(170, 201, 255); border-color: rgb(170, 201, 255); height: 28px; padding-left: 11px; padding-right: 11px; background-clip: padding-box;">\n' +
        '\t\t\t\t\t\t\t\t\t<div class="_43rl">\n' +
        '\t\t\t\t\t\t\t\t\t\t<div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<div class="_6u30">Gửi</div></div></div></button></div></div></span></div></div></div></div></div></div></div></div></div>';

    $('body').append(html);







})

