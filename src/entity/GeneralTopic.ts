import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('general_topics', { synchronize: false })
export class GeneralTopicEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id!: number

  @Column('varchar', { name: 'content', length: 255 })
  content!: string

  @Column('varchar', { name: 'content', length: 255, nullable: true, default: 'normal' })
  kind!: 'normal' | 'friends' | 'business'

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
