<script>
  const container = document.querySelector('.container');

  // 이미지 20개 정도 붙이기 (필요시 더 많이 가능)
  for (let i = 0; i < 20; i++) {
    const img = document.createElement('img');
    img.src = './img0528/photo_2025-05-28_19-18-23.jpg';
    container.appendChild(img);
  }
</script>