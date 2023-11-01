import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class NewUserDto {
    @IsString()
    @IsNotEmpty({message: "First name cannot be empty"})
    FirstName: string;

    @IsString()
    @IsNotEmpty({message: "Last name cannot be empty"})
    LastName: string;

    @IsEmail()
    Email: string;

    @Length(8, 20, {message: "Password must be between 8 and 20 characters"})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: "Password must contain lower and upper letters and numbers"}) //at least one lower letter, one upper letter and one number or special character
    Password: string;
}