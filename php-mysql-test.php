<?php


	$servername = "localhost"; 
	$username = "root"; 
	$password = ""; 
	$dbname = "myDB";

	// 创建连接 
	$conn = new mysqli($servername, $username, $password, $dbname);
	// $conn = mysql_connect($servername, $username, $password);

	// 检测连接 
	if ($conn->connect_error) { 
	    die("Connection failed: " . $conn->connect_error); 
	} 
	echo "Connected successfully"."<br>"; 


    //创建数据库
 //    $sql = "CREATE DATABASE myDB";
	// if ($conn->query($sql) === TRUE) {
	//     echo "Database created successfully" ."<br>"; 
	// } else {
	//     echo "Error creating database: " . $conn->error ."<br>"; 
	// }



    //创建数据表
 //    $sql = "CREATE TABLE testList (
	// 	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	// 	firstname VARCHAR(30) NOT NULL,
	// 	lastname VARCHAR(30) NOT NULL,
	// 	email VARCHAR(50),
	// 	reg_date TIMESTAMP
	// )";

	// if ($conn->query($sql) === TRUE) {
	//     echo "Table testList created successfully" ."<br>"; 
	// } else {
	//     echo "Error creating table: " . $conn->error ."<br>"; 
	// }


  
    //插入数据
 //    $sql = "INSERT INTO testList (firstname, lastname, email) 
	// VALUES ('John', 'Doe', 'john@example.com')"; 

	// if ($conn->query($sql) === TRUE) { 
	//     echo "New record created successfully" ."<br>"; 
	// } else { 
	//     echo "Error: " . $sql . "<br>" . $conn->error ."<br>"; 
	// }



    //批量插入数据
 //    $sql = "INSERT INTO 
	// testList (firstname, lastname, email)

	// VALUES ('John', 'Doe', 'john@example.com');";

	// $sql .= "INSERT INTO 
	// testList (firstname, lastname, email)

	// VALUES ('Mary', 'Moe', 'mary@example.com');";

	// $sql .= "INSERT INTO 
	// testList (firstname, lastname, email)

	// VALUES ('Julie', 'Dooley', 'julie@example.com')";


	// if ($conn->multi_query($sql) === TRUE) {
	// echo "New 
	// records created successfully"."<br>"; 
	// } else {
	// echo 
	// "Error: " . $sql . "
	// " . $conn->error."<br>"; 
	// }


    //预处理语句
 //    $stmt = $conn->prepare("INSERT INTO testList (firstname, lastname, email) VALUES(?, ?, ?)");
	// $stmt->bind_param("sss", $firstname, $lastname, $email);

	// // 设置参数并执行
	// $firstname = "John";
	// $lastname = "Doe";
	// $email = "john@example.com";
	// $stmt->execute();
	// echo "New records created successfully";
	// $stmt->close();



    //查询
 //    $sql = "SELECT * FROM testList";
	// $result = $conn->query($sql);

	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	//         echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"];
	//     }
	// } else {
	//     echo "0 results";
	// }


	//查询
 //    $sql = 'SELECT * FROM test_list WHERE FirstName="John"';
	// $result = $conn->query($sql);

	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	//         echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"];
	//     }
	// } else {
	//     echo "0 results";
	// }





	//排序
 //    $sql = "SELECT * FROM testList ORDER BY firstname ASC, id ASC";  //ASC|DESC   ORDER BY column1, column2
	// $result = $conn->query($sql);

	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	//         echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"];
	//     }
	// } else {
	//     echo "0 results";
	// }


	//更新数据
 //    $sql = "UPDATE testList SET FirstName='Johnr' WHERE FirstName='John'";  //ASC|DESC   ORDER BY column1, column2
	// $result = $conn->query($sql);

	// if ($result > 0) {
 //        echo "updata ".$result." results";
	// } else {
	//     echo "updata 0 results";
	// }


    //删除数据
 //    $sql = "DELETE FROM testList WHERE FirstName='Julier'";  //ASC|DESC   ORDER BY column1, column2
	// $result = $conn->query($sql);

	// if ($result > 0) {
 //        echo "delete ".$result." results";
	// } else {
	//     echo "delete 0 results";
	// }

   
   //清空数据
   //truncate table testList;


    //插入字段
 //    $sql = "ALTER TABLE testList ADD num INT(6)";   // ADD i INT FIRST   //ADD i INT AFTER c;
 //    $result = $conn->query($sql);
	// if ($result > 0) { 
	//     echo "New record created successfully" ."<br>"; 
	// } else { 
	//     echo "Error: " . $sql . "<br>" . $conn->error ."<br>"; 
	// }

  

  
	//修改字段
 //    $sql = "ALTER TABLE testList CHANGE num num2 INT(10)";  
 //    $result = $conn->query($sql);
	// if ($result > 0) { 
	//     echo "New record created successfully" ."<br>"; 
	// } else { 
	//     echo "Error: " . $sql . "<br>" . $conn->error ."<br>"; 
	// }  



     //删除字段
 //    $sql = "ALTER TABLE testList DROP num";  
 //    $result = $conn->query($sql);
	// if ($result > 0) { 
	//     echo "New record created successfully" ."<br>"; 
	// } else { 
	//     echo "Error: " . $sql . "<br>" . $conn->error ."<br>"; 
	// } 
	


  	//修改表名
 //    $sql = "ALTER TABLE testList RENAME TO testList2";  
 //    $result = $conn->query($sql);
	// if ($result > 0) { 
	//     echo "New record created successfully" ."<br>"; 
	// } else { 
	//     echo "Error: " . $sql . "<br>" . $conn->error ."<br>"; 
	// } 






    //分组
 //    $sql = "SELECT * FROM testList GROUP BY firstname"; 
	// $result = $conn->query($sql);

	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	        
	//         echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " - COUNT: " . $row["COUNT"];
	//     }
	// } else {
	//     echo "0 results";
	// }



    //关联数据表--函數
 //    $sql = 'SELECT a.id, a.firstname, a.email, b.age FROM testList a INNER JOIN testListtow b ON a.firstname = b.firstname';
    
 //    mysql_select_db('mydb');
	// $retval = mysql_query( $sql, $conn );
	// if(! $retval )
	// {
	//   die('Could not get data: ' . mysql_error());
	// }
	// while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
	// {
	//     echo "id:{$row['id']}  <br> ".
	//          "firstname: {$row['firstname']} <br> ".
	//          "email: {$row['email']} <br> ". 
	//          "age: {$row['age']} <br> ".
	//          "--------------------------------<br>";
	// } 
	// echo "Fetched data successfully\n";



    //关联数据表--对象 INNER JOIN
 //    $sql = 'SELECT a.id, a.firstname, a.email, b.age FROM testList a INNER JOIN testListtow b ON a.firstname = b.firstname';
    
	// $result = $conn->query($sql);
	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	        
	//         echo "id:{$row['id']}  <br> ".
	//          "firstname: {$row['firstname']} <br> ".
	//          "email: {$row['email']} <br> ". 
	//          "age: {$row['age']} <br> ".
	//          "--------------------------------<br>";
	//     }
	// } else {
	//     echo "0 results";
	// }



     //关联数据表 LEFT JOIN
 //    $sql = 'SELECT a.id, a.firstname, a.email, b.age FROM testList a LEFT JOIN testListtow b ON a.firstname = b.firstname';
    
	// $result = $conn->query($sql);
	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	        
	//         echo "id:{$row['id']}  <br> ".
	//          "firstname: {$row['firstname']} <br> ".
	//          "email: {$row['email']} <br> ". 
	//          "age: {$row['age']} <br> ".
	//          "--------------------------------<br>";
	//     }
	// } else {
	//     echo "0 results";
	// }




    //关联数据表 RIGHT JOIN
 //    $sql = 'SELECT b.id, b.firstname, b.age, a.email FROM testList a RIGHT JOIN testListtow b ON a.firstname = b.firstname';
    
	// $result = $conn->query($sql);
	// if ($result->num_rows > 0) {

	//     // 输出每行数据
	//     while($row = $result->fetch_assoc()) {
	        
	//         echo "id:{$row['id']}  <br> ".
	//          "firstname: {$row['firstname']} <br> ".
	//          "email: {$row['email']} <br> ". 
	//          "age: {$row['age']} <br> ".
	//          "--------------------------------<br>";
	//     }
	// } else {
	//     echo "0 results";
	// }




    //MySQL 事务
 //    mysql_select_db("mydb");
	// mysql_query("SET AUTOCOMMIT=0");//设置为不自动提交，因为MYSQL默认立即执行 mysql_query("BEGIN");//开始事务定义
	// mysql_query("BEGIN");//开始事务定义
	// $sql = "UPDATE testList SET FirstName='Johny' WHERE FirstName='John'";
	// if(!mysql_query($sql, $conn))
	// {
	//    echo "ROOLBACK 1"."<br>";
	//    mysql_query("ROOLBACK");//判断当执行失败时回滚
	// }else{
	// 	mysql_select_db("testListTow");
	// 	$sql = "UPDATE testListTow SET FirstName='Johny' WHERE FirstName='John'";
	// 	if(!mysql_query($sql, $conn))
	// 	{ 
	// 	  echo "ROOLBACK 2"."<br>";
	// 	  mysql_query("ROOLBACK");//判断执行失败回滚
	// 	}else{
	// 		mysql_query("COMMIT");//执行事务
	// 	    echo "COMMIT"."<br>";
	// 	}

		
	// }
	
	


    //php JSON
 //    $arr = array(  
	//     'name' => 'tanteng',  
	//     'nick' => 'pony',  
	//     'contact' => array(  
	//         'email' => 'a@gmail.com',  
	//         'website' => 'http://aa.sinaapp.com',  
	//     )  
	// );  
	// $jsonstr = json_encode($arr);
	// echo $jsonstr ."<br>";
	// echo $arr['contact']['email'] ."<br>";

    
	// $arr2 = json_decode($jsonstr);
 //    print_r($arr2);
    



  


 
    //关闭数据库
	$conn->close();
	//mysql_close($conn);





?>