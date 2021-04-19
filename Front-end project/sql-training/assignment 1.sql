-- Question 1: Write a query to get data from SalesOrderDetail table to show a text ("Under 10", "10-19", "20-29", "30-39" or "40 and over") 
-- based on the OrderQty value by using Case function.
SELECT SalesOrderID, SalesOrderDetailID, CarrierTrackingNumber, OrderQty, OrderQty =  
      CASE  
         WHEN OrderQty < 10 THEN 'Under 10'  
         WHEN OrderQty > 10 and OrderQty < 20 THEN '10-19'  
         WHEN OrderQty > 20 and OrderQty < 30 THEN '20-29'  
         WHEN OrderQty > 30 and OrderQty < 40 THEN '30-39'  
         ELSE '40 and over'  
      END
FROM Sales.SalesOrderDetail
-- Test result (select additional conditions below)
WHERE SalesOrderID = 43659 
or SalesOrderID = 43875 
or SalesOrderID = 43881 
or SalesOrderID = 43875 
or SalesOrderID = 46345
or SalesOrderID = 50270;

-- Question 2: Write a query to display the SalesOrderId, SalesQuota, Bonus 
-- and also display the FirstName, MiddleName, LastName of SalesPerson
SELECT saleOrderHeader.SalesOrderId, salePerson.SalesQuota, salePerson.Bonus, person.FirstName, person.MiddleName, person.LastName
FROM Person.Person person
INNER JOIN Sales.SalesPerson salePerson ON person.BusinessEntityID = salePerson.BusinessEntityID
INNER JOIN Sales.SalesOrderHeader saleOrderHeader ON salePerson.BusinessEntityID = saleOrderHeader.SalesPersonID

-- Question 3: Write a query to display a list of customer names together with a count of the orders
SELECT (IsNull(person.FirstName, '') + ' ' + IsNull(person.MiddleName, '') + ' ' + IsNull(person.LastName, '')) AS 'Customer name', 
count(saleOrderHeader.SalesOrderID) AS 'Orders count'
FROM Person.Person person
INNER JOIN Sales.Customer saleCustomer ON person.BusinessEntityID = saleCustomer.PersonID
INNER JOIN Sales.SalesOrderHeader saleOrderHeader ON saleOrderHeader.CustomerID = saleCustomer.CustomerID
GROUP BY person.FirstName, person.MiddleName, person.LastName

select * from Sales.Customer