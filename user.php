<?php

define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','660207');
define('DB_NAME','moment');

header("Conntent-type:text/json");

    if (empty($_GET['email']) || empty($_GET['password'])) {
        // 没有完整填写表单，定义一个变量存放错误消息，在渲染 HTML 时显示到页面上
    }
    else {
        // 接收表单参数
        $email = $_GET['email'];
        $password = $_GET['password'];

        // 邮箱与密码是否匹配（数据库查询）
        // 建立与数据的连接
        $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if (!$connection) {
            // 链接数据库失败，打印错误信息，注意：生产环境不能输出具体的错误信息（不安全）
            $message='查询失败';
        }

        // 根据邮箱查询用户信息，limit 是为了提高查询效率
        $result = mysqli_query($connection, sprintf("select * from users where email = '%s' limit 1", $email));

        if ($result) {
            // 查询成功，获取查询结果
            if ($user = mysqli_fetch_assoc($result)) {
                // 用户存在，密码比对
                if ($user['password'] == $password) {

                     $message= 'success';
                     echo $login = true;

                    exit;
                }
            }

            // 释放资源
            mysqli_free_result($result);
        } else {
            // 查询失败

        }
        // 关闭与数据库之间的连接
        mysqli_close($connection);

}