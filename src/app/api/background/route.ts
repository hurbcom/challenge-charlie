import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(`https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US`)
    const data = await response.json()
  
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Error getting background' }, { status: 500 })
  }
}


