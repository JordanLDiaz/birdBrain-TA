import mongoose from "mongoose";
const Schema = mongoose.Schema

export const BirdSchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 30 },
  img: { type: String, required: true, maxLength: 500 },
  canFly: { type: Boolean, required: false, default: false },
  size: { type: String, required: true, enum: ['small', 'medium', 'large', 'chunko'] },
  birdWatcherId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

// NOTE on my bird schema, there will exist a virtual for birdWatcher
// our localfield will be id that we've put into our schema that has a reference
// foreignField will always be from our db
// justOne says, will there be just one creator of a bird/object (one birdWatcher creator)
// ref is the model the virtual references
BirdSchema.virtual('birdWatcher', {
  localField: 'birdWatcherId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// HERe on my bird, reference id for bird, while you're doing that also go look at spotter collection and look at property called birdId, for all of the documents that have a birdId of 3, if that id matches, count it. How many times does this birdId show up in different collections? 
BirdSchema.virtual('spotterCount', {
  // Our local field is our mongo id
  localField: '_id',
  ref: 'Spotter',
  // foreign field is coming from mongo too
  foreignField: 'birdId',
  count: true
})
