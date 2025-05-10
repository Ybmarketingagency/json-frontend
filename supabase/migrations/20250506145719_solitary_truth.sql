/*
  # Rename dimension columns

  1. Changes
    - Rename `width` to `a` in order_items table
    - Rename `height` to `b` in order_items table
    
  2. Notes
    - Preserves existing data
    - Updates column names to match frontend naming convention
*/

DO $$ 
BEGIN
  -- Rename width to a
  ALTER TABLE order_items 
  RENAME COLUMN width TO a;

  -- Rename height to b
  ALTER TABLE order_items 
  RENAME COLUMN height TO b;
END $$;