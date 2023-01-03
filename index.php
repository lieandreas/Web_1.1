<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web 6</title>
        <link rel="stylesheet" href="./css/main.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </head>
    <body style="background-color: black; color: white;">
      <header>
      <!--- Navbar -->
        <?php include 'phpinclude/navbar.php';?>
      <!--- Navbar -->
      </header>
      <div class="container-fluid">
        <h1>Kelompok 2</h1>
        <div class="border-top">
          <p>Kelompok ini terdiri dari:</p>
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col">
              <div class="p-2">
                <a href="Andreas.php"><img src="./css/image/Andreas.jpeg" class="card-img-top" alt="..." width="200">
                <p>Andreas</p></a>
              </div>
            </div>
            <div class="col">
              <div class="p-2">
                <a href="Aldi.php"><img src="./css/image/aldi.jpg" class="card-img-top" alt="..." width="200">
                <p>Aldi</p></a>
              </div>
            </div>
            <div class="col">
              <div class="p-2">
                <a href="Erik.php"><img src="./css/image/Erik.jpg" class="card-img-top" alt="..." width="200">
                <p>Erik</p></a>
              </div>
            </div>
            <div class="col">
              <div class="p-2">
                <a href="Jason.php"><img src="./css/image/antoni.jpg" class="card-img-top" alt="..." width="200">
                <p>Jason</p></a>
              </div>
            </div>
            <div class="col">
              <div class="p-2">
                <a href="Titin.php"><img src="./css/image/titin.jpeg" class="card-img-top" alt="..." width="200">
                <p>Titin</p></a>
              </div>
            </div>
            
          </div>
        </div>
        <h1>Penjelasan</h1>
        <div class="border-top">
          <p>Di dalam web ini, kami ingin menapilkan referensi dari beberapa jenis film. Untuk membantu pemngguna dalam memilih, mencari, atau menemukan film yang sesuai untuk di nikmati.</p>
        </div>
      </div>
    </body>

    <?php footer('Access-Control-Allow-Origin: http://localhost:3000');?>
</html>