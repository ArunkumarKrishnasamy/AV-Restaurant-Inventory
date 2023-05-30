CREATE TABLE inventory(
    id BIGSERIAL PRIMARY KEY,
    contact VARCHAR(200),
    operation_type VARCHAR(100),
    product_name VARCHAR(100),
    demand INTEGER,
)

INSERT INTO inventory(contact, operation_type, product_name, demand) VALUES ($1, $2,$3, $4) RETURNING *