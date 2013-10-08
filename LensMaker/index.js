
showCustomizer = function(id) {
    $('.divCustomizer').css('display', 'none');
    $('#div'+id).css('display', 'inline-block');
};

checkRadio = function(id) {
    $('.radioChooseLens').removeAttr('checked');
    $('#radio'+id).attr('checked','checked').trigger('change');
};
