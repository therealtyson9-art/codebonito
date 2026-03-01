-- Add missing columns to templates table
ALTER TABLE templates ADD COLUMN IF NOT EXISTS slug text UNIQUE;
ALTER TABLE templates ADD COLUMN IF NOT EXISTS style text;
ALTER TABLE templates ADD COLUMN IF NOT EXISTS platforms text[] DEFAULT '{}';
ALTER TABLE templates ADD COLUMN IF NOT EXISTS downloads integer DEFAULT 0;
ALTER TABLE templates ADD COLUMN IF NOT EXISTS is_pro boolean DEFAULT false;
ALTER TABLE templates ADD COLUMN IF NOT EXISTS preview_url text;

-- Create index on slug
CREATE INDEX IF NOT EXISTS idx_templates_slug ON templates(slug);
CREATE INDEX IF NOT EXISTS idx_templates_category ON templates(category);
CREATE INDEX IF NOT EXISTS idx_templates_style ON templates(style);
