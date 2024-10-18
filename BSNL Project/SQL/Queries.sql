SELECT * FROM CustomerDetails WHERE 1
SELECT * FROM Complain WHERE 1

SELECT * FROM table1 JOIN table2 ON table1.column_name = table2.column_name

Select CustomerDetails.Name, CustomerDetails.MobileNumber, CustomerDetails.Address, Complain.Is_Resolved, Complain.Complain_ID from CustomerDetails JOIN Complain on CustomerDetails.telephoneNumber = Complain.telephone_Number Where CustomerDetails.telephoneNumber = '079-123123'

Select CustomerDetails.TelephoneNumber,CustomerDetails.Service, CustomerDetails.Name, CustomerDetails.MobileNumber, CustomerDetails.Address, Complain.Is_Resolved, Complain.Complain_ID from CustomerDetails JOIN Complain on CustomerDetails.telephoneNumber = Complain.telephone_Number Where CustomerDetails.telephoneNumber = '079-123123'

Select CustomerDetails.TelephoneNumber,CustomerDetails.Service, CustomerDetails.Name, CustomerDetails.MobileNumber, CustomerDetails.Address, Complain.Is_Resolved, Complain.Complain_ID from CustomerDetails JOIN Complain on CustomerDetails.telephoneNumber = Complain.telephone_Number Where CustomerDetails.telephoneNumber = '079-123123'

Select CustomerDetails.TelephoneNumber,CustomerDetails.Service, CustomerDetails.Name, CustomerDetails.MobileNumber, CustomerDetails.Address, Complain.Is_Resolved, Complain.Complain_ID from CustomerDetails JOIN Complain on CustomerDetails.telephoneNumber = Complain.telephone_Number Where CustomerDetails.telephoneNumber = '079-123123'

SELECT product_name, 'Product' AS type FROM products
UNION
SELECT category_name, 'Category' AS type FROM categories;

Select CustomerDetails.TelephoneNumber,CustomerDetails.Service, CustomerDetails.Name, CustomerDetails.MobileNumber, CustomerDetails.Address FROM CustomerDetails 
Where CustomerDetails.telephoneNumber = '079-123123'
UNION 
Select Complain.Is_Resolved, Complain.Complain_ID FROM Complain
Where Complain.telephone_Number = '079-123123'


Select CustomerDetails.TelephoneNumber,CustomerDetails.Service FROM CustomerDetails 
Where CustomerDetails.telephoneNumber = '079-123123'
UNION 
Select Complain.Is_Resolved, Complain.Complain_ID FROM Complain
Where Complain.telephone_Number = '079-123123'

SELECT 
    CustomerDetails.TelephoneNumber,
    CustomerDetails.Service,
    CustomerDetails.Name,
    CustomerDetails.MobileNumber,
    CustomerDetails.Address,
    NULL AS Is_Resolved, 
    NULL AS Complain_ID
FROM  CustomerDetails 
WHERE CustomerDetails.TelephoneNumber = '079-123123'
UNION 
SELECT  
    NULL AS TelephoneNumber,
    NULL AS Service,
    NULL AS Name,
    NULL AS MobileNumber,
    NULL AS Address,
    Complain.Is_Resolved, 
    Complain.Complain_ID
FROM Complain
WHERE Complain.Is_Resolved = 0 AND Complain.Telephone_Number = '079-123123';

SELECT  CD.TelephoneNumber, CD.Service, CD.Name, CD.MobileNumber, CD.Address, C.Complain_Description ,C.Is_Resolved,  C.Complain_ID FROM CustomerDetails CD LEFT JOIN Complain C ON C.Telephone_Number = CD.TelephoneNumber AND C.Is_Resolved = 0 WHERE  CD.TelephoneNumber = '079-123123';

UPDATE Complain 
SET Is_Resolved = 1, Resolution_Code = '200', Resolution_Remark = 'Power Issue', Resolution_Date_Time = '2024-10-01 08:18:18' 
WHERE Complain_ID = 37;