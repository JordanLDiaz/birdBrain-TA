import mongoose from "mongoose";
const Schema = mongoose.Schema

export const SpotterSchema = new Schema({
  birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird' },
  watcherId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } }
)

SpotterSchema.virtual('watcher', {
  localField: 'watcherId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

// NOTE this will prevent the same person from watching a bird more than once
// This is saying only one thing in MongoDB can exist with this watcherId and this birdId (ie cant spot a bird twice)
SpotterSchema.index({ watcherId: 1, birdId: 1 }, { unique: true })