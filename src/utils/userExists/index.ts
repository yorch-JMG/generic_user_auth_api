import { pool } from "../../database"
export const userExists = async (username: string) => {
	const {rows} = await pool.query("SELECT * FROM get_user_by_username($1)", [username]);
	if (rows.length !== 0) return {
		success: 1,
		user: rows[0]
	}
	return {
		success: 0,
	}
}
