/*
  # Initial database schema setup

  1. Tables
    - customers: Stores customer information
    - orders: Tracks order status and payment
    - order_items: Contains individual items in each order

  2. Enums
    - order_status: Status of the order (pending, processing, completed, cancelled)
    - payment_status: Payment status (pending, paid, failed)

  3. Security
    - Enable RLS on all tables
    - Add policies for public access
*/

-- Create enums
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'completed', 'cancelled');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'failed');

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text,
  country text NOT NULL,
  street text NOT NULL,
  house_number text NOT NULL,
  postal_code text NOT NULL,
  city text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES customers(id),
  status order_status DEFAULT 'pending',
  total_amount numeric NOT NULL,
  payment_status payment_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id),
  shape_name text NOT NULL,
  a integer NOT NULL,
  b integer NOT NULL,
  dimension_c integer,
  dimension_d integer,
  color text NOT NULL,
  edge_finish text NOT NULL,
  led_light text NOT NULL,
  mounting_system boolean DEFAULT false,
  delivery boolean DEFAULT true,
  quantity integer NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow insert for customers" ON customers FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow read for customers" ON customers FOR SELECT TO public USING (true);

CREATE POLICY "Allow insert for orders" ON orders FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow read for orders" ON orders FOR SELECT TO public USING (true);
CREATE POLICY "Allow update for orders" ON orders FOR UPDATE TO public USING (true);

CREATE POLICY "Allow insert for order_items" ON order_items FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow read for order_items" ON order_items FOR SELECT TO public USING (true);

-- Create indexes
CREATE INDEX customers_email_idx ON customers(email);
CREATE INDEX orders_customer_id_idx ON orders(customer_id);
CREATE INDEX order_items_order_id_idx ON order_items(order_id);