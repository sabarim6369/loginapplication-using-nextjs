import connectMongoDB from '../../mongodbconnection/mongodb';
import bcrypt from 'bcrypt';
import User from '../../models/userschema';

export async function POST(request) {
    await connectMongoDB();
    const { email, password } = await request.json();
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return Response.json({ message: "User not found" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return Response.json({ success:false,message: "Invalid password" }, { status: 401 });
        }

        return Response.json({ success:true,message: "Login successful", user: { email: user.email, name: user.name } });
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}
