<?php
$billOutput = "";
if (isset($_POST['submit'])) {
    $code = $_POST['code'];
    $name = $_POST['name'];
    $units = $_POST['units'];
    $rate = $_POST['rate'];

    $codes = explode(",", $code);
    $names = explode(",", $name);
    $unitssold = explode(",", $units);
    $rates = explode(",", $rate);

    $billOutput .= "<h2>Bill Details</h2>";
    $billOutput .= "<table>";
    $billOutput .= "<tr>";
    $billOutput .= "<th>Item Code</th>";
    $billOutput .= "<th>Item Name</th>";
    $billOutput .= "<th>Units Sold</th>";
    $billOutput .= "<th>Rate</th>";
    $billOutput .= "<th>Amount</th>";
    $billOutput .= "</tr>";

    $grandTotal = 0;
    for ($i = 0; $i < 5; $i++) {
        $c = isset($codes[$i]) ? trim($codes[$i]) : "";
        $n = isset($names[$i]) ? trim($names[$i]) : "";
        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;
        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;
        $amount = $u * $r;
        $grandTotal += $amount;

        $billOutput .= "<tr>";
        $billOutput .= "<td>" . htmlspecialchars($c) . "</td>";
        $billOutput .= "<td>" . htmlspecialchars($n) . "</td>";
        $billOutput .= "<td>" . $u . "</td>";
        $billOutput .= "<td>" . $r . "</td>";
        $billOutput .= "<td>" . $amount . "</td>";
        $billOutput .= "</tr>";
    }

    $billOutput .= "<tr>";
    $billOutput .= "<th colspan='4'>Grand Total</th>";
    $billOutput .= "<th>" . $grandTotal . "</th>";
    $billOutput .= "</tr>";
    $billOutput .= "</table>";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Item Billing System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Item Billing System</h2>
    <form method="post" action="">
        <label>Item Codes:</label><br>
        <input type="text" name="code" placeholder="101,102,103,104,105" required>
        <br>
        <label>Item Names:</label><br>
        <input type="text" name="name" placeholder="pen,book,pencil,file,notebook" required>
        <br>
        <label>Units Sold:</label><br>
        <input type="text" name="units" placeholder="10,5,20,8,12" required>
        <br>
        <label>Rates:</label><br>
        <input type="text" name="rate" placeholder="10,50,5,30,40" required>
        <br>
        <input type="submit" name="submit" value="Generate Bill">
    </form>

    <?php echo $billOutput; ?>
</body>
</html>
