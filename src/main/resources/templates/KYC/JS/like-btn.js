document.addEventListener("DOMContentLoaded", function() {
  const likeButton = document.querySelector('.like-btn');
  const likeCountSpan = likeButton.querySelector('span');

  function toggleSelected() {
    likeButton.classList.toggle('selected');
    
    // selected 클래스가 추가되면 +1, 제거되면 -1
    if (likeButton.classList.contains('selected')) {
      // +1
      const currentCount = parseInt(likeCountSpan.textContent, 10);
      likeCountSpan.textContent = (currentCount + 1).toString();
    } else {
      // -1
      const currentCount = parseInt(likeCountSpan.textContent, 10);
      likeCountSpan.textContent = (currentCount - 1).toString();
    }
  }

  likeButton.addEventListener('click', toggleSelected);

})