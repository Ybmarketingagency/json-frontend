/*
  # Create orders and shipping details schema

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, references customers)
      - `status` (order_status)
      - `total_amount` (numeric)
      - `payment_status` (payment_status)
      - `created_at` (timestamp)
      
    - `customers`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `company` (text, optional)
      - `country` (text)
      - `street` (text)
      - `house_number` (text)
      - `postal_code` (text)
      - `city` (text)
      - `phone` (text)
      - `created_at` (timestamp)

    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `shape_name` (text)
      - `width` (integer)
      - `height` (integer)
      - `dimension_c` (integer, nullable)
      - `dimension_d` (integer, nullable)
      - `color` (text)
      - `edge_finish` (text)
      - `led_light` (text)
      - `mounting_system` (boolean)
      - `delivery` (boolean)
      - `quantity` (integer)
      - `price` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create custom types
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
  customer_id uuid REFERENCES customers(id) NOT NULL,
  status order_status DEFAULT 'pending',
  total_amount numeric NOT NULL,
  payment_status payment_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) NOT NULL,
  shape_name text NOT NULL,
  width integer NOT NULL,
  height integer NOT NULL,
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
CREATE POLICY "Allow insert for all" ON customers
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow insert for all" ON orders
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow insert for all" ON order_items
  FOR INSERT TO public
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS customers_email_idx ON customers(email);
CREATE INDEX IF NOT EXISTS orders_customer_id_idx ON orders(customer_id);
CREATE INDEX IF NOT EXISTS order_items_order_id_idx ON order_items(order_id);