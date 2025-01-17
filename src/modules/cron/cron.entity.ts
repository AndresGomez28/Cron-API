import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class CronEntity extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  schedule: string;

  @Prop({ required: true })
  timezone: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: false })
  updatedBy?: string;

  @Prop({ required: false })
  deletedAt?: Date;

  @Prop({ required: false })
  deletedBy?: string;

  @Prop({ required: false })
  createdAt?: Date;

  @Prop({ required: false })
  updatedAt?: Date;
}

export const CronSchema = SchemaFactory.createForClass(CronEntity);

CronSchema.index(
  { id: 1 },
  {
    name: 'index to improve id search query',
  },
);
