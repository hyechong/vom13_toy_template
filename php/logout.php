<?php

  session_start();
  unset($_SESSION['userid']); // 세션 삭제

  echo "
    <script>
      alert('로그아웃 되었습니다.');
      location.href='/common_template_0323/index.php';
    </script>
  "

?>