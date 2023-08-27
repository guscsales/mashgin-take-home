-- Insert categories
INSERT INTO categories ("imageId", "name")
VALUES
  ('f3fbf57b118fa9', 'Bakery'),
  ('b271afbefdc554', 'Entrees'),
  ('eba73b2361fae3', 'Drinks');

-- Insert foods
INSERT INTO foods ("categoryId", "imageId", "name", "price")
VALUES
  (1, '293202f9d9f7f4', 'Bagel', 2.0),
  (1, '808916fd5ddf96', 'Croissant', 1.0),
  (1, '95d02a230fe050', 'Muffin', 1.25),
  (1, '23f95765b967ff', 'Toast / Bread', 1),
  (1, '5650be5d48a99b', 'English Muffin', 2.5),
  (2, 'bd237a0c0d19ef', 'Pasta Bar', 12.99),
  (2, '3e1bd1342800f7', 'Mediterranean Entree', 10.99),
  (2, '72589c4c990f97', 'Indian Entree', 11.95),
  (3, '70c2a6247e7b58', 'Small Drink', 0.75),
  (3,  'dba0fc03da30ca', 'Medium Drink', 1.5),
  (3,  'ffc9bf61e441cd', 'Large Drink', 2);