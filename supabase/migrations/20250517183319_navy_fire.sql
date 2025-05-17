/*
  # Consolidate RLS policies

  1. Changes
    - Remove redundant INSERT policies from customers table
    - Remove redundant INSERT policies from orders table
    - Remove redundant INSERT policies from order_items table
    - Create single, clear policies for each action
  
  2. Security
    - Maintains same level of access control
    - Simplifies policy evaluation
    - Improves performance
*/

-- Remove redundant policies from customers table
DROP POLICY IF EXISTS "Allow insert for all" ON customers;
DROP POLICY IF EXISTS "Enable insert for all (delete later)" ON customers;

-- Remove redundant policies from orders table
DROP POLICY IF EXISTS "Allow insert for all" ON orders;
DROP POLICY IF EXISTS "enable insert for all (delete later)" ON orders;

-- Remove redundant policies from order_items table
DROP POLICY IF EXISTS "Allow insert for all" ON order_items;
DROP POLICY IF EXISTS "enable insert for all (delete later)" ON order_items;

-- Create consolidated policies for customers table
CREATE POLICY "allow_insert_customers"
ON customers
FOR INSERT
TO public
WITH CHECK (true);

-- Create consolidated policies for orders table
CREATE POLICY "allow_insert_orders"
ON orders
FOR INSERT
TO public
WITH CHECK (true);

-- Create consolidated policies for order_items table
CREATE POLICY "allow_insert_order_items"
ON order_items
FOR INSERT
TO public
WITH CHECK (true);