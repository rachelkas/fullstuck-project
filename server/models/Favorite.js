import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            likedAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

const Favorite = mongoose.model('Favorite', favoriteSchema);
export default Favorite;