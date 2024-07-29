CREATE TABLE property (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    prop_type ENUM('APARTMENT', 'HOUSE', 'CONDO', 'SEMI-DETACHED HOUSE', 'LAND'),
    purpose ENUM('FOR SALE', 'FOR RENT'),
    desc1 VARCHAR(40) NOT NULL,
    address1 VARCHAR(30) NOT NULL,
    region VARCHAR(15) NOT NULL,
    area VARCHAR(10) NOT NULL,
    country VARCHAR(15) NOT NULL,
    n_of_bedrooms INT,
    n_of_bathrooms INT,
    car_space INT,
    price DECIMAL(10, 2) NOT NULL,
    floor_area DECIMAL(10, 2),
    land_size DECIMAL(10, 2),
    year_built INT,
    furnishing ENUM('FURNISHED', 'UNFURNISHED'),
    secure_dep DECIMAL(10, 2), -- Adjust width as per your data
    agent_fee ENUM('YES', 'NO'),
    featured BOOLEAN DEFAULT FALSE NOT NULL
);

CREATE TABLE img (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    property_id INT UNSIGNED NOT NULL,
    img_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (property_id) REFERENCES property(id)
);

CREATE TABLE user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    property_id INT UNSIGNED,
    FOREIGN KEY (property_id) REFERENCES property(id)
);


-- INSERT INTO img (property_id, img_path)
-- VALUES(2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\1.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\2.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\3.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\4.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\5.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\6.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\7.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\8.jpeg'),
-- (2, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\9.jpeg');

-- INSERT INTO img (property_id, img_path)
-- VALUES(1, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\1.jpg'),
-- (1, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\2.jpg'),
-- (1, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\1\3.jpg'),
-- (1, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\4.jpg'),
-- (1, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\5.jpg');




-- INSERT INTO img (property_id, img_path)
-- VALUES(3, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property3\\1.jpeg'),
-- (3, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property3\\2.jpeg'),
-- (3, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property3\\3.jpeg'),
-- (3, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property3\\4.jpeg'),
-- (3, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property3\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(4, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property4\\1.jpeg'),
-- (4, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property4\\2.jpeg'),
-- (4, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property4\\3.jpeg'),
-- (4, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property4\\4.jpeg'),
-- (4, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property4\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(5, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property5\\1.jpg'),
-- (5, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property5\\2.jpg'),
-- (5, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property5\\3.jpg'),
-- (5, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property5\\4.jpg'),
-- (5, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property5\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(6, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property6\\1.jpeg'),
-- (6, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property6\\2.jpeg'),
-- (6, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property6\\3.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(7, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property7\\1.jpeg'),
-- (7, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property7\\2.jpeg'),
-- (7, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property7\\3.jpeg'),
-- (7, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property7\\4.jpeg'),
-- (7, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property7\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(8, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property8\\1.jpg'),
-- (8, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property8\\2.jpg'),
-- (8, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property8\\3.jpg'),
-- (8, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property8\\4.jpg'),
-- (8, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property8\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(9, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property9\\1.jpg'),
-- (9, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property9\\2.jpg'),
-- (9, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property9\\3.jpg'),
-- (9, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property9\\4.jpg'),
-- (9, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property9\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(10, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property10\\1.jpg'),
-- (10, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property10\\2.jpg'),
-- (10, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property10\\3.jpg'),
-- (10, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property10\\4.jpg'),
-- (10, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property10\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(11, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property11\\1.jpg'),
-- (11, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property11\\2.jpg'),
-- (11, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property11\\3.jpg'),
-- (11, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property11\\4.jpg'),
-- (11, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property11\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(12, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property12\\1.jpeg'),
-- (12, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property12\\2.jpeg'),
-- (12, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property12\\3.jpeg'),
-- (12, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property12\\4.jpeg'),
-- (12, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property12\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(13, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property13\\1.jpg'),
-- (13, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property13\\2.jpg'),
-- (13, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property13\\3.jpg'),
-- (13, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property13\\4.jpg'),
-- (13, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property13\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(14, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property14\\1.jpeg'),
-- (14, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property14\\2.jpeg'),
-- (14, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property14\\3.jpeg'),
-- (14, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property14\\4.jpeg'),
-- (14, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property14\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(15, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property15\\1.jpeg'),
-- (15, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property15\\2.jpeg'),
-- (15, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property15\\3.jpeg'),
-- (15, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property15\\4.jpeg'),
-- (15, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property15\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(16, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property16\\1.jpg'),
-- (16, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property16\\2.jpg'),
-- (16, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property16\\3.jpg'),
-- (16, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property16\\4.jpg'),
-- (16, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property16\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(17, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property17\\1.jpg'),
-- (17, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property17\\2.jpg'),
-- (17, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property17\\3.jpg'),
-- (17, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property17\\4.jpg'),
-- (17, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property17\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(18, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property18\\1.jpg'),
-- (18, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property18\\2.jpg'),
-- (18, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property18\\3.jpg'),
-- (18, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property18\\4.jpg'),
-- (18, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property18\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(19, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property19\\1.jpg'),
-- (19, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property19\\2.jpg'),
-- (19, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property19\\3.jpg'),
-- (19, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property19\\4.jpg'),
-- (19, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property19\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(20, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property20\\1.jpg'),
-- (20, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property20\\2.jpg'),
-- (20, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property20\\3.jpg'),
-- (20, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property20\\4.jpg'),
-- (20, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property20\\5.jpg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(21, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property21\\1.jpg'),
-- (21, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property21\\2.jpg'),
-- (21, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property21\\3.jpg');


-- VALUES(22, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property22\\3.jpg');

-- INSERT INTO img (property_id, img_path)
-- VALUES(22, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property22\\1.jpeg'),
-- (22, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property22\\2.jpeg'),
-- (22, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property22\\4.jpeg'),
-- (22, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property22\\5.jpeg');

-- INSERT INTO img (property_id, img_path)
-- VALUES(23, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property23\\1.jpeg'),
-- (23, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property23\\2.jpeg'),
-- (23, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property23\\3.jpeg'),
-- (23, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property23\\4.jpeg'),
-- (23, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property23\\5.jpeg');


-- INSERT INTO img (property_id, img_path)
-- VALUES(24, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property24\\1.jpg'),
-- (24, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property24\\2.jpg'),
-- (24, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property24\\3.jpg'),
-- (24, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property24\\4.jpg'),
-- (24, 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property24\\5.jpg');


-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price)
-- VALUES ('MANSION FOR SALE', 'HOUSE', 'FOR SALE', 'SOME RANDOM STUFF', '8017 CLIFTON 1ST GROOVE ST', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 9, 5, 8, 20000000);

-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price)
-- VALUES ('APARTMENT FOR RENT', 'APARTMENT', 'FOR RENT', 'APARTMENT', '9258 OBSERVATORY 7 CRISTIAN RD', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 2, 2, 2, 10000),
-- ('THE PARAGON APARTMENT FOR RENT', 'APARTMENT', 'FOR RENT', 'APARTMENT ON THE PARAGON', '2257 OBSERVATORY 7 MAIN RD', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 1, 1, 1, 8000),
-- ('THE RUBIX APARTMENT FOR SALE', 'APARTMENT', 'FOR SALE', 'APARTMENT FOR THE RUBIX APARTMENT', '3149 CAPE TOWN MAIN RD', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 3, 4, 4, 7000000);

-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price, floor_area, land_size, year_built, furnishing, secure_dep, agent_fee, featured)
-- VALUES
-- ('Luxury Apartment in Downtown', 'APARTMENT', 'FOR SALE', 'Luxury apartment with stunning views', '123 Main St', 'Downtown', 'City', 'USA', 3, 2, 2, 500000.00, 1500, NULL, 2015, 'FURNISHED', 1000.00, 'YES', TRUE),
-- ('Cozy House in Suburbia', 'HOUSE', 'FOR RENT', 'Cozy house with backyard', '456 Elm St', 'Suburbia', 'Suburb', 'USA', 2, 1, 1, 1500.00, 1200, 2500, 2000, 'UNFURNISHED', 1500.00, 'NO', FALSE),
-- ('Modern Condo with Amenities', 'CONDO', 'FOR SALE', 'Modern condo with gym and pool', '789 Oak St', 'Downtown', 'City', 'USA', 1, 1, 1, 300000.00, 800, NULL, 2018, 'FURNISHED', 2000.00, 'YES', FALSE),
-- ('Spacious Semi-Detached House', 'SEMI-DETACHED HOUSE', 'FOR RENT', 'Spacious house with garden', '101 Pine St', 'Suburbia', 'Suburb', 'USA', 4, 3, 2, 2500.00, 2000, 5000, 2005, 'UNFURNISHED', 2000.00, 'NO', TRUE),
-- ('Vacant Land for Development', 'LAND', 'FOR SALE', 'Vacant land ready for development', '123 Maple St', 'Rural', 'Country', 'USA', NULL, NULL, NULL, 100000.00, NULL, 10000, NULL, NULL, NULL, 'NO', TRUE),
-- ('Ocean View Apartment', 'APARTMENT', 'FOR SALE', 'Apartment with stunning ocean views', '456 Ocean Blvd', 'Coastal', 'Beach', 'USA', 2, 2, 1, 700000.00, 1200, NULL, 2010, 'FURNISHED', 1500.00, 'YES', FALSE),
-- ('Family Home in the Suburbs', 'HOUSE', 'FOR RENT', 'Family-friendly home with backyard', '789 Pine Ave', 'Suburbia', 'Suburb', 'USA', 3, 2, 2, 2000.00, 1800, 3500, 1995, 'UNFURNISHED', 2000.00, 'NO', TRUE),
-- ('Downtown Loft with City Views', 'APARTMENT', 'FOR RENT', 'Modern loft in the heart of the city', '101 Broadway', 'Downtown', 'City', 'USA', 1, 1, 1, 2500.00, 900, NULL, 2017, 'FURNISHED', 1500.00, 'YES', FALSE),
-- ('Townhouse with Garden', 'HOUSE', 'FOR SALE', 'Townhouse with spacious garden', '123 Elm St', 'Suburbia', 'Suburb', 'USA', 3, 2, 2, 400000.00, 1600, NULL, 2012, 'UNFURNISHED', 2500.00, 'YES', FALSE),
-- ('Luxury Penthouse in Sky Tower', 'APARTMENT', 'FOR SALE', 'Luxury penthouse with panoramic views', '456 Sky Tower', 'Downtown', 'City', 'USA', 4, 3, 3, 1500000.00, 2500, NULL, 2019, 'FURNISHED', 5000.00, 'YES', TRUE),
-- ('Cottage with Ocean Access', 'HOUSE', 'FOR RENT', 'Charming cottage steps from the beach', '789 Shoreline Dr', 'Coastal', 'Beach', 'USA', 2, 1, 1, 1800.00, 1000, NULL, 2000, 'FURNISHED', 1000.00, 'NO', FALSE),
-- ('Lakefront Cabin Retreat', 'HOUSE', 'FOR SALE', 'Rustic cabin with lakefront views', '101 Lakeview Rd', 'Rural', 'Lake', 'USA', 2, 1, 0, 250000.00, 800, NULL, 1990, 'UNFURNISHED', 200, 'YES', FALSE);

-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price, floor_area, land_size, year_built, furnishing, secure_dep, agent_fee, featured)
-- VALUES
-- ('Luxury Apartment in Downtown', 'APARTMENT', 'FOR SALE', 'Luxury apartment with stunning views', '123 Main St', 'Downtown', 'City', 'USA', 3, 2, 2, 500000.00, 1500, NULL, 2015, 'FURNISHED', 1000.00, 'YES', TRUE),
-- ('Cozy House in Suburbia', 'HOUSE', 'FOR RENT', 'Cozy house with backyard', '456 Elm St', 'Suburbia', 'Suburb', 'USA', 2, 1, 1, 1500.00, 1200, 2500, 2000, 'UNFURNISHED', 1500.00, 'NO', FALSE),
-- ('Modern Condo with Amenities', 'CONDO', 'FOR SALE', 'Modern condo with gym and pool', '789 Oak St', 'Downtown', 'City', 'USA', 1, 1, 1, 300000.00, 800, NULL, 2018, 'FURNISHED', 2000.00, 'YES', FALSE),
-- ('Spacious Semi-Detached House', 'SEMI-DETACHED HOUSE', 'FOR RENT', 'Spacious house with garden', '101 Pine St', 'Suburbia', 'Suburb', 'USA', 4, 3, 2, 2500.00, 2000, 5000, 2005, 'UNFURNISHED', 2000.00, 'NO', TRUE),
-- ('Vacant Land for Development', 'LAND', 'FOR SALE', 'Vacant land ready for development', '123 Maple St', 'Rural', 'Country', 'USA', 0, NULL, NULL, 100000.00, NULL, 10000, NULL, NULL, NULL, 'NO', TRUE),
-- ('Modern Apartment with View', 'APARTMENT', 'FOR RENT', 'Modern apartment with panoramic view', '456 Pine St', 'Downtown', 'City', 'USA', 2, 2, 1, 2000.00, 1000, NULL, 2019, 'FURNISHED', 1500.00, 'NO', FALSE),
-- ('Family House with Garden', 'HOUSE', 'FOR SALE', 'Family house with spacious garden', '789 Oak St', 'Suburbia', 'Suburb', 'USA', 3, 2, 2, 350000.00, 1800, 4000, 2010, 'FURNISHED', 2500.00, 'YES', FALSE),
-- ('Cozy Condo in the City', 'CONDO', 'FOR RENT', 'Cozy condo in the heart of the city', '101 Maple St', 'Downtown', 'City', 'USA', 1, 1, 1, 1800.00, 700, NULL, 2016, 'UNFURNISHED', 1800.00, 'NO', TRUE),
-- ('Renovated Semi-Detached House', 'SEMI-DETACHED HOUSE', 'FOR SALE', 'Recently renovated semi-detached house', '123 Elm St', 'Suburbia', 'Suburb', 'USA', 3, 2, 1, 280000.00, 1500, 3000, 2012, 'UNFURNISHED', 2000.00, 'YES', FALSE),
-- ('Prime Development Land', 'LAND', 'FOR SALE', 'Prime land suitable for development', '456 Oak St', 'Rural', 'Country', 'USA', 0, NULL, NULL, 200000.00, NULL, 8000, NULL, NULL, NULL, 'NO', FALSE),
-- ('Modern Apartment with Pool', 'APARTMENT', 'FOR RENT', 'Modern apartment with swimming pool', '789 Pine St', 'Downtown', 'City', 'USA', 1, 1, 1, 2200.00, 900, NULL, 2020, 'FURNISHED', 2000.00, 'NO', TRUE),
-- ('Luxurious Family House', 'HOUSE', 'FOR SALE', 'Luxurious family house with amenities', '101 Maple St', 'Suburbia', 'Suburb', 'USA', 4, 3, 2, 450000.00, 2200, 5000, 2008, 'FURNISHED', 3000.00, 'YES', TRUE);


-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price, floor_area, land_size, year_built, furnishing, secure_dep, agent_fee, featured)
-- VALUES
-- ('Luxury Apartment in Downtown', 'APARTMENT', 'FOR SALE', 'Luxury apartment with stunning views', '123 Main St', 'Downtown', 'City', 'USA', 3, 2, 2, 500000.00, 1500, NULL, 2015, 'FURNISHED', 1000.00, 'YES', TRUE),
-- ('Cozy House in Suburbia', 'HOUSE', 'FOR RENT', 'Cozy house with backyard', '456 Elm St', 'Suburbia', 'Suburb', 'USA', 2, 1, 1, 1500.00, 1200, 2500, 2000, 'UNFURNISHED', 1500.00, 'NO', FALSE),
-- ('Modern Condo with Amenities', 'CONDO', 'FOR SALE', 'Modern condo with gym and pool', '789 Oak St', 'Downtown', 'City', 'USA', 1, 1, 1, 300000.00, 800, NULL, 2018, 'FURNISHED', 2000.00, 'YES', FALSE),
-- ('Spacious Semi-Detached House', 'SEMI-DETACHED HOUSE', 'FOR RENT', 'Spacious house with garden', '101 Pine St', 'Suburbia', 'Suburb', 'USA', 4, 3, 2, 2500.00, 2000, 5000, 2005, 'UNFURNISHED', 2000.00, 'NO', TRUE),
-- ('Vacant Land for Development', 'LAND', 'FOR SALE', 'Vacant land ready for development', '123 Maple St', 'Rural', 'Country', 'USA', NULL, NULL, NULL, 100000.00, NULL, 10000, NULL, NULL, NULL, 'NO', TRUE),
-- ('Beachfront Condo with sea View', 'CONDO', 'FOR SALE', 'Luxurious condo with ocean view', '456 Beach Blvd', 'Coastal', 'Beachfront', 'USA', 2, 2, 1, 750000.00, 1800, NULL, 2010, 'FURNISHED', 1500.00, 'YES', TRUE),
-- ('Family House with Garden', 'HOUSE', 'FOR RENT', 'Family-friendly house with garden', '789 Park Ave', 'Suburbia', 'Suburb', 'USA', 3, 2, 2, 2000.00, 1600, 3000, 1995, 'UNFURNISHED', 2500.00, 'NO', FALSE),
-- ('Mountain View Chalet', 'HOUSE', 'FOR SALE', 'Charming chalet with mountain views', '101 Mountain Rd', 'Mountain', 'Rural', 'USA', 2, 1, 1, 400000.00, 1200, NULL, 2012, 'FURNISHED', 2000.00, 'YES', FALSE),
-- ('Studio Apartment in Downtown', 'APARTMENT', 'FOR RENT', 'Studio apartment in prime location', '123 Elm St', 'Downtown', 'City', 'USA', 1, 1, 0, 1200.00, 600, NULL, 2019, 'FURNISHED', 1000.00, 'NO', FALSE),
-- ('Luxury Penthouse with Views', 'APARTMENT', 'FOR SALE', 'Luxury penthouse with panoramic views', '456 Highrise Blvd', 'Downtown', 'City', 'USA', 4, 3, 3, 1500000.00, 3000, NULL, 2016, 'FURNISHED', 5000.00, 'YES', TRUE),
-- ('Rustic Cabin Retreat', 'HOUSE', 'FOR RENT', 'Cabin retreat with comfort', '284 Brodway Connecticut', 'Remote', 'Country', 'France', 5, 3, 4, 20000, 700, 2000, 1965, 'FURNISHED', 40000, 'YES', TRUE); 
