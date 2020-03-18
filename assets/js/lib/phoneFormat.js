(function ($) {
    $.fn.ruPhoneFormat = function () {
        $(this).on('keydown touchend', function (e) {
            if (e.which != 8 && e.which != 0 && ((e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105))) {
                return false;
            }
            var curchr = this.value.length;
            var curval = $(this).val();
            if(curchr == 0) {
                $(this).val(curval + "+");
            }
            if ((curchr == 2 || curchr == 6 || curchr == 10 || curchr == 13) && e.which != 8 && e.which != 0) {
                $(this).val(curval + " ");
            }
            $(this).attr('maxlength', '16');
        });
    }
}($));