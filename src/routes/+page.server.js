import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';

export const actions = {
    default: async (event) => {
            const { rows } = await sql`
                SELECT * FROM grades WHERE name = ${event.query.name} AND class = ${event.query.class}
            `;
            if (rows[0]) return { error: 'Already exists', name: event.query.name, class: event.query.class, id: rows[0].id };
            // Add to database
            const { addRows } = await sql`
                INSERT INTO grades (name, class) VALUES (${event.query.name}, ${event.query.class})
            `;
            // Get anyone else with the same class
            const { classRows } = await sql`
                SELECT * FROM grades WHERE class = ${event.query.class}
            `;
            return { name: event.query.name, class: event.query.class, id: addRows[0].id, classRows };
    }
};