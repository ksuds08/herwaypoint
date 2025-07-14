-- Initial schema for HerWaypoint D1 database
CREATE TABLE hosts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  city TEXT,
  description TEXT
);

INSERT INTO hosts (name, city, description) VALUES
  ('Ana', 'Lisbon', 'Local chef offering pastel de nata class'),
  ('Maria', 'Barcelona', 'Guided Gaudí architecture walk'),
  ('Siti', 'Bali', 'Balinese yoga session');
