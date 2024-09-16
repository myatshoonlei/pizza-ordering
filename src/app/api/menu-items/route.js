import { isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { MenuItem } from "@/models/MenuItem";
import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URL);
  }
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  if (await isAdmin()) {
    // If category is an empty string, remove it from the data
    if (data.category === "") {
      delete data.category;
    }

    try {
      const menuItemDoc = await MenuItem.create(data);
      return Response.json(menuItemDoc);
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  } else {
    return Response.json({ error: "Not authorized" }, { status: 403 });
  }
}

export async function PUT(req) {
  await connectDB();
  if (await isAdmin()) {
    const { _id, ...data } = await req.json();
    
    // If category is an empty string, remove it from the data
    if (data.category === "") {
      delete data.category;
    }

    try {
      await MenuItem.findByIdAndUpdate(_id, data);
      return Response.json({ success: true });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
  return Response.json({ error: "Not authorized" }, { status: 403 });
}

export async function GET() {
  await connectDB();
  try {
    const menuItems = await MenuItem.find().populate('category');
    return Response.json(menuItems);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(req) {
  await connectDB();
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    try {
      await MenuItem.deleteOne({ _id });
      return Response.json({ success: true });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
  return Response.json({ error: "Not authorized" }, { status: 403 });
}