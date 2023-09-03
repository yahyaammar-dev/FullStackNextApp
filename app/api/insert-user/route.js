import pool from '../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Assuming the request body contains user data as JSON
    const userData = await req.json();


    // Insert the new user into the "users" table
    const result = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [
      userData.username,
      userData.email,
      userData.password,
    ]);

    // Check if the user was successfully inserted
    if (result[0].affectedRows === 1) {
      return new NextResponse(JSON.stringify({ message: 'User inserted successfully' }), {
        status: 201, // 201 Created
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new NextResponse(JSON.stringify({ error: 'User insertion failed' }), {
        status: 400, // 400 Bad Request
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error inserting user:', error);
    return new NextResponse(JSON.stringify(error), {
      status: 500, // 500 Internal Server Error
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
