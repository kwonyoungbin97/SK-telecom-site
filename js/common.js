$(function () {
  // 메뉴 버튼

  // 직무 홈페이지, 이야기 홈페이지 버튼 클릭
  $("main .title1 ul li ").click(function () {
    var thisIndex = $(this).index();
    $("main > section").hide();
    $("main > section").eq(thisIndex).show();
    $(".title1 a").removeClass("on");
    $(this).find("a").addClass("on");
  });

  // 복리후생 페이지 버튼 클릭
  $("main .title ul li").click(function () {
    $("main>#wrap").hide();
    var thatIndex = $(this).index();
    $("main>#wrap").eq(thatIndex).show();
    $(".title a").removeClass("on");
    $(this).find("a").addClass("on");
  });
});
