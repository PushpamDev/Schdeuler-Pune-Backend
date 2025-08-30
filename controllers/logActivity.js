const supabase = require('../db.js');

async function logActivity(activity_type, metadata, user_id) {
  try {
    // TODO: Replace with the actual user ID from the request
    const temp_user_id = user_id || '00000000-0000-0000-0000-000000000000'; 
    const { error } = await supabase
      .from('activities')
      .insert([{ activity_type, metadata, user_id: temp_user_id }]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}

module.exports = { logActivity };