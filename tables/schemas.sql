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
    n_of_bedrooms INT NOT NULL,
    n_of_bathrooms INT NOT NULL,
    car_space INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    floor_area DECIMAL(10, 2),
    land_size DECIMAL(10, 2),
    year_built INT,
    furnishing ENUM('FURNISHED', 'UNFURNISHED'),
    secure_dep DECIMAL(10, 2), -- Adjust width as per your data
    agent_fee ENUM('YES', 'NO')
);

CREATE TABLE image (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    property_id INT UNSIGNED NOT NULL,
    img MEDIUMBLOB,
    FOREIGN KEY (property_id) REFERENCES property(id)
);

-- INSERT INTO img (property_id, img)
-- VALUES(1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\1.jpg')),
-- (1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\2.jpg')),
-- (1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\3.jpg')),
-- (1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\4.jpg')),
-- (1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\5.jpg')),
-- (1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\6.jpg')),
-- (1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property2\\7.jpg'));

-- INSERT INTO img (property_id, img)
-- VALUES(2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\1.jpg')),
-- (2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\2.jpg')),
-- (2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\3.jpg')),
-- (2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\4.jpg')),
-- (2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\5.jpg')),
-- (2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\6.jpg')),
-- (2, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\doorstep\\property1\\7.jpg'));

-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price)
-- VALUES ('MANSION FOR SALE', 'HOUSE', 'FOR SALE', 'SOME RANDOM STUFF', '8017 CLIFTON 1ST GROOVE ST', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 9, 5, 8, 20000000);

-- INSERT INTO property (title, prop_type, purpose, desc1, address1, region, area, country, n_of_bedrooms, n_of_bathrooms, car_space, price)
-- VALUES ('APARTMENT FOR RENT', 'APARTMENT', 'FOR RENT', 'APARTMENT', '9258 OBSERVATORY 7 CRISTIAN RD', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 2, 2, 2, 10000),
-- ('THE PARAGON APARTMENT FOR RENT', 'APARTMENT', 'FOR RENT', 'APARTMENT ON THE PARAGON', '2257 OBSERVATORY 7 MAIN RD', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 1, 1, 1, 8000),
-- ('THE RUBIX APARTMENT FOR SALE', 'APARTMENT', 'FOR SALE', 'APARTMENT FOR THE RUBIX APARTMENT', '3149 CAPE TOWN MAIN RD', 'WESTERN CAPE', 'CAPE TOWN', 'SOUTH AFRICA', 3, 4, 4, 7000000);
