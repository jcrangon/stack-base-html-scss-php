<?php
  $bodyId = "home";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- css webpack -->
  <script src="./dist/styles.bundle.js"></script>
</head>
<body id="<?= $bodyId ?>x">
  <h1>Home page works!</h1>

<!-- js webpack-->
  <script src="./dist/main.bundle.js"></script>
</body>
</html>
