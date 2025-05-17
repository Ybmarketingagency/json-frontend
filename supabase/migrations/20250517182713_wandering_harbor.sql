/*
  # Add RLS policies for orders system

  1. Security Changes
    - Enable RLS on all tables
    - Add policies to allow inserting data
    - Add policies to allow reading own data
*/

-- Customers table policies
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" 
ON customers FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Enable read access for all users" 
ON customers FOR SELECT 
TO public 
USING (true);

-- Orders table policies
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" 
ON orders FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Enable read access for all users" 
ON orders FOR SELECT 
TO public 
USING (true);

-- Order items table policies
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" 
ON order_items FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Enable read access for all users" 
ON order_items FOR SELECT 
TO public 
USING (true);