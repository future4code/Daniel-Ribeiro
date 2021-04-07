import * as bcrypt from "bcryptjs";


const compareHash = async (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}
export default compareHash