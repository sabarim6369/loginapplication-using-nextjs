import connectMongoDB from '../../mongodbconnection/mongodb';  
import bcrypt from 'bcrypt';
import User from '../../models/userschema';
export async function POST(request) {
    await connectMongoDB();
  
    const { name, email, password } = await request.json();
    console.log(name, email, password);
  
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return Response.json({ success: false, message: "User already exists" });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
      });
  
      console.log("User created successfully");
      return Response.json({ success: true, message: "User created successfully" });
    } catch (err) {
      if (err.code === 11000) {
        return Response.json({ success: false, message: "User already exists" });
      } else {
        console.log(err);
        return Response.json({ success: false, message: "Some error occurred" });
      }
    }
  }
  