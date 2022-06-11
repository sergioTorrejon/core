import {
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,

} from 'typeorm';
import { hash } from 'bcryptjs';
import { Role, Status } from 'src/constants/enums';


@Entity({name:'users', schema: 'core' })
export class User {
  //PRIMARY KEY GUID AUTOCLAVE STRING
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // COLUMNS TABLE USERS
  @Column({ type: 'varchar', length: 50, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, default: '', nullable: true })
  company?: string;

  @Column({ type: 'varchar', length: 255, default: '', nullable: true, select: false  })
  name?: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255, default: '', nullable: true, select: false   })
  lastName?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  password: string;

  @Column({ type: 'simple-array' })
  role: string[];


  // COLUMNS AUDIT
  @Column({ type: 'varchar', default: Status.ACTIVE, length: 10 })
  status: string;

  @Column({ type: 'varchar', name: 'usuario_creacion',length: 50, default: Role.DEFAULT, select: false })
  userCreate: string;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion', nullable: false, select: false })
  dateCreate: Date;

  @Column({ type: 'varchar', name: 'usuario_modificacion',length: 50, default: Role.DEFAULT, select: false })
  userUpdate: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'fecha_modificacion', nullable: true, select: false })
  dateUpdate: Date;

  //FUNCTIONS
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }



}
