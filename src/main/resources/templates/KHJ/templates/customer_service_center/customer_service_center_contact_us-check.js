document.addEventListener("DOMContentLoaded", function() {
  // 모든 position: relative 또는 position: absolute 요소를 선택합니다.
  const relativeOrAbsoluteElements = document.querySelectorAll(".relative, .absolute");

  const itemCheckElement = document.querySelector(".item_check");

  relativeOrAbsoluteElements.forEach(function(element) {
    // 요소에 클릭 이벤트 리스너를 추가합니다.
    element.addEventListener("click", function(event) {
      // 이벤트 전파를 막음
      event.stopPropagation();

      itemCheckElement.addEventListener("click", function() {
        if (itemCheckElement.classList.contains("checked")) {
          itemCheckElement.classList.remove("checked");
          console.log("있음");
        } else {
          itemCheckElement.classList.add("checked");
          console.log("없음");
        }
      });

      // 다른 클릭 이벤트 처리 코드를 작성할 수 있습니다.
    });
  });
});
