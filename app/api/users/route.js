import pool from '../../../db';
import { NextRequest, NextResponse } from "next/server";


export async function GET(req) {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM users');
    const json_response = { users: rows };

    return new NextResponse(JSON.stringify(json_response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });


  } catch (error) {
    console.error('Error fetching users:', error);
    return new NextResponse(JSON.stringify(error), {
      status: 409,
      headers: { "Content-Type": "application/json" },
    });
  }
}

