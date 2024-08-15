// import mongoose from 'mongoose';
// import config from 'config';

// const db = process.env.MONGODB_URI;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// export default connectDB;





















































import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
