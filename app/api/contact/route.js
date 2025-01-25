import connectDB from "@/utils/db";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    console.log("Connecting to database...");
    await connectDB();
    console.log("Database connected.");

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      console.error("Validation error: Missing fields.");
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    console.log("Creating new contact...");
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("Contact saved successfully.");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
