<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="UTF-8"/>

<xsl:template match="/">

<html>
<head>
    <title>Motorbike Catalog</title>
    <link rel="stylesheet"
          type="text/css" href="style.css"/>
</head>

<body>

<h1>Motorbike Catalog</h1>

<table>

<tr>
    <th>MAKE</th>
    <th>MODEL</th>
    <th>YEAR</th>
    <th>COLOR</th>
    <th>ENGINE NUMBER</th>
    <th>CYLINDERS</th>
    <th>FUEL TYPE</th>
    <th>CHASSIS NUMBER</th>
    <th>DISC BRAKE</th>
    <th>AUTO START</th>
    <th>RADIO</th>
</tr>

<xsl:for-each select="catalog/motorbike">

<tr>
    <td><xsl:value-of select="make"/></td>
    <td><xsl:value-of select="model"/></td>
    <td><xsl:value-of select="year"/></td>
    <td><xsl:value-of select="color"/></td>

    <td><xsl:value-of select="engine/engine_number"/></td>

    <td><xsl:value-of
        select="engine/number_of_cylinders"/></td>

    <td><xsl:value-of
        select="engine/type_of_fuel"/></td>

    <td><xsl:value-of select="chassis_number"/></td>

    <td><xsl:value-of
        select="accessories/@disc_brake"/></td>

    <td><xsl:value-of
        select="accessories/@auto_start"/></td>

    <td><xsl:value-of
        select="accessories/@radio"/></td>
</tr>

</xsl:for-each>

</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>
