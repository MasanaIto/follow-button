$(function () {
  $(".js-account-item").each(function () {
    var $this = $(this);
    var $thisData = $this.data();
    if ($thisData.follow) {
      $this.find(".js-follow-btn").addClass("isFollow");
    }
  });

  $(".js-follow-btn").on("click", function () {
    var $this = $(this);
    var $accountItem = $this.parents(".js-account-item");
    var $thisData = $accountItem.data();

    if ($thisData.follow) {
      $this.removeClass("isFollow");
      $this.text("フォローする");
      $accountItem.data("follow", false);
    } else {
      $this.addClass("isFollow");
      $this.text("フォロー中");
      $accountItem.data("follow", true);
    }
  });
});
