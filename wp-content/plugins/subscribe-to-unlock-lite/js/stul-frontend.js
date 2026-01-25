
jQuery(document).ready(function ($) {
    "use strict";
    function stul_unlock_by_js() {
        if ($('.stul-popup-innerwrap').length > 0 && stul_getCookie('stul_unlock_check') == 'yes') {
            $('.stul-popup-innerwrap').remove();
        }
        if ($('.stul-lock-content').length > 0 && stul_getCookie('stul_unlock_check') == 'yes') {
            $('.stul-lock-content').show();
        }
        if ($('.stul-blur-overlay').length > 0 && stul_getCookie('stul_unlock_check') == 'yes') {
            $('.stul-blur-overlay').remove();
            $('.stul-content-locked').removeClass('stul-content-locked');
        }
    }
    stul_unlock_by_js();
    var countdown_timer = '';

    function stul_setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        return true;
    }

    function stul_getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function closePageLockPopup() {
        if ($('.stul-countdown-popup').length > 0) {
            $('.stul-countdown-popup').fadeOut(500);
        }
    }
    /**
     * Form Submission
     * 
     * @since 1.0.0
     */
    $('body').on('submit', '.stul-subscription-form', function (e) {
        e.preventDefault();
        var selector = $(this);
        var form_alias = $(this).data('form-alias');
        var form_data = $(this).serialize();
        $.ajax({
            type: 'post',
            url: stul_frontend_obj.ajax_url,
            data: {
                form_data: form_data,
                _wpnonce: stul_frontend_obj.ajax_nonce,
                action: 'stul_form_process_action',
                form_alias: form_alias
            },
            beforeSend: function (xhr) {
                selector.find('.stul-form-message').slideUp(500);
                selector.find('.stul-form-loader-wraper').show();
            },
            success: function (res) {
                selector.find('.stul-form-loader-wraper').hide();
                res = $.parseJSON(res);
                if (res.status == 200) {
                    selector[0].reset();
                    if (res.verification_type != 'none') {
                        if (res.verification_type == 'link') {
                            selector.find('.stul-form-message').removeClass('stul-error').addClass('stul-success').html(res.message).slideDown(500);
                        } else {
                            selector.hide();
                            selector.parent().find('.stul-unlock-form-wrap').show().data('unlock-key', res.unlock_key);
                        }
                    } else {
                        selector.closest('.stul-main-outer-wrap').find('.stul-blur-overlay').fadeOut(200, function () {
                            selector.closest('.stul-main-outer-wrap').removeClass('stul-content-locked').addClass('stul-content-unlocked');
                            selector.closest('.stul-main-outer-wrap').find('.stul-lock-content').show();
                            stul_setCookie('stul_unlock_check', 'yes', 365);
                            closePageLockPopup();
                            $(this).remove();
                        });
                    }
                } else {
                    selector.find('.stul-form-message').removeClass('stul-success').addClass('stul-error').html(res.message).slideDown(500);
                }
            }
        });
    });

    $('body').on('click', '.stul-unlock-button', function () {
        var selector = $(this);
        var unlock_key = $(this).closest('.stul-unlock-form-wrap').data('unlock-key');
        var unlock_code = $(this).closest('.stul-unlock-form-wrap').find('.stul-unlock-code-field').val();
        unlock_code = unlock_code.trim();
        if (unlock_key == unlock_code) {
            $(this).closest('.stul-main-outer-wrap').find('.stul-blur-overlay').fadeOut(500, function () {
                selector.closest('.stul-main-outer-wrap').removeClass('stul-content-locked').addClass('stul-content-unlocked');
                if (!selector.closest('.stul-main-outer-wrap').find('.stul-lock-content').is(':visible')) {
                    selector.closest('.stul-main-outer-wrap').find('.stul-lock-content').show();
                }
                stul_setCookie('stul_unlock_check', 'yes', 365);
                stul_setCookie('stul_unlock_check', 'yes', 365);
                closePageLockPopup();
                $.ajax({
                    type: 'post',
                    url: stul_frontend_obj.ajax_url,
                    data: {
                        unlock_key: unlock_key,
                        _wpnonce: stul_frontend_obj.ajax_nonce,
                        action: 'stul_verify_status_action'
                    },
                    success: function (res) {

                    }
                });
                $(this).remove();
            });
        } else {
            $(this).next('.stul-unlock-error-message').show();
        }
    });

    /**
     * 
     * Seconds countdown timer
     */
    if ($('.stul-countdown-number').length > 0) {
        countdown_timer = setInterval(function () {
            var seconds = $('.stul-countdown-number').html();
            var new_second = seconds - 1;
            if (new_second == 0) {
                clearInterval(countdown_timer);
                closePageLockPopup();
            } else {
                $('.stul-countdown-number').html(new_second);
            }
        }, 1000);
    }

});