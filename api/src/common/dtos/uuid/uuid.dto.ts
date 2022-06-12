import { IsUUID } from "class-validator";

export class UuidDto {
    @IsUUID(undefined, {each:true, message:'UUID ERRONEO'})
    id?: string;
}