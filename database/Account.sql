create table Accounts (
  account_id SERIAL PRIMARY KEY,
  account_name VARCHAR(30) NOT NULL,
  amount FLOAT NOT NULL,
  logo VARCHAR(100) NOT NULL,
  color VARCHAR(7) NOT NULL
)
INSERT INTO Accounts (account_name, amount, logo, color)
values ('Brubank', 24500, 'Brubank.jpeg', '#43CD4B'),
  ('Lemon', 140400, 'Lemon.jpeg', '#6742e0'),
  ('Fiwind', 0.00, 'Brubank.jpeg', '#E8AE00'),
  ('Ualá', 4645, 'Uala.jpeg', '#022a9b')
