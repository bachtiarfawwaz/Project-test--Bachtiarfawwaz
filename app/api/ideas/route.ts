import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  // Build the API URL with all parameters
  const apiUrl = new URL("https://suitmedia-backend.suitdev.com/api/ideas")

  // Forward all search parameters
  searchParams.forEach((value, key) => {
    apiUrl.searchParams.append(key, value)
  })

  try {
    const response = await fetch(apiUrl.toString(), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
