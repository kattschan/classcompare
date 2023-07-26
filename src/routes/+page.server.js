import { sql } from '@vercel/postgres';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const usersclass = data.get('course');
		const { rows } =
			await sql`SELECT * FROM classes WHERE name = ${name} AND class = ${usersclass}`;
		console.log(rows);
		// Get anyone else with the same class
		const { classRows } =
			await sql`SELECT * FROM classes WHERE class = ${usersclass} AND name != ${name}`;
		console.log(classRows);
		if (rows[0]) return { name: name, class: usersclass, classRows };
		// Add to database
		const { addRows } = await sql`
                INSERT INTO classes (name, class) VALUES (${name}, ${usersclass})
            `;
		console.log(addRows);
		return { name: name, class: usersclass, classRows };
	}
};
