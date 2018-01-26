function ShowContent(idcontent, idMenu){
    console.log(idcontent, idMenu);
    $('.shown').toggleClass('shown');
    $('#' + idcontent).toggleClass('shown');

    $('.selected').toggleClass('selected');
    $('#' + idMenu).toggleClass('selected');

}