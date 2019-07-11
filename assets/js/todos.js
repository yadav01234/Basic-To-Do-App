$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})
$("ul").on("click","span",function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500,function(){
            $(this).remove();
    })
})
$("input").on("keypress",function(e){
if(e.which=== 13){
    var licode = $(this).val();
    $(this).val(" ");
    console.log(licode);
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+licode+"</li>");
}
})
$(".plus").on("click",function(){
    $("input").fadeToggle()
})
