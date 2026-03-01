CREATE OR REPLACE FUNCTION increment_downloads(tid uuid)
RETURNS void AS $$
BEGIN
  UPDATE templates SET downloads = COALESCE(downloads, 0) + 1 WHERE id = tid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
