<?php
  // Отправка данных на почту
  if  (isset($_POST['phone'])) {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $title = isset($_POST['title']) ? $_POST['title'] : '';
    $type = isset($_POST['type']) ? $_POST['type'] : '';

    $to = 'admin@drshumaev.com';
    $subject = 'Заявка с drshumaev.ru';
    $message = 'Заголовок: ' . $title . "<br>" . 'Имя: ' . $name . "<br>" . 'Телефон: ' . $phone . "<br>" . 'Тип: ' . $type;

    $sendfrom   = "info@example.com"; /*Укажите адрес, с которого должно приходить письмо*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);
  }

  // Отправка данных в телеграмм бот
  if (isset($_POST['name']) && isset($_POST['phone'])) {
    $token = "5809943897:AAHbjM8-_BemLR64upWClpkt2NhD1VaZ8gQ";
    $chat_id = "-1001905257370";

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $title = $_POST['title'];
    $type = $_POST['type'];

    $arr = array(
      'Заголовок ' => $title,
      'Имя: ' => $name,
      'Телефон: ' => $phone,
      'Тип: ' => $type
    );

    foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


  }

  ?>