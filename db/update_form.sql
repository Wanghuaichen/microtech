UPDATE forms
SET first_name = $2, last_name = $3, business_name = $4, business_type = $5, location_place = $6, email = $7, phone = $8, message_text =$9
WHERE id = $1;
