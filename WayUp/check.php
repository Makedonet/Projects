<?php

    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
    $country = filter_var(trim($_POST['country']), FILTER_SANITIZE_STRING);

    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "register-bd";

    $connection = mysqli_connect($servername, $username, $password, $dbname);

    if($connection == false)
    {
      echo "Connection failed!";
      echo mysqli_connect_error();
      exit();
    }

    if(mb_strlen($name) < 5 || mb_strlen($name) > 90) {
      echo "Недопустимая длина имени";
      exit();
    }

    $password = md5($password);

    $sql = "INSERT INTO users (name, email, phone, country)
    VALUES ('$name', '$email', '$phone', '$country')";

    if ($connection->query($sql) === TRUE) {
    header("Location: index.html?success=Your account has been created successfully");
    } else {
    echo "Error: " . $sql . "<br>" . $connection->error;
    }

    $connection->close();

?>
