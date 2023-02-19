var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '78813-student (1).json',
}
)
('btn btn-full').on("click",function(){

    $.ajax({
        url: 'https://form.jotform.com/230466409849163',
        type: 'GET',
        success:function(){
            console.log("success");
        }
    });

});