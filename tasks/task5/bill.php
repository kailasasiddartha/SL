<?php
// Experiment 5: Item Billing System using explode()
// Accepts details of 5 different items via exactly 4 text boxes.

$billGenerated = false;
$items = [];
$grandTotal = 0;
$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $codesStr = trim($_POST['item_codes'] ?? '');
    $namesStr = trim($_POST['item_names'] ?? '');
    $unitsStr = trim($_POST['units_sold'] ?? '');
    $ratesStr = trim($_POST['rates'] ?? '');

    // Use explode() function to split comma-separated values into arrays
    $codes = array_map('trim', explode(',', $codesStr));
    $names = array_map('trim', explode(',', $namesStr));
    $units = array_map('trim', explode(',', $unitsStr));
    $rates = array_map('trim', explode(',', $ratesStr));

    if (count($codes) === 5 && count($names) === 5 && count($units) === 5 && count($rates) === 5) {
        $billGenerated = true;
        for ($i = 0; $i < 5; $i++) {
            $unitNum = floatval($units[$i]);
            $rateNum = floatval($rates[$i]);
            $amount = $unitNum * $rateNum;
            $grandTotal += $amount;

            $items[] = [
                'code' => htmlspecialchars($codes[$i]),
                'name' => htmlspecialchars($names[$i]),
                'units' => $unitNum,
                'rate' => $rateNum,
                'amount' => $amount
            ];
        }
    } else {
        $error = "Please provide exactly 5 comma-separated values in each of the 4 text boxes.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 5 - Item Billing System (PHP explode)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Item Billing System</h2>
        <p class="subtitle">Enter comma-separated values for 5 items using only 4 text boxes.</p>

        <?php if ($error): ?>
            <div class="alert error"><?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST" action="bill.php">
            <div class="form-group">
                <label for="item_codes">1. Item Codes (5 comma-separated):</label>
                <input type="text" id="item_codes" name="item_codes" value="<?php echo htmlspecialchars($_POST['item_codes'] ?? '101, 102, 103, 104, 105'); ?>" required>
            </div>

            <div class="form-group">
                <label for="item_names">2. Item Names (5 comma-separated):</label>
                <input type="text" id="item_names" name="item_names" value="<?php echo htmlspecialchars($_POST['item_names'] ?? 'Notebook, Ball Pen, Pencil Box, Eraser, Ruler'); ?>" required>
            </div>

            <div class="form-group">
                <label for="units_sold">3. Units Sold (5 comma-separated):</label>
                <input type="text" id="units_sold" name="units_sold" value="<?php echo htmlspecialchars($_POST['units_sold'] ?? '5, 12, 4, 10, 3'); ?>" required>
            </div>

            <div class="form-group">
                <label for="rates">4. Rates per Unit (5 comma-separated):</label>
                <input type="text" id="rates" name="rates" value="<?php echo htmlspecialchars($_POST['rates'] ?? '40, 10, 25, 5, 15'); ?>" required>
            </div>

            <button type="submit" class="btn">Generate Bill</button>
        </form>

        <?php if ($billGenerated): ?>
            <div class="bill-output">
                <h3>Invoice / Billing Summary</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Units Sold</th>
                            <th>Rate (INR)</th>
                            <th>Amount (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($items as $item): ?>
                        <tr>
                            <td><?php echo $item['code']; ?></td>
                            <td><?php echo $item['name']; ?></td>
                            <td><?php echo $item['units']; ?></td>
                            <td><?php echo number_format($item['rate'], 2); ?></td>
                            <td><?php echo number_format($item['amount'], 2); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr class="total-row">
                            <td colspan="4">Grand Total</td>
                            <td><strong>INR <?php echo number_format($grandTotal, 2); ?></strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>