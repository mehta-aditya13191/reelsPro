import mongoose, { model, Schema, models } from "mongoose";

export const Video_Dimensions = {
  widht: 1080,
  height: 1920,
} as const;

export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    widht: number;
    quality?: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const videoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      rquired: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    transformation: {
      height: { type: Number, default: Video_Dimensions },
      widht: { type: Number, default: Video_Dimensions },
      quality: { type: Number, min: 1, max: 100 },
    },
  },
  { timestamps: true }
);

const Video = models?.Video || model("Video", videoSchema);

export default Video;
